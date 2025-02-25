"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inBrowser = void 0;
exports.isAndroid = isAndroid;
exports.isIOS = isIOS;
var inBrowser = exports.inBrowser = typeof window !== 'undefined';
function isAndroid() {
  return inBrowser ? /android/.test(navigator.userAgent.toLowerCase()) : false;
}
function isIOS() {
  return inBrowser ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;
}