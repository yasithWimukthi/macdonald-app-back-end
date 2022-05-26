const express = require("express");
const { userRegisterHandler } = require("../controllers/auth.controller");

const AuthRouter = express.Router();

// Register Routers
/**
 * @swagger
 * /auth/customer/register:
 *   post:
 *     description: Welcome to cafe-app-api v1.!
 *     responses:
 *       200:
 *         description: Returns welcome message.
 */
AuthRouter.post("/customer/register", userRegisterHandler("customer"));

// // Login Routers
// AuthRouter.post("/login", ValidationMiddleware(loginUser), authController.userLoginHandler());

// // Me Router
// AuthRouter.get("/me", authMiddleware.AuthenticationMiddleware(), authController.getUserDetailsHandler());
// // !allow email change?
// AuthRouter.patch("/me", authMiddleware.AuthenticationMiddleware(), ValidationMiddleware(patchUser), authController.patchUserHandler());

module.exports = AuthRouter;
