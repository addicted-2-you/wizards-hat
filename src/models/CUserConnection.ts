import { Socket } from 'socket.io';

export class CUserConnection {
  public pair: CUserConnection | null;

  public socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
    this.pair = null;
  }
}
