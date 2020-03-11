import matches from './matches';

/**
 * Closest
 *
 * @param {Element} el
 * @param {String} selector
 * @param {Boolean} checkYourSelf (optional)
 */
export default function(element, selector, checkYourSelf) {
  var currentElem = checkYourSelf ? element : element.parentNode;

  while (currentElem && currentElem.nodeType !== document.DOCUMENT_NODE &&
      currentElem.nodeType !== document.DOCUMENT_FRAGMENT_NODE) {

    if (matches(currentElem, selector)) {
      return currentElem;
    }

    currentElem = currentElem.parentNode;
  }

  return matches(currentElem, selector) ? currentElem : null;
}
