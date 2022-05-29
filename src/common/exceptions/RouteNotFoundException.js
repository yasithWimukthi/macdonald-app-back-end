const ApiException = require("./ApiException");

class RouteNotFoundException extends ApiException {
  constructor() {
    super("Not Found!", "Resource that you trying to access is not found!", 404);
  }
}

module.exports = RouteNotFoundException;
