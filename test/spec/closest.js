var minDom = require('../../'),
    closest = minDom.closest,
    query = minDom.query,
    domify = minDom.domify;


describe('closest', function() {

  it('should get closest parent', function() {

    var node = domify('<div class="root">' +
                        '<div class="parent">' +
                          '<div class="child"></div>' +
                        '</div>' +
                      '</div>');

    var child = query('.child', node);

    // when
    expect(closest(child, '.root')).to.equal(node);
    expect(closest(node, '.root', true)).to.equal(node);
  });

});