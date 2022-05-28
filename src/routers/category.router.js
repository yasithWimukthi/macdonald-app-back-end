const express = require("express");
const { getAllCategoriesHandler, postCategoryHandler, patchCategoryHandler, deleteCategoryHandler } = require("../controllers/category.controller");
const { AuthorizationMiddleware } = require("../middlewares/authorization.middleware");

const CategoryRouter = express.Router();

// Category Routers
CategoryRouter.get("/", getAllCategoriesHandler());
CategoryRouter.post("/", AuthorizationMiddleware("admin"), postCategoryHandler());
CategoryRouter.patch("/:id", AuthorizationMiddleware("admin"), patchCategoryHandler());
CategoryRouter.delete("/:id", AuthorizationMiddleware("admin"), deleteCategoryHandler());

/**
 * @swagger
 * /categories:
 *   get:
 *     tags:
 *          - category
 *
 *   post:
 *     tags:
 *          - category
 *
 * /categories/:id:
 *   patch:
 *     tags:
 *          - category
 *   delete:
 *     tags:
 *          - category
 */

module.exports = CategoryRouter;
