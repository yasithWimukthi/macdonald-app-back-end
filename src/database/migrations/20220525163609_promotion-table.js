const tableName = "promotion";

exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id").primary();
    table.string("description").notNullable();
    table.string("order_type", 25).notNullable();
    table.date("expiry_date");

    // timestamps
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
