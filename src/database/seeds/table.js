/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("table").del();
  await knex("table").insert([
    { table_no: 1, seating_capacity: 2 },
    { table_no: 2, seating_capacity: 4 },
    { table_no: 3, seating_capacity: 3 },
  ]);
};
