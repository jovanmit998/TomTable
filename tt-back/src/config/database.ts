// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dotenv from 'dotenv/config';
import mongoose from 'mongoose';

const connectionAddress = process.env.DB_STRING;
export const connection = mongoose.createConnection(connectionAddress);

const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  hash: String,
  salt: String,
  admin: Boolean,
});

const User = connection.model('User', UserSchema);
