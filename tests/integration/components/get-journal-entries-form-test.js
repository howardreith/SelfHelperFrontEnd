import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('get-journal-entries-form', 'Integration | Component | get journal entries form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{get-journal-entries-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#get-journal-entries-form}}
      template block text
    {{/get-journal-entries-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
