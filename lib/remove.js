module.exports = function(el) {
  el.parentNode && el.parentNode.removeChild(el);
};