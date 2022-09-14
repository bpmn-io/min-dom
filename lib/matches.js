/**
 * @param { HTMLElement } element
 * @param { String } selector
 *
 * @return { boolean }
 */
export default function matches(element, selector) {
  return element && typeof element.matches === 'function' && element.matches(selector);
}