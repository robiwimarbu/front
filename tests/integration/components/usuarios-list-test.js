import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('usuarios-list', 'Integration | Component | usuarios list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{usuarios-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#usuarios-list}}
      template block text
    {{/usuarios-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
