const { getAllCategories, getCategory, createCategory } = require("../services/category.service");

const getAllCategoriesHandler = () => {
  return async (req, res, next) => {
    try {
      const categories = await getAllCategories();

      res.status(200).json({
        message: "Categories fetched succefully",
        success: true,
        data: categories,
      });
    } catch (error) {
      next(error);
    }
  };
};

const postCatergoryHandler = () => {
  return async (req, res, next) => {
    try {
      //   Check if category already exist
      if (await getCategory("name", req.body.name)) throw new ConflictException("Category already exist!");

      // Create new category
      const category = await createCategory(req.body);

      res.status(201).json({
        message: "Category created successfully.",
        success: true,
        data: category,
      });
    } catch (error) {
      next(error);
    }
  };
};

module.exports = { getAllCategoriesHandler, postCatergoryHandler };
