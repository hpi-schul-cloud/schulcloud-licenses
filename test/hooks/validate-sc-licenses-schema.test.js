const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const validateLicensesSchema = require('../../src/hooks/validate-sc-licenses-schema');

describe('\'validate-sc-licenses-schema\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/sc-licenses', {
      async create(data) {
        return data;
      }
    });

    app.service('sc-licenses').hooks({
      before: {
        create: validateLicensesSchema()
      }
    });
  });

  it('permits a license with a complex content object', async () => {
    const license = {
      'name': 'test-license',
      'policies': [{
        'type-of-license': 'more complex license',
        'permissions': [
          {'kind': 'permissionKind1', 'valid': true},
          {'kind': 'permissionKind2', 'valid': false}
        ],
        'party': { 'kind': 'Person', 'name': 'Some Genius'}
      }]
    };
    const result = await app.service('sc-licenses').create(license);

    assert.deepEqual(result, license);
  });

  it('does not permit a license with missing content', async () => {
    const license = {
      'permission1': 'valid',
      'prohibition1': 'invalid'
    };
    try {
      // provoke BadRequest error
      await app.service('sc-licenses').create(license);
    } catch(e) {
      assert.ok(e);
      return;
    }

    assert.fail('did not prevent creation of bad license');
  });
});
