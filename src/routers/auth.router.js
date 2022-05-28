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

module.exports = AuthRouter;
