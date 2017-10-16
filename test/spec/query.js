var minDom = require('../../'),
    query = minDom.query,
    domify = minDom.domify;


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
    expect(query.all('.child', node)).to.have.length(2);
    expect(query.all('.child:first-child', node)).to.have.length(1);

    expect(query.all('foo', node)).to.have.length(0);
  });

});