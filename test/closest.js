import {
  closest,
  domify,
  query
} from 'min-dom';


describe('closest', function() {

  it('should get closest parent', function() {

    // given
    var node = domify('<div class="root">' +
                        '<div class="parent">' +
                          '<div class="child"></div>' +
                        '</div>' +
                      '</div>');

    var child = query('.child', node);

    // then
    expect(closest(child, '.root')).to.equal(node);
    expect(closest(node, '.root', true)).to.equal(node);
  });


  it('should work with document fragments', function() {

    // given
    var node = domify('<div class="root">' +
                        '<div class="parent">' +
                          '<div class="child"></div>' +
                        '</div>' +
                      '</div>');

    var child = query('.child', node);

    var fragment = document.createDocumentFragment();
    fragment.appendChild(node);

    // then
    expect(closest(child, '.root')).to.equal(node);
    expect(closest(node, '.root', true)).to.equal(node);
    expect(closest(node, '.outside')).to.be.null;
  });


  it('should work with shadow dom', function() {

    //  .root
    //    | -> (shadow - This is not a HTML document nor HTML element)
    //          | -> .shadowRoot
    //                    | -> .shadowChild

    // given
    var root = domify('<div class="root"></div>');
    var shadow = root.attachShadow({ mode: 'open' });

    var shadowRoot = domify('<div class="shadowRoot">' +
                              '<div class="shadowChild"></div>' +
                            '</div>');

    shadow.appendChild(shadowRoot);

    var shadowChild = query('.shadowChild', shadowRoot);

    // then
    expect(closest(shadowChild, '.shadowRoot')).to.equal(shadowRoot);
    expect(closest(shadowRoot, '.shadowRoot', true)).to.equal(shadowRoot);
    expect(closest(shadowChild, '.outside')).to.be.null;
    expect(closest(shadowChild, '.root')).to.be.null;
  });

});