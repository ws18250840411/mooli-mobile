"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = extend;
var _index = require("./index");
function assignKey(to, from, key) {
  var val = from[key];
  if (!(0, _index.isDef)(val)) {
    return;
  }
  if (!Object.prototype.hasOwnProperty.call(to, key) || !(0, _index.isObject)(val)) {
    to[key] = val;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    to[key] = extend(Object(to[key]), from[key]);
  }
}
function extend(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}