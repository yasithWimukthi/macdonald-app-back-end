const tableName = "user";

exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id").primary();
    table.string("first_name", 25).notNullable();
    table.string("last_name", 25).notNullable();
    table.string("email", 255).unique().notNullable();
    table.string("password", 255).notNullable();
    table.string("mobile", 10).unique().notNullable();
    table.string("role", 25).notNullable();

    // timestamps
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
