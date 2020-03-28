import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | styled login', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/signin');
    assert.dom('h2').hasText('Sign In');

    assert.dom('h1').hasText('AceInvoice');
    assert.dom('h3').hasText('time tracking and invoicing');

    assert.dom('a.a--signup > strong').hasText('Sign up');
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

    assert.dom('h1').hasText('AceInvoice');
    assert.dom('h3').hasText('time tracking and invoicing');
  });

  test('visiting /profile', async function(assert) {
    await visit('/profile');
    assert.equal(currentURL(), '/profile');
    assert.dom('h2').hasText('Panel');
  });


  test('switch to signup from signin', async function(assert) {
    await visit('/signin');

    await click('a.a--signup');
    assert.equal(currentURL(), '/signup');
  });

  test('switch to signin from signup', async function(assert) {
    await visit('/signup');

    await click('a.a--back');
    assert.equal(currentURL(), '/signin');
  });

});
