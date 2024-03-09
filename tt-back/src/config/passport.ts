import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { connection } from './database';
import { isPasswordValid } from 'src/utils/passwordValidator';
const User = connection.models.User;

const fields = {
  emailField: 'email',
  passwordField: 'password',
};

const verify = (email, password, done) => {
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return done(null, false);
      }
      const isValidUser = isPasswordValid(password, user.hash, user.salt);

      return isValidUser ? done(null, user) : done(null, false);
    })
    .catch((err) => done(err));
};

const strategy = new LocalStrategy(fields, verify);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  User.findById(userId)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});
