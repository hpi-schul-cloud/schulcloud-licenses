const assert = require('assert');
const app = require('../../src/app');

describe('\'licenses\' service', () => {
  it('registered the service', () => {
    const service = app.service('licenses');

    assert.ok(service, 'Registered the service');
  });
});
