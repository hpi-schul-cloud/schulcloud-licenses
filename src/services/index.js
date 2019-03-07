const licenses = require('./licenses/licenses.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(licenses);
};
