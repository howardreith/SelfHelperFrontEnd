import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('left-nav-blank', 'Integration | Component | left nav blank', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{left-nav-blank}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#left-nav-blank}}
      template block text
    {{/left-nav-blank}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
