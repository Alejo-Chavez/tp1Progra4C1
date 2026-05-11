export interface Message { //modelo de lo que recibo de la bbdd
   id: string;
   message: string;
   userId: string;
   created_at: string;
}
export interface MessageWithProfile extends Message {
  user_profile?: {
    nombre: string;
  };
}

export interface MessageInsert { //modelo de lo que YO envio
    message: string;
   userId: string;
}