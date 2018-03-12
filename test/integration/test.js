/* global MinDom */

describe('umd bundle', function() {

  var domify = MinDom.domify;
  var queryAll = MinDom.queryAll;
  var remove = MinDom.remove;

  it('should expose utilities', function() {
    expect(domify).to.exist;
    expect(queryAll).to.exist;
    expect(remove).to.exist;
  });


  it('should work', function() {

    // when
    var node = domify('<div class="foo"><div class="bar"></div></div>');

    // then
    expect(node).to.exist;

    // when
    document.body.appendChild(node);
    remove(node);

    // then
    expect(node.parentNode).not.to.exist;

    // when
    var bars = queryAll('.bar', node);

    expect(bars).to.have.length(1);
  });

});