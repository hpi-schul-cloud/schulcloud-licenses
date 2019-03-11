const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const validateLicensesSchema = require('../../src/hooks/validate-licenses-schema');

describe('\'validate-licenses-schema\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/licenses', {
      async create(data) {
        return data;
      }
    });

    app.service('licenses').hooks({
      before: {
        create: validateLicensesSchema()
      }
    });
  });

  it('permits a license with a complex content object', async () => {
    const license = {
      'content': {
        'type-of-license': 'more complex license',
        'permissions': [
          {'kind': 'permissionKind1', 'valid': true},
          {'kind': 'permissionKind2', 'valid': false}
        ],
        'party': { 'kind': 'Person', 'name': 'Some Genius'}
      }
    };
    const result = await app.service('licenses').create(license);

    assert.deepEqual(result, license);
  });

  it('does not permit a license with missing content', async () => {
    const license = {
      'permission1': 'valid',
      'prohibition1': 'invalid'
    };
    try {
      // provoke BadRequest error
      await app.service('licenses').create(license);
    } catch(e) {
      assert.ok(e);
      return;
    }

    assert.fail('did not prevent creation of bad license');
  });
});
