import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';

const {
  get,
  set
} = Ember;

moduleForComponent('paper-time', 'Integration | Component | paper time', {
  integration: true
});

test('it renders', function(assert) {
  set(this, 'datetime', moment('1985-07-29 09:30'));
  set(this, 'bar', { text: 'baz' });

  this.render(hbs`{{paper-time datetime=datetime}}`);

  assert.equal(this.$('[data-test-hour]').text().trim(), '9');
  assert.equal(this.$('[data-test-minute]').text().trim(), '30');
  assert.equal(this.$('[data-test-meridiem]').text().trim(), 'AM');
});

test('hours update', function(assert) {
  set(this, 'datetime', moment('1985-07-29 09:30'));

  this.render(hbs`{{paper-time datetime=datetime onChange=(action (mut datetime))}}`);

  this.$('[data-test-hour-incrementer]').click();

  assert.equal(get(this, 'datetime').format('YYYY-MM-DD HH:mm'), '1985-07-29 10:30');
  assert.equal(this.$('[data-test-hour]').text().trim(), '10');

  this.$('[data-test-hour-decrementer]').click();

  assert.equal(get(this, 'datetime').format('YYYY-MM-DD HH:mm'), '1985-07-29 09:30');
  assert.equal(this.$('[data-test-hour]').text().trim(), '9');
});

test('minutes update', function(assert) {
  set(this, 'datetime', moment('1985-07-29 09:30'));

  this.render(hbs`{{paper-time datetime=datetime onChange=(action (mut datetime))}}`);

  this.$('[data-test-minute-incrementer]').click();

  assert.equal(get(this, 'datetime').format('YYYY-MM-DD HH:mm'), '1985-07-29 09:31');
  assert.equal(this.$('[data-test-minute]').text().trim(), '31');
});

test('meridiem updates', function(assert) {
  set(this, 'datetime', moment('1985-07-29 09:30'));

  this.render(hbs`{{paper-time datetime=datetime onChange=(action (mut datetime))}}`);

  this.$('[data-test-meridiem-toggle]:eq(0)').click();

  assert.equal(get(this, 'datetime').format('YYYY-MM-DD HH:mm'), '1985-07-29 21:30');
  assert.equal(this.$('[data-test-meridiem]').text().trim(), 'PM');

  this.$('[data-test-meridiem-toggle]:eq(1)').click();

  assert.equal(get(this, 'datetime').format('YYYY-MM-DD HH:mm'), '1985-07-29 09:30');
  assert.equal(this.$('[data-test-meridiem]').text().trim(), 'AM');
});

