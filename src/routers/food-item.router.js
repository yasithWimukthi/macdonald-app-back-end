const express = require("express");

const { getFoodItemsOfCategoryHandler, createFoodItemHandler, patchFoodItemHandler, deleteFoodItemsHandler } = require("../controllers/food-item.controller");

const { AuthorizationMiddleware } = require("../middlewares/authorization.middleware");

const FoodItemRouter = express.Router();

FoodItemRouter.get("/", getFoodItemsOfCategoryHandler());
FoodItemRouter.post("/", AuthorizationMiddleware("admin"), createFoodItemHandler());
FoodItemRouter.patch("/:id", AuthorizationMiddleware("admin"), patchFoodItemHandler());
FoodItemRouter.delete("/:id", AuthorizationMiddleware("admin"), deleteFoodItemsHandler());

/**
 * @swagger
 * /food-items:
 *   get:
 *     tags:
 *          - Food Items
 *
 *   post:
 *     tags:
 *          - Food Items
 *
 * /items/:id:
 *   patch:
 *     tags:
 *          - Food Items
 *   delete:
 *     tags:
 *          - Food Items
 */

module.exports = FoodItemRouter;
