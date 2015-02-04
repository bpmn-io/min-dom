module.exports = function(el) {

  var c;

  while (el.children.length) {
    c = el.children[0];
    el.removeChild(c);
  }

  return el;
};