export interface Message { //modelo de lo que recibo de la bbdd
   id: string;
   message: string;
   userId: string;
   created_at: string;
}

export interface MessageInsert { //modelo de lo que YO envio
    message: string;
   userId: string;
}