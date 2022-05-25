exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("food_item").del();
  await knex("food_item").insert([
    { name: "Chicken Fried Rice", category_id: 1 },
    { name: "Egg Fried Rice", category_id: 1 },
    { name: "Chicken Kottu", category_id: 2 },
  ]);
};
