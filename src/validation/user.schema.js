const Joi = require("joi");

const Schema = {
  registerUser: Joi.object({
    firstName: Joi.string().alphanum().min(3).max(25).required(),
    lastName: Joi.string().alphanum().min(3).max(25).required(),
    email: Joi.string().email().max(255).required(),
    password: Joi.string().pattern(new RegExp("^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")).required(),
    mobile: Joi.string().pattern(new RegExp("^[0-9]{10}$")).required(),
  }),
  loginUser: Joi.object({
    email: Joi.string().email().required().max(255),
    password: Joi.string().required(),
  }),
};

module.exports = Schema;
