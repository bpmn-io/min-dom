import {
  domify,
  queryAll,
  remove,
  event
} from '../../dist/index.esm.js';


describe('module export', function() {

  it('should expose utilities', function() {
    expect(domify).to.exist;
    expect(queryAll).to.exist;
    expect(remove).to.exist;
    expect(event).to.exist;
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

    var fn = () => {};

    // when
    event.bind(node, 'click', fn);
    event.unbind(node, 'click', fn);
  });

});