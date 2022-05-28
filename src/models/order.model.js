const { Model } = require("objection");

class Order extends Model {
  static get tableName() {
    return "order";
  }
  
  static get relationMappings() {
    const FoodItem = require("./food-item.model");
    const User = require("./user.model");

    return {
      foodItems: {
        relation: Model.ManyToManyRelation,
        modelClass: FoodItem,
        join: {
          from: 'order.id',
          through: {          
            from: 'order_has_food_item.order_id',
            to: 'order_has_food_item.food_item_id',
            extra: ['quantity']
          },
          to: 'food_item.id',
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "order.id",
          to: "user.id",
        },
      },
    };
  }
}

module.exports = Order;
