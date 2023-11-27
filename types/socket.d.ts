import { ExtendedError } from 'socket.io/dist/namespace';
import { Socket } from 'socket.io';

export type INextFn = (err?: ExtendedError) => void;
export type ICbFn = (err?: ExtendedError | null, data?: any) => void;
export type IRouteFn<A, B> = (socket: Socket, data: A) => Promise<B>;
