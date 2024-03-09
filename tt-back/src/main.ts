import express from 'express';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dotenv from 'dotenv/config';
import { router } from './routes';
import passport from 'passport';
import session from 'express-session';
import cors from 'cors';
import MongoStore from 'connect-mongo';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as passportConfig from './config/passport';

// Temporary for localhost only
const corsOptions = {
  origin: '*',
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
});

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
