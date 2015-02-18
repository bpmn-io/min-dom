var minDom = require('../../'),
    attr = minDom.attr,
    domify = minDom.domify;


describe('attr', function() {

  it('should get attribute', function() {

    var node = domify('<div title="FOO">');

    expect(attr(node, 'title')).to.eql('FOO');
  });


  it('should set attribute', function() {

    var node = domify('<div title="FOO">');

    // when
    attr(node, 'title', 'BAR');

    expect(attr(node, 'title')).to.eql('BAR');
  });

});