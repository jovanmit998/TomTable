import express from 'express';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dotenv from 'dotenv/config';
import { router } from './routes';
import session from 'express-session';
import cors from 'cors';
import MongoStore from 'connect-mongo';

// Temporary for localhost only
const corsOptions = {
  origin: 'http://localhost:4200',
  credentials: true,
  optionSuccessStatus: 200,
};

const host = process.env.HOST;
const port = Number(process.env.PORT);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

const sessionStore = MongoStore.create({
  mongoUrl: process.env.DB_STRING,
  collectionName: 'users',
  mongoOptions: { session },
});

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: false,
    },
  })
);

app.use(router);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
