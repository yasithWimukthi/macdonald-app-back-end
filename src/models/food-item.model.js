const { Model } = require("objection");

class FoodItem extends Model {
  static get tableName() {
    return "food_item";
  }

  static get relationMappings() {
    const Category = require("./category.model");
    const Portion = require("./portion.model");

    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        filter: (query) => query.select("id", "name"),
        join: {
          from: "food_item.categoryId",
          to: "category.id",
        },
      },
      portions: {
        relation: Model.ManyToManyRelation,
        modelClass: Portion,
        // filter: (query) => query.select("id", "name", "price", "calories", "is_available"),
        join: {
          from: "food_item.id",
          through: {
            from: "food_item_has_portion.food_item_id",
            to: "food_item_has_portion.portion_id",
            extra: {
              price: "price",
              calories: "calories",
              isAvailable: "is_available",
            },
          },
          to: "portion.id",
        },
      },
    };
  }
}

module.exports = FoodItem;
