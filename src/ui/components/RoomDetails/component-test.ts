import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: RoomDetails', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<RoomDetails />`);
    assert.ok(this.containerElement.querySelector('div'));
  });
});
