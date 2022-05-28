const Portion = require("../models/portion.model");

const getPortion = async (id) => {
  return await Portion.query().findById(id);
};

module.exports = {
  getPortion,
};
