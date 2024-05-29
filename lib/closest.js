/**
 * Closest
 *
 * @param {Element} el
 * @param {string} selector
 * @param {boolean} checkYourSelf (optional)
 */
export default function(element, selector, checkYourSelf) {
  var actualElement = checkYourSelf ? element : element.parentNode;

  return actualElement && typeof actualElement.closest === 'function' && actualElement.closest(selector) || null;
}
