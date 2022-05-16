import {
  domify,
  assignStyle
} from '../lib';


describe('style', function() {

  it('should assign styles', function() {

    // given
    var node = domify('<div class="foo" style="width: 0px; height: 0px; z-index: 0"></div>');

    var style1 = {
      height: '1px',
      zIndex: '1'
    };

    var style2 = {
      zIndex: '2'
    };

    // when
    assignStyle(node, style1, style2);

    // then
    var appliedStyle = node.style;
    expect(appliedStyle).to.exist;
    expect(appliedStyle.width).to.eql('0px');
    expect(appliedStyle.height).to.eql('1px');
    expect(appliedStyle.zIndex).to.eql('2');
  });

});