const { ForeignKeyViolationError } = require("db-errors");
const Portion = require("../models/portion.model");

exports.create_portion = async (req, res, next) => {
  const portion = {
    name: req.body.name,
  };

  Portion.query()
    .insert(portion)
    .then((result) => {
      res.status(201).json({
        message: "Portion created successfully",
        success: true,
        data: result,
      });
    })
    .catch((error) => {
      error.message = "Portion already exists";
      next(error);
    });
};

// only for development
exports.get_all_portions = async (req, res, next) => {
  Portion.query()
    .then((result) => {
      res.status(200).json({
        count: result.length,
        data: result,
      });
    })
    .catch((error) => {
      next(error);
    });
};

exports.update_portion = async (req, res, next) => {
  const id = req.params.portionId;
  const portion = {
    name: req.body.name,
  };

  Portion.query()
    .patchAndFetchById(id, portion)
    .throwIfNotFound({ message: "Portion does not exist" })
    .then((data) => {
      res.status(200).json({
        message: "Portion updated successfully",
        data,
      });
    })
    .catch((error) => {
      next(error);
    });
};

exports.delete_portion = async (req, res, next) => {
  const id = req.params.portionId;

  Portion.query()
    .deleteById(id)
    .throwIfNotFound({ message: "Portion does not exist" })
    .then((data) => {
      res.status(200).json({
        message: "Portion deleted successfully",
        data,
      });
    })
    .catch((error) => {
      if (error instanceof ForeignKeyViolationError) error.message = "Cannot delete a portion which already belongs to a food item";
      next(error);
    });
};
