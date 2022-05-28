const express = require("express");

const { getFoodItemsHandler, createFoodItemHandler, patchFoodItemHandler, deleteFoodItemsHandler } = require("../controllers/food-item.controller");

const { AuthorizationMiddleware } = require("../middlewares/authorization.middleware");

const ValidationMiddleware = require("../middlewares/validation.middleware");
const { postFoodItem, patchFoodItem } = require("../validation/food-item.schema");

const FoodItemRouter = express.Router();

FoodItemRouter.get("/", getFoodItemsHandler());
FoodItemRouter.post("/", AuthorizationMiddleware("admin"), ValidationMiddleware(postFoodItem), createFoodItemHandler());
FoodItemRouter.patch("/:id", AuthorizationMiddleware("admin"), ValidationMiddleware(patchFoodItem), patchFoodItemHandler());
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
