"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = offset;
var _utils = require("./utils");
function offset(node) {
  var doc = node && node.ownerDocument || document;
  var box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  var docElem = doc && doc.documentElement;
  if (!docElem || !(0, _utils.contains)(docElem, node)) return box;
  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();
  box = {
    top: box.top + docElem.scrollTop - (docElem.clientTop || 0),
    left: box.left + docElem.scrollLeft - (docElem.clientLeft || 0),
    width: box.width,
    height: box.height
  };
  return box;
}