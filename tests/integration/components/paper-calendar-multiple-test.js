import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paper-calendar-multiple', 'Integration | Component | paper calendar multiple', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{paper-calendar-multiple}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#paper-calendar-multiple}}
      template block text
    {{/paper-calendar-multiple}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
