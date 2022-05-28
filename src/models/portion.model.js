const { Model } = require("objection");

class Portion extends Model {
  static tableName = "portion";

  static get relationMappings() {
    const FoodItem = require("./food-item.model");

    return {
      foodItems: {
        relation: Model.ManyToManyRelation,
        modelClass: FoodItem,
        join: {
          from: "portion.id",
          through: {
            from: "food_item_has_portion.portion_id",
            to: "food_item_has_portion.food_item_id",
            extra: {
              price: "price",
              calories: "calories",
              isAvailable: "is_available",
            },
          },
          to: "food_item.id",
        },
      },
    };
  }
}

module.exports = Portion;
