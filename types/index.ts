import { Socket } from "socket.io";

export interface ServicesProps<T> {
    socket: Socket,
    data: T,
}

export interface SignInData {
    email: string,
    password: string,
}

export interface SignUpData {
    login: string;
    email: string,
    password: string,
}