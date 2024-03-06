import * as MinDom from 'min-dom';

import { expect } from 'chai';


describe('typed', function() {

  it('should expose utilities', function() {
    expect(MinDom.assignStyle).to.exist;
    expect(MinDom.attr).to.exist;
    expect(MinDom.classes).to.exist;
    expect(MinDom.clear).to.exist;
    expect(MinDom.closest).to.exist;
    expect(MinDom.delegate).to.exist;
    expect(MinDom.domify).to.exist;
    expect(MinDom.event).to.exist;
    expect(MinDom.matches).to.exist;
    expect(MinDom.query).to.exist;
    expect(MinDom.queryAll).to.exist;
    expect(MinDom.remove).to.exist;
  });

});
