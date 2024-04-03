import express from 'express';
import { generatePassword, isPasswordValid } from '../utils/passwordValidator';
import { connection } from '../config/database';

export const router = express.Router();

const User = connection.models.User;

const isAuth = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized user' });
  }
};

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: 'Email or password incorrect' });
  }

  const isValidPassword = isPasswordValid(password, user.hash, user.salt);

  if (!isValidPassword) {
    return res.status(400).json({ message: 'Email or password incorrect' });
  }

  // @ts-ignore
  req.session.isAuth = true;
  res.status(200).json({ message: 'Auth success' });
});

router.post('/register', async (req, res) => {
  const { email, username, password } = req.body;

  let newUser = await User.findOne({ email });

  if (newUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const saltHash = generatePassword(password as string);
  const { salt, hash } = saltHash;

  newUser = new User({
    email,
    username,
    hash,
    salt,
    admin: true,
  });

  newUser.save().then((user) => {
    console.log(user);
    res.status(201).json({ message: 'Registration successful' });
  });
});

router.post('/logout', (req, res) => {
  // @ts-ignore
  req.session.destroy((err) => {
    if (err) throw err;
    res.status(200).json({ message: 'Logout success' });
  });
});

router.get('/test', isAuth, (req, res) => {
  console.log('Protected route');
});
