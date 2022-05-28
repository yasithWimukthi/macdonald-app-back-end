const ApiException = require("./ApiException");

class NotFoundException extends ApiException {
  constructor(error) {
    super("Not Found!", "Resource that you trying to access is not found!", 404, error);
  }
}

module.exports = NotFoundException;
