import { Injectable, signal, inject } from "@angular/core";
import { Message, MessageInsert } from "../models/global-chat.model";
import { SupabaseService } from "./supabase.service";
import { AuthServices } from "./auth.service";

@Injectable({ providedIn: "root" })

export class ChatService {
    private supabase = inject(SupabaseService);
    private auth = inject(AuthServices);


    messages = signal<Message[]>([])
    currentUser = this.auth.currentUser;

    async getMessages() { //traigo todos mis {mensajes} y los meto en la signal
        const { data, error } = await this.supabase.getClient().from('chat').select('*').order('created_at', { ascending: true });
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

        const { data, error } = await this.supabase.getClient().from('chat').insert(newMessage);
        if (error) console.log(error.message);
        if (data) {
            this.getMessages();
        }
    }


};
