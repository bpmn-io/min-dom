import {
  clear,
  domify
} from 'min-dom';


describe('clear', function() {

  it('should remove children', function() {

    var node = domify('<div class="foo"><div class="child"></div></div>');

    // when
    clear(node);

    expect(node.childNodes.length).to.eql(0);
  });

});