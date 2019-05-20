const licenses = require('./odrl-licenses/odrl-licenses.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(licenses);
};
