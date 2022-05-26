const express = require("express");
const { userRegisterHandler, userLoginHandler } = require("../controllers/auth.controller");

const AuthRouter = express.Router();

// Register Routers

AuthRouter.post("/admin/register", userRegisterHandler("admin"));
AuthRouter.post("/customer/register", userRegisterHandler("customer"));
AuthRouter.post("/login", userLoginHandler());

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
