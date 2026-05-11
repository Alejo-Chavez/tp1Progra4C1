import { Injectable, signal, inject } from "@angular/core";
import { Message, MessageInsert, MessageWithProfile } from "../models/global-chat.model";
import { SupabaseService } from "./supabase.service";
import { AuthServices } from "./auth.service";

@Injectable({ providedIn: "root" })

export class ChatService {

    private supabase = inject(SupabaseService);
    private auth = inject(AuthServices);
    private isRealtimeInitialized = false;
    private channel = this.supabase.getClient().channel('chat-room');

    messages = signal<MessageWithProfile[]>([])
    currentUser = this.auth.currentUser;

    async getMessages() { //traigo todos mis {mensajes} y los meto en la signal
        const { data, error } = await this.supabase.getClient().from('chat').select('*, user_profile(nombre)').order('created_at', { ascending: true });
        if (error) console.log(error.message);
        if (data) { this.messages.set(data) };
    };

    async sendMessage(message: string) {
        const user = this.currentUser();

        if (!user) return;
        const newMessage: MessageInsert = {
            message: message,
            userId: user.id
        };

        const { data, error } = await this.supabase.getClient().from('chat').insert(newMessage).select('*, user_profile(nombre)').single();
        if (error) console.log(error.message);
        if (data) this.messages.update((current) => [...current, data]);

    }

    initRealtime() {
        if (this.isRealtimeInitialized) return; //evito crear un canal nuevo si ya hay uno -> multiples suscripciones = mensajes duplicados
        this.isRealtimeInitialized = true; //bandera para no suscribirme a un chat nuevo si ya había
        
        //chat-room es el identificador de mi canal realtime
        this.channel //crea un canal Realtime como si fuera un web socket con nombre
            .on( //método que escucha eventos   
                'postgres_changes', //le dice a Supabase: "avísame cuando algo cambie en la base de datos PostgreSQL
                {
                    //qué cambios escuchar
                    event: 'INSERT',      //solo cuando se inserte
                    schema: 'public',     //esquema de la bbdd
                    table: 'chat'         //tabla específica que quiero escuchar
                },
                async (payload) => { //callback que se ejecuta cada vez que ocurre el evento.
                    const record = payload.new as Message; //los datos de la fila recién insertada, castea payload.new al tipo Message y record contiene el mensaje recién insertado en la bbdd (id, message, userId, created_at).
                    const user = this.currentUser(); // usuario actual

                    if (user && record.userId === user.id) return; //filtro antiduplicados. Cuando YO envio un mensaje con sendMessage(), ya lo agregue localmente en la línea 35
                    //consulta el nombre del usuario que escribió el mensaje -- cuando el mensaje llega por Realtime, payload.new solo tiene los datos de la tabla chat, no incluye el join a user_profile, entonces se busco explícitamente
                    const { data: profile } = await this.supabase.getClient().from('user_profile').select('nombre').eq('id', record.userId).single();

                    //objeto que sí incluye los datos del perfil
                    const newMessage: MessageWithProfile = { ...record, user_profile: profile ?? undefined }; //{ ...record } -> spread: copia todas las propiedades de record (id, message, userId, created_at).
                    this.messages.update((prev) => { //actualiza messages- prev valor actual del array de mensajes
                        //verifica si ya existe un mensaje con ese mismo id en el array, some() devuelve true si algún elemento cumple la condición
                        if (prev.some((m) => m.id === newMessage.id)) return prev; // Si ya existe -> devuelve prev tal cual (sin cambios).que contiene todos los mensajes anteriores más el nuevo al final, si no existe -> crea un nuevo array con [...prev, newMessage] .
                        return [...prev, newMessage]})
                }).subscribe(); //le dice a supabase "conecta este canal y empezá a escuchar"
    }


};
