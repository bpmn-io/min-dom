export default function query(selector, el) {
  el = el || document;

  return el.querySelector(selector);
}

export function all(selector, el) {
  el = el || document;

  return el.querySelectorAll(selector);
}