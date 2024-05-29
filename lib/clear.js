/**
 * Remove all children from the given element.
 *
 * @param {Element} el
 */
export default function clear(el) {
  el.replaceChildren();

  return el;
}