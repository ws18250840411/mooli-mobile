/* eslint-disable no-undef */
import { inBrowser } from '../system';
var prev = Date.now();
function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
var root = inBrowser ? window : global;
var iRaf = root.requestAnimationFrame || fallback;
var iCancel = root.cancelAnimationFrame || root.clearTimeout;
export function raf(fn) {
  return iRaf.call(root, fn);
}
export function cancelRaf(id) {
  iCancel.call(root, id);
}