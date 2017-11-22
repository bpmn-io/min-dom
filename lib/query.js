module.exports = function(selector, el) {
  el = el || document;

  return el.querySelector(selector);
};

module.exports.all = function(selector, el) {
  el = el || document;

  return el.querySelectorAll(selector);
};