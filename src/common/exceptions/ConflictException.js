const ApiException = require("./ApiException");

class ConflictException extends ApiException {
  constructor(error) {
    super("Conflict!", "Server state does not match!", 409, error);
  }
}

module.exports = ConflictException;
