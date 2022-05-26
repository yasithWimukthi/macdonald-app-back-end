const express = require("express");
const { getAllCategoriesHandler, postCatergoryHandler } = require("../controllers/category.controller");
// const { userRegisterHandler, userLoginHandler } = require("../controllers/auth.controller");

const CategoryRouter = express.Router();

// Category Routers

CategoryRouter.get("/", getAllCategoriesHandler());
CategoryRouter.post("/", postCatergoryHandler());

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

module.exports = CategoryRouter;
