import express from 'express';
import { generatePassword } from '../utils/passwordValidator';
import { connection } from '../config/database';

export const router = express.Router();

const User = connection.models.User;

router.get('/', (req, res) => {
  console.log('Welcome to TomTable backend :)');
  res.send({ message: 'Hello from the other side' });
});

router.post('/register', (req, res) => {
  console.log(req.body);
  const saltHash = generatePassword(req.body.password as string);
  const { salt, hash } = saltHash;

  const newUser = new User({
    email: req.body.email,
    username: req.body.username,
    hash,
    salt,
    admin: true,
  });

  newUser.save().then((user) => {
    console.log(user);
    res.status(200).json({ message: 'Authentication successful' });
  });
});
