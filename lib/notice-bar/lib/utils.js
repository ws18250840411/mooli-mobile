"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doubleRaf = doubleRaf;
exports.raf = raf;
function raf(fn) {
  return window.requestAnimationFrame.call(window, fn);
}
function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}