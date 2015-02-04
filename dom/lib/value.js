var value = require('value');

/**
 * Get the first element's value or set selected
 * element values to `val`.
 *
 * @param {Mixed} [val]
 * @return {Mixed}
 * @api public
 */

exports.val =
exports.value = function(val){
  if (0 == arguments.length) {
    return this[0]
      ? value(this[0])
      : undefined;
  }

  return this.forEach(function(el){
    value(el, val);
  });
};
