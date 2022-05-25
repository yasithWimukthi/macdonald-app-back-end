const tableName = "food_item_has_portion";

exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id").primary();
    table.decimal("price").notNullable();
    table.decimal("calories");
    table.boolean("is_available").notNullable();
    table.integer("food_item_id").unsigned().notNullable().references("id").inTable("food_item");
    table.integer("portion_id").unsigned().notNullable().references("id").inTable("portion");

    // timestamps
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
