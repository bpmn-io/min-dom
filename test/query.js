import {
  domify,
  query,
  queryAll
} from '../lib';


describe('query', function() {

  it('should get single', function() {

    var node = domify('<div class="root">' +
                        '<div class="parent">' +
                          '<div class="child"></div>' +
                          '<div class="child"></div>' +
                        '</div>' +
                      '</div>');

    // then
    expect(query('.child', node)).to.exist;
    expect(query('.child:first-child', node)).to.exist;

    expect(query('foo', node)).not.to.exist;
  });


  it('should get list', function() {

    var node = domify('<div class="root">' +
                        '<div class="parent">' +
                          '<div class="child"></div>' +
                          '<div class="child"></div>' +
                        '</div>' +
                      '</div>');

    // then
    expect(queryAll('.child', node)).to.have.length(2);
    expect(queryAll('.child:first-child', node)).to.have.length(1);

    expect(queryAll('foo', node)).to.have.length(0);
  });

});