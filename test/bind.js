import {
  event
} from 'min-dom';


describe('event', function() {

  it('should expose bind', function() {
    expect(typeof event.bind).to.equal('function');
  });


  it('should expose unbind', function() {
    expect(typeof event.unbind).to.equal('function');
  });

});