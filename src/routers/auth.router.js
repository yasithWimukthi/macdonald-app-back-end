const express = require("express");
const { userRegisterHandler, userLoginHandler, facebookSuccessLoginHandler } = require("../controllers/auth.controller");
const passport = require('passport');
const jwt = require("jsonwebtoken");

const userController = require('../controllers/user.controller');

const AuthRouter = express.Router();

// Register Routers

AuthRouter.post("/admin/register", userRegisterHandler("admin"));
AuthRouter.post("/customer/register", userRegisterHandler("customer"));
AuthRouter.post("/login", userLoginHandler());

// facebook auth related
AuthRouter.get('/facebook', passport.authenticate('facebook', { scope: ['email']}));

AuthRouter.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/api/v1/auth/success',
    failureRedirect: '/api/v1/auth/fail'
  })
);

AuthRouter.get('/success', facebookSuccessLoginHandler);

AuthRouter.get('/fail', (req, res, next) => {
  res.status(400).json({ message: 'facebook auth failed' });
});


// http://localhost:3000/api/v1/auth/facebook

/**
 * @swagger
 * /auth/admin/register:
 *   post:
 *     tags:
 *          - auth
 *
 * /auth/customer/register:
 *   post:
 *     tags:
 *          - auth
 *
 * /auth/login:
 *   post:
 *     tags:
 *          - auth
 */

// // Me Router
// AuthRouter.get("/me", authMiddleware.AuthenticationMiddleware(), authController.getUserDetailsHandler());
// // !allow email change?
// AuthRouter.patch("/me", authMiddleware.AuthenticationMiddleware(), ValidationMiddleware(patchUser), authController.patchUserHandler());

module.exports = AuthRouter;
