import {
  event
} from 'min-dom';

import { expect } from 'chai';


describe('event', function() {

  it('should expose bind', function() {
    expect(typeof event.bind).to.equal('function');
  });


  it('should expose unbind', function() {
    expect(typeof event.unbind).to.equal('function');
  });

});