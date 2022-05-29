const ApiException = require("./ApiException");

class ValidationException extends ApiException {
  constructor(errors) {
    const validationSanitized = errors.map((err) => {
      return err.message;
    });
    super("Bad Request!", "One or more field can not be processed!", 400, validationSanitized[0]);
  }
}

module.exports = ValidationException;
