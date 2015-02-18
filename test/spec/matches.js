var minDom = require('../../'),
    query = minDom.query,
    domify = minDom.domify,
    matches = minDom.matches;


describe('matches', function() {

  it('should match element by selector', function() {

    var node = domify('<div class="root"></div>');

    // when
    expect(matches(node, '.root')).to.be.true;
    expect(matches(node, 'bar')).to.be.false;
  });

});