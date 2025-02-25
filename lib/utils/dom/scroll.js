"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElementTop = getElementTop;
exports.getRootScrollTop = getRootScrollTop;
exports.getScrollTop = getScrollTop;
exports.getScroller = getScroller;
exports.getVisibleHeight = getVisibleHeight;
exports.getVisibleTop = getVisibleTop;
exports.isScrolledToBottom = isScrolledToBottom;
exports.setRootScrollTop = setRootScrollTop;
exports.setScrollTop = setScrollTop;
function isWindow(val) {
  return val === window;
}
var overflowScrollReg = /scroll|auto/i;
function getScroller(el) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  var node = el;
  while (node && node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === 1 && node !== root) {
    var _window$getComputedSt = window.getComputedStyle(node),
      overflowY = _window$getComputedSt.overflowY;
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode;
  }
  return root;
}
function getScrollTop(el) {
  var top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;
  // iOS scroll bounce cause minus scrollTop
  return Math.max(top, 0);
}
function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}
function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
}
// get distance from element top to page top or scroller top
function getElementTop(el, scroller) {
  if (isWindow(el)) {
    return 0;
  }
  var scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
  return el.getBoundingClientRect().top + scrollTop;
}
function getVisibleHeight(el) {
  if (isWindow(el)) {
    return el.innerHeight;
  }
  return el.getBoundingClientRect().height;
}
function getVisibleTop(el) {
  if (isWindow(el)) {
    return 0;
  }
  return el.getBoundingClientRect().top;
}
function isScrolledToBottom(element) {
  if (isWindow(element)) {
    return element.scrollY + element.innerHeight >= document.body.scrollHeight;
  }
  return element.scrollHeight - element.scrollTop === element.clientHeight;
}