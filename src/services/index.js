const odrlLicenses = require('./odrl-licenses/odrl-licenses.service.js');
const scLicenses = require('./sc-licenses/sc-licenses.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(odrlLicenses);
  app.configure(scLicenses);
};
