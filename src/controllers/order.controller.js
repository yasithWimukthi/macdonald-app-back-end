const { NotFoundError } = require("objection");
const Order = require("../models/order.model");
const User = require("../models/user.model");
const FoodItem = require("../models/food-item.model");
const authService = require('../services/auth.service');

exports.create_order = async (req, res, next) => {
  req.user = {id: 1};

  const userId = req.user.id;

  const { type, noOfItems, totalPrice, location, foodItems } = req.body;

  try {
    let order = await User.relatedQuery('orders').for(userId).insert({ type, noOfItems, totalPrice, location });
    for(const {id, quantity} of foodItems) {
      await FoodItem.relatedQuery('orders').for(id).relate({id: order.id, quantity});
    }
    res.status(201).json({
      message: "Order created successfully",
      success: true,
      data: order,
    });
    
  } catch (error) {
    next(error);
  }
};

exports.get_all_orders = async (req, res, next) => {
  Order.query()
    .then((result) => {
      res.status(200).json({
        count: result.length,
        data: result,
      });
    })
    .catch((error) => {
      next(error);
    });
};