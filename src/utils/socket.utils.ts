import { eventChannel } from 'redux-saga';

import { io } from 'socket.io-client';

import { ESocketEvents } from 'constants/ws.events';

export function createDuplexConnection() {
  const socket = io();

  function subscribe(emitter: Function) {
    socket.on(ESocketEvents.OPPONENT_FOUND, emitter);
    return () => socket.off(ESocketEvents.PLAYER_MOVE, emitter);
  }

  return { channel: eventChannel(subscribe), socket };
}
