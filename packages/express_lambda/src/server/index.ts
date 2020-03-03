import express from 'express';

const app = express();

app.all('/express', function(_, res) {
  res.send('Hello World!');
});

export { app };
