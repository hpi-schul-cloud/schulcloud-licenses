const assert = require('assert');
const app = require('../../src/app');

describe('\'odrl-licenses\' service', () => {
  it('registered the service', () => {
    const service = app.service('odrl-licenses');

    assert.ok(service, 'Registered the service');
  });
});
