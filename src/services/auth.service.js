// const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const getUser = async (key, value) => {
  const user = await User.query().where(key, "=", value).first();
  return user;
};

const createUser = async (data) => {
  console.log(data);
  const user = await User.query().insert(data);
  return user;
};

module.exports = {
  getUser,
  createUser,
};
