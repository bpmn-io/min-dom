import {
  closest,
  domify,
  query
} from '../lib';


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


  // Shadow DOM is not supported by PhantomJS headless browser. In order to
  // execute this test, use 'karma-chrome-launcher' and set the browser to
  // 'Chrome' in karma.conf.js
  (window.HTMLShadowElement ? it : it.skip)('should work with shadow dom', function() {

    //  .root
    //    | -> (shadow - This is not a HTML document nor HTML element)
    //          | -> .innerShadowRoot
    //                    | -> .innerShadowChild

    // given
    var root = createDivWithClassname('root');
    var shadow = root.attachShadow({ mode: 'open' });

    var innerShadowRoot = createDivWithClassname('innerShadowRoot');
    shadow.appendChild(innerShadowRoot);
    var innerShadowChild = createDivWithClassname('innerShadowChild');
    innerShadowRoot.appendChild(innerShadowChild);

    // then
    expect(closest(innerShadowChild, '.innerShadowRoot')).to.equal(innerShadowRoot);
    expect(closest(innerShadowRoot, '.innerShadowRoot', true)).to.equal(innerShadowRoot);
    expect(closest(innerShadowChild, '.outside')).to.be.null;
  });
});

// helper ////
function createDivWithClassname(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}
