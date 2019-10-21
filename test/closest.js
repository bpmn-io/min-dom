import {
  closest,
  domify,
  query
} from '../lib';


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

  it('should work with document fragments and shadow dom', function() {

    var node = domify('<div class="root">' +
                        '<div class="parent">' +
                          '<div class="child"></div>' +
                        '</div>' +
                      '</div>');
    var child = query('.child', node);

    var fragment = document.createDocumentFragment();
    fragment.appendChild(node);

    // when
    expect(closest(child, '.root')).to.equal(node);
    expect(closest(node, '.root', true)).to.equal(node);
    expect(closest(node, '.outside')).to.be.undefined;
  });

});
