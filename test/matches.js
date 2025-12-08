import {
  domify,
  matches
} from 'min-dom';

import { expect } from 'chai';


describe('matches', function() {

  it('should match element by selector', function() {

    var node = domify('<div class="root"></div>');

    // when
    expect(matches(node, '.root')).to.be.true;
    expect(matches(node, 'bar')).to.be.false;
  });


  it('should match custom element', function() {

    var node = domify('<foo-bar />');

    // then
    expect(matches(node, 'foo-bar')).to.be.true;
  });


  it('should handle missing element', function() {

    expect(matches(null, 'foo-bar')).to.be.false;
  });

});