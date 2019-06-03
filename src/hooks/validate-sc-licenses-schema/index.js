const commonHooks = require('feathers-hooks-common');
const Ajv         = require('ajv');
const Schema      = require('./sc-licenses-schema.json');

const ajv     = new Ajv({allErrors: true});

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return commonHooks.validateSchema(Schema, ajv);
};