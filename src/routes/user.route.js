const express = require('express');
const passport = require('passport');
const userController = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email']}));

userRouter.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/success',
    failureRedirect: '/fail'
  })
);

userRouter.get('/fail', (req, res) => {
  res.send('failed attempt');
});

userRouter.get('/success', (req, res) => {
  res.send('success');
});

module.exports = userRouter;