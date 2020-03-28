import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | styled login', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/signin');
    assert.dom('h2').hasText('Sign In');
  });

  test('visiting /signin', async function(assert) {
    await visit('/signin');
    assert.equal(currentURL(), '/signin');
    assert.dom('h2').hasText('Sign In');
  });

  test('visiting /signup', async function(assert) {
    await visit('/signup');
    assert.equal(currentURL(), '/signup');
    assert.dom('h2').hasText('Sign Up');
  });

  test('visiting /profile', async function(assert) {
    await visit('/profile');
    assert.equal(currentURL(), '/profile');
    assert.dom('h2').hasText('Panel');
  });

});
