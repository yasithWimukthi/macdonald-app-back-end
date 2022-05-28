const ConflictException = require("../common/exceptions/ConflictException");
const NotFoundException = require("../common/exceptions/NotFoundException");
const { getCategory } = require("../services/category.service");
const { getAllFoodItems, createFoodItem, getFoodItem, getFoodItemsByCategory, patchFoodItem } = require("../services/food-item.services");
const { getPortion } = require("../services/portion.service");

const getFoodItemsOfCategoryHandler = () => {
  return async (req, res, next) => {
    try {
      let foodItems;

      //   Get all food items
      if (!req.query.categoryId) foodItems = await getAllFoodItems();
      //   Get specific food items in a category when specified as query params
      else {
        //   Check for valid category
        const category = await getCategory("id", req.body.category);
        if (!category.length) throw new NotFoundException("Category does not exist!");
        foodItems = await getFoodItemsByCategory(req.query.categoryId);
      }

      res.status(200).json({
        message: "FoodItems fetched succefully",
        success: true,
        data: foodItems,
      });
    } catch (error) {
      next(error);
    }
  };
};

const createFoodItemHandler = () => {
  return async (req, res, next) => {
    try {
      // Check for fooditem with same name
      if (await getFoodItem("name", req.body.name)) throw new ConflictException("Fooditem already exist with same name!");

      //   Check for valid category
      const category = await getCategory("id", req.body.category);
      if (!category.length) throw new NotFoundException("Category does not exist!");

      //   Check for valid potions
      for (const portion of req.body.portions) {
        if (!(await getPortion(portion.id))) throw new NotFoundException("Portion does not exist!");
      }

      // Create food item
      const foodItem = await createFoodItem(req.body);

      res.status(201).json({
        message: "FoodItem created succesfully",
        success: true,
        data: foodItem,
      });
    } catch (error) {
      next(error);
    }
  };
};

const patchFoodItemHandler = () => {
  return async (req, res, next) => {
    try {
      // Check for valid fooditem
      if (!(await getFoodItem("id", req.params.id))) throw new NotFoundException("Food item does not exist!");

      // Check for fooditem with same name
      if (req.body.name) if (await getFoodItem("name", req.body.name)) throw new ConflictException("Food item already exist with same name!");

      //   Check for valid category
      if (req.body.category) {
        const category = await getCategory("id", req.body.category);
        if (!category.length) throw new NotFoundException("Category does not exist!");
      }

      //   Check for valid portions
      if (req.body.portions) {
        for (const portion of req.body.portions) {
          if (!(await getPortion(portion.id))) throw new NotFoundException("Portion does not exist!");
        }
      }

      // Get all food items
      req.body.id = req.params.id;
      const foodItem = await patchFoodItem(req.body);

      res.status(201).json({
        message: "FoodItem created succesfully",
        success: true,
        data: foodItem,
      });
    } catch (error) {
      next(error);
    }
  };
};

module.exports = {
  getFoodItemsOfCategoryHandler,
  createFoodItemHandler,
  patchFoodItemHandler,
};