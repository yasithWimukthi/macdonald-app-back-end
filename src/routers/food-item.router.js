const express = require("express");

const { getFoodItemsOfCategoryHandler, createFoodItemHandler, patchFoodItemHandler } = require("../controllers/food-item.controller");

const FoodItemRouter = express.Router();

FoodItemRouter.get("/", getFoodItemsOfCategoryHandler());
FoodItemRouter.post("/", createFoodItemHandler());
FoodItemRouter.patch("/:id", patchFoodItemHandler());

module.exports = FoodItemRouter;
