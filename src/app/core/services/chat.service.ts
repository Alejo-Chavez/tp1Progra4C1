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
        if (this.isRealtimeInitialized) return;
        this.isRealtimeInitialized = true;

        this.channel
            .on(
                'postgres_changes',
                {
                    event: 'INSERT',      // qué evento escuchar
                    schema: 'public',
                    table: 'chat'
                },
                async (payload) => {
                    const record = payload.new as Message;
                    const user = this.currentUser();

                    if (user && record.userId === user.id) return;
                    const { data: profile } = await this.supabase.getClient().from('user_profile').select('nombre').eq('id', record.userId).single();
                    const newMessage: MessageWithProfile = { ...record, user_profile: profile ?? undefined };
                    this.messages.update((prev) => {
                        if (prev.some((m) => m.id === newMessage.id)) return prev;
                        return [...prev, newMessage]})
                }).subscribe();
    }


};
