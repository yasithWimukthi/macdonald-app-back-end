const express = require("express");
const { getAllCategoriesHandler, postCategoryHandler, patchCategoryHandler, deleteCategoryHandler } = require("../controllers/category.controller");

const CategoryRouter = express.Router();

// Category Routers
CategoryRouter.get("/", getAllCategoriesHandler());
CategoryRouter.post("/", postCategoryHandler());
CategoryRouter.patch("/:id", patchCategoryHandler());
CategoryRouter.delete("/:id", deleteCategoryHandler());

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
