import {
  clear,
  domify
} from '../lib';


describe('clear', function() {

  it('should remove children', function() {

    var node = domify(`
      <div class="foo">
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
      </div>`
    );

    // when
    var cleared = clear(node);

    expect(cleared).to.eql(node);
    expect(cleared.childNodes.length).to.eql(0);
  });

});