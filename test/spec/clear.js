var minDom = require('../../'),
    clear = minDom.clear,
    domify = minDom.domify;


describe('clear', function() {

  it('should remove children', function() {

    var node = domify('<div class="foo"><div class="child"></div></div>');

    // when
    clear(node);

    expect(node.childNodes.length).to.eql(0);
  });

});