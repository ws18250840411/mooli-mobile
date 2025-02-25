"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelRaf = cancelRaf;
exports.raf = raf;
var _system = require("../system");
/* eslint-disable no-undef */

var prev = Date.now();
function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
var root = _system.inBrowser ? window : global;
var iRaf = root.requestAnimationFrame || fallback;
var iCancel = root.cancelAnimationFrame || root.clearTimeout;
function raf(fn) {
  return iRaf.call(root, fn);
}
function cancelRaf(id) {
  iCancel.call(root, id);
}