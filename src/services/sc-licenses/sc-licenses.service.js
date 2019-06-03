// Initializes the `odrl-licenses` service on path `/odrl-licenses`
const createService = require('feathers-mongoose');
const createModel = require('../../models/sc-licenses.model');
const hooks = require('./sc-licenses.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sc-licenses', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('sc-licenses');

  service.hooks(hooks);
};
