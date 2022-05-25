exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("promotion").del();
  await knex("promotion").insert([
    { description: "Promption description", order_type: "delivery", expiry_date: "2022-05-02" },
    { description: "Promption description", order_type: "pickup", expiry_date: "2022-05-02" },
    { description: "Promption description", order_type: "delivery", expiry_date: "2022-05-02" },
  ]);
};
