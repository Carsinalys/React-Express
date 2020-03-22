export interface newMessage {
    name: string;
    message: string;
    room: string;
    id: string;
}

export interface Message {
    _id: string;
    name: string;
    message: string;
    room: string;
    id: string;
    createAt: Date;
}

export interface Room {
    _id: string;
    name: string;
    createAt: Date;
}