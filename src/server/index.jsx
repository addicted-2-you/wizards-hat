import path from 'path';

import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { addResponseHeaders } from './middlewares';

import { readFile } from './utils';

import App from '../App';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public'), { index: false }));
app.use(addResponseHeaders);

app.get('/', (req, resp) => {
  const client = ReactDOMServer.renderToString(<App />);

  readFile(path.resolve(__dirname, './public/index.html'), 'utf8')
    .then((data) => {
      resp.send(data.replace('<div id="root"></div>', `<div id='root'>${client}</div>`));
    })
    .catch(() => {
      resp.status(500).send('Oops, better luck next time!');
    });
});

app.listen(PORT, () => {
  process.stdout.write(`listening on ${PORT}`);
});
