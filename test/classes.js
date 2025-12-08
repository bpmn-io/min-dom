import {
  classes,
  domify
} from 'min-dom';

import { expect } from 'chai';


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