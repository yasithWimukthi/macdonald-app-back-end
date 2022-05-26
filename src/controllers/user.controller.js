const passport = require('passport');
const strategy = require('passport-facebook');

const FacebookStrategy = strategy.Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ["email", "name"]
  },
  (accessToken, refreshToken, profile, done) => {
    const { id, email, first_name: firstName, last_name: lastName } = profile._json;
    const userData = {
      id, 
      email,
      firstName,
      lastName
    };
    console.log(userData);
    done(null, profile);
  }
));