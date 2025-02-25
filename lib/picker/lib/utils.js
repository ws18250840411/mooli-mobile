"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElementTranslateY = getElementTranslateY;
function getElementTranslateY(element) {
  var style = window.getComputedStyle(element);
  var transform = style.transform || style.webkitTransform;
  var translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  return Number(translateY);
}