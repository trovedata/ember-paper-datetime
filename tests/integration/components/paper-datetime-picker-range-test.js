import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paper-datetime-picker-range', 'Integration | Component | paper datetime picker range', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{paper-datetime-picker-range}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#paper-datetime-picker-range}}
      template block text
    {{/paper-datetime-picker-range}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
