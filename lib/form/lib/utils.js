"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmptyValue = isEmptyValue;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isPromise = isPromise;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function isEmptyValue(value) {
  if (value === undefined || value === null) {
    return true;
  }
  if (Array.isArray(value) && !value.length) {
    return true;
  }
  if (typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function isFunction(val) {
  return typeof val === 'function';
}
function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}