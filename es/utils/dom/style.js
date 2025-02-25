export function isHidden(el) {
  var style = window.getComputedStyle(el);
  var hidden = style.display === 'none';
  var parentHidden = el.offsetParent === null && style.position !== 'fixed';
  return hidden || parentHidden;
}