// const UnauthorizedException = require("../../common/exceptions/UnauthorizedException");
const ConflictException = require("../common/exceptions/ConflictException");
// const ValidationException = require("../../common/exceptions/ValidationException");

const { getUser, createUser } = require("../services/auth.service");

const userRegisterHandler = (role) => {
  return async (req, res, next) => {
    try {
      // Check if the user exists
      if (await getUser("email", req.body.email)) throw new ConflictException("A user already exist with the given email!");
      if (await getUser("mobile", req.body.mobile)) throw new ConflictException("A user already exist with the given mobile!");

      // Create user
      req.body.role = role;
      req.body.username = req.body.email;
      let user = await createUser(req.body);

      res.status(201).json({
        message: `${role} created successfully.`,
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  };
};

module.exports = { userRegisterHandler };
