"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DIRECTION = void 0;
exports.isTreeScrollable = isTreeScrollable;
var DIRECTION;
(function (DIRECTION) {
  DIRECTION[DIRECTION["UP"] = -1] = "UP";
  DIRECTION[DIRECTION["DOWN"] = 1] = "DOWN";
})(DIRECTION || (exports.DIRECTION = DIRECTION = {}));
function isOverflowScrollable(element) {
  var overflowType = getComputedStyle(element).overflowY;
  if (element === document.scrollingElement && overflowType === 'visible') {
    return true;
  }
  if (overflowType !== 'scroll' && overflowType !== 'auto') {
    return false;
  }
  return true;
}
function isScrollable(element, direction) {
  if (!isOverflowScrollable(element)) {
    return false;
  }
  if (direction === DIRECTION.DOWN) {
    var bottomScroll = element.scrollTop + element.clientHeight;
    return bottomScroll < element.scrollHeight;
  }
  if (direction === DIRECTION.UP) {
    return element.scrollTop > 0;
  }
  throw new Error('unsupported direction');
}
function isTreeScrollable(element, direction) {
  if (isScrollable(element, direction)) {
    return true;
  }
  if (element.parentElement == null) {
    return false;
  }
  return isTreeScrollable(element.parentElement, direction);
}