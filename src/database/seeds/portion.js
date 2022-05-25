exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("portion").del();
  await knex("portion").insert([{ name: "Small" }, { name: "Medium" }, { name: "Large" }]);
};
