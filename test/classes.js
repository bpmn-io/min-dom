import {
  classes,
  domify
} from '../lib';


describe('classes', function() {

  it('should query class', function() {

    var node = domify('<div class="foo">');

    expect(classes(node).has('foo')).to.be.true;
  });


  it('should toggle attribute', function() {

    var node = domify('<div class="foo">');

    // when
    classes(node).toggle('foo');

    expect(classes(node).has('foo')).to.be.false;
  });

});