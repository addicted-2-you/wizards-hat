import path from 'path';

import http from 'http';
import express from 'express';
import socketio, { Socket } from 'socket.io';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import { ESocketEvents } from 'constants/ws.events';
import { EAppStages } from 'constants/EAppStages';

import { CUserConnection } from 'models/CUserConnection';

import { store } from 'store';
import { setAppStage } from 'store/action-creators/app.action-creators';
import { setIsCurrentUserTurn } from 'store/action-creators/game.action-creators';

import { tossCoin } from 'utils/core.utils';
import { readFile } from 'utils/server.utils';

import { addResponseHeaders } from './middlewares';

import App from '../App';

// express stuff
const PORT = process.env.PORT || 3000;

const app = express();

const httpServer = http.createServer(app);

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public'), { index: false }));
app.use(addResponseHeaders);

app.get('/', (req, resp) => {
  const client = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  readFile(path.resolve(__dirname, './public/index.html'), 'utf8')
    .then((data) => {
      resp.send(data.replace('<div id="root"></div>', `<div id='root'>${client}</div>`));
    })
    .catch(() => {
      resp.status(500).send('Oops, better luck next time!');
    });
});

// web-sockets stuff
const io = socketio(httpServer);

const sockets: { [key: string]: CUserConnection } = {};

io.on('connection', (socket: Socket) => {
  console.log('user connected');

  const newUser = new CUserConnection(socket);
  const unpairedSocket = Object.values(sockets).find((socketItem) => !socketItem.pair);
  if (unpairedSocket) {
    unpairedSocket.pair = newUser;
    newUser.pair = unpairedSocket;

    unpairedSocket.socket.emit(
      ESocketEvents.OPPONENT_FOUND,
      setAppStage(EAppStages.GAME_IN_PROGRESS),
    );

    newUser.socket.emit(ESocketEvents.OPPONENT_FOUND, setAppStage(EAppStages.GAME_IN_PROGRESS));

    // decide who makes first turn
    const newUserMakesFirstTurn = tossCoin();

    unpairedSocket.socket.emit(
      ESocketEvents.OPPONENT_FOUND,
      setIsCurrentUserTurn(!newUserMakesFirstTurn),
    );

    newUser.socket.emit(ESocketEvents.OPPONENT_FOUND, setIsCurrentUserTurn(newUserMakesFirstTurn));
  }

  sockets[socket.id] = newUser;

  socket.on(ESocketEvents.SEND_SPELL, (data) => {
    console.log('player move', data);

    sockets[socket.id].pair?.socket.emit(ESocketEvents.RECEIVE_SPELL, data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');

    delete sockets[socket.id];
  });
});

httpServer.listen(PORT, () => {
  process.stdout.write(`listening on ${PORT}`);
});
