const express = require("express");
const { getAllCategoriesHandler, postCategoryHandler, patchCategoryHandler, deleteCategoryHandler } = require("../controllers/category.controller");
const { AuthorizationMiddleware } = require("../middlewares/authorization.middleware");

const ValidationMiddleware = require("../middlewares/validation.middleware");
const { postCategory, patchCategory } = require("../validation/category.schema");

const CategoryRouter = express.Router();

// Category Routers
CategoryRouter.get("/", getAllCategoriesHandler());
CategoryRouter.post("/", AuthorizationMiddleware("admin"), ValidationMiddleware(postCategory), postCategoryHandler());
CategoryRouter.patch("/:id", AuthorizationMiddleware("admin"), ValidationMiddleware(patchCategory), patchCategoryHandler());
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
