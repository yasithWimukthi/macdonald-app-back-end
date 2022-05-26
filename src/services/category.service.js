const Category = require("../models/category.model");

const getAllCategories = async () => {
  return await Category.query();
};

const getCategory = async (key, value) => {
  const category = await Category.query().where(key, "=", value);
  if (!category.length) return null;
  return category;
};
const createCategory = async (data) => {
  const category = await Category.query().insert(data);
  return category;
};

// class CategoryService {
//   async getAllCategories() {
//     return await Category.query();
//   }
//   async createCategory(data) {
//     const category = await Category.query().insert(data);
//     return category;
//   }

//   async getCategory(key, value) {
//     const category = await Category.query().where(key, "=", value);
//     if (!category.length) return null;
//     return category;
//   }

//   async patchCategory({ id, name }) {
//     const category = await Category.query().patchAndFetchById(id, { name });
//     return category;
//   }

//   async deleteCategory({ id }) {
//     return await Category.query().deleteById(id);
//   }
// }

module.exports = {
  getAllCategories,
  getCategory,
  createCategory,
};
