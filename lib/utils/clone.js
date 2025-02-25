"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = clone;
var _index = require("./index");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function clone(obj) {
  if (!(0, _index.isDef)(obj)) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return clone(item);
    });
  }
  if (_typeof(obj) === 'object') {
    var to = {};
    Object.keys(obj).forEach(function (key) {
      to[key] = clone(obj[key]);
    });
    return to;
  }
  return obj;
}