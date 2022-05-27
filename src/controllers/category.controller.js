const { UniqueViolationError, ForeignKeyViolationError } = require("objection");
const { getAllCategories, createCategory, patchCategory, deleteCategory } = require("../services/category.service");

const getAllCategoriesHandler = () => {
  return async (req, res, next) => {
    try {
      // Get all categories
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

const postCategoryHandler = () => {
  return async (req, res, next) => {
    try {
      // Create new category
      const category = await createCategory(req.body);

      res.status(201).json({
        message: "Category created successfully.",
        success: true,
        data: category,
      });
    } catch (error) {
      if (error instanceof UniqueViolationError) error.message = "Category name already exist!";
      next(error);
    }
  };
};

const patchCategoryHandler = () => {
  return async (req, res, next) => {
    try {
      // Patch category
      const category = await patchCategory(req.params.id, req.body);

      res.status(201).json({
        message: "Categories patched succefully",
        success: true,
        data: category,
      });
    } catch (error) {
      if (error instanceof UniqueViolationError) error.message = "Category name already exist!";
      console.log(error);
      next(error);
    }
  };
};

const deleteCategoryHandler = () => {
  return async (req, res, next) => {
    try {
      // Delete category
      await deleteCategory(req.params.id);

      res.status(200).json({
        message: "Category deleted succefully",
        success: true,
      });
    } catch (error) {
      if (error instanceof ForeignKeyViolationError) error.message = "Cannot delete a category with existing food items!";
      next(error);
    }
  };
};

module.exports = {
  getAllCategoriesHandler,
  postCategoryHandler,
  patchCategoryHandler,
  deleteCategoryHandler,
};
