const Category = require("../models/category.model");

const getAllCategories = async () => {
  return await Category.query();
};

const createCategory = async (data) => {
  const category = await Category.query().insert(data);
  return category;
};

const getCategory = async (key, value) => {
  const category = await Category.query().where(key, "=", value);
  return category;
};

const patchCategory = async (id, data) => {
  const category = await Category.query().patchAndFetchById(id, data);
  return category;
};

const deleteCategory = async (id) => {
  return await Category.query().deleteById(id).throwIfNotFound({ message: "Category does not exist!" });
};

const getFoodItemsOfCategory = async (id) => {
  return await Category.relatedQuery("food_items").for(id);
};

module.exports = {
  getAllCategories,
  createCategory,
  getCategory,
  patchCategory,
  deleteCategory,
  getFoodItemsOfCategory,
};
