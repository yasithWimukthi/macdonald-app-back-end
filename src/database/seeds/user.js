exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user").insert([
        { first_name: "admin", last_name: "admin", email: "admin@cafeapp.com", password: "$2a$12$G0AwSHUELJZjxWfXgkPdQOT6rkW.JHajj69bVzPECjua8erv0YJky", mobile: "0771234567", role: "admin" },
        { first_name: "customer", last_name: "customer", email: "customer@cafeapp.com", password: "$2a$12$G0AwSHUELJZjxWfXgkPdQOT6rkW.JHajj69bVzPECjua8erv0YJky", mobile: "0711234567", role: "customer" },
      ]);
    });
};
