import {
  delegate
} from 'min-dom';

import { expect } from 'chai';


describe('delegate', function() {

  it('should expose bind', function() {
    expect(typeof delegate.bind).to.equal('function');
  });


  it('should expose unbind', function() {
    expect(typeof delegate.unbind).to.equal('function');
  });

});