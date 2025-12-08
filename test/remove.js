import {
  domify,
  remove
} from 'min-dom';

import { expect } from 'chai';


describe('remove', function() {

  it('should remove element', function() {

    var node = domify('<div class="foo"><div class="child"></div></div>');
    var child = node.childNodes[0];

    // when
    remove(child);

    expect(node.childNodes.length).to.eql(0);
    expect(child.parentNode).not.to.exist;
  });

});