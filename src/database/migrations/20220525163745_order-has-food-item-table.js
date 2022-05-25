const tableName = "order_has_food_item";

exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id").primary();
    table.integer("food_item_id").unsigned().notNullable().references("id").inTable("food_item");
    table.integer("quantity").unsigned().notNullable();
    table.integer("order_id").unsigned().notNullable().references("id").inTable("order");

    // timestamps
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
