const express = require("express");

const { getFoodItemsOfCategoryHandler, createFoodItemHandler, patchFoodItemHandler, deleteFoodItemsHandler } = require("../controllers/food-item.controller");

const FoodItemRouter = express.Router();

FoodItemRouter.get("/", getFoodItemsOfCategoryHandler());
FoodItemRouter.post("/", createFoodItemHandler());
FoodItemRouter.patch("/:id", patchFoodItemHandler());
FoodItemRouter.delete("/:id", deleteFoodItemsHandler());

module.exports = FoodItemRouter;
