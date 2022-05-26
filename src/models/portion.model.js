const { Model } = require('objection');

class Portion extends Model {
  static get tableName() {
    return 'portion';
  }
}

module.exports = Portion;