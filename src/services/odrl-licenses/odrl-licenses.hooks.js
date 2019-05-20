const validateLicensesSchema = require('../../hooks/validate-odrl-licenses-schema');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validateLicensesSchema()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
