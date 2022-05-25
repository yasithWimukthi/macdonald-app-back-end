exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("category").del();
  await knex("category").insert([{ name: "Fried Rice" }, { name: "Kottu" }]);
};
