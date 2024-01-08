import express from 'express';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dotenv from 'dotenv/config';

const host = process.env.HOST;
const port = Number(process.env.PORT);

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
