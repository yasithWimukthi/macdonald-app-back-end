const { Model } = require("objection");

class Item extends Model {
  static get tableName() {
    return "food_item";
  }

  static get relationMappings() {
    const Category = require("./category.model");

    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        // filter: (query) => query.select("id", "name"),
        join: {
          from: "food_item.categoryId",
          to: "category.id",
        },
      },
    };
  }
}

module.exports = Item;
