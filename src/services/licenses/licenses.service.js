// Initializes the `licenses` service on path `/licenses`
const createService = require('feathers-mongoose');
const createModel = require('../../models/licenses.model');
const hooks = require('./licenses.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/licenses', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('licenses');

  service.hooks(hooks);
};
