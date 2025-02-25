"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMonthEndDay = getMonthEndDay;
exports.getTimeStamp = getTimeStamp;
exports.getTrueValue = getTrueValue;
exports.padZero = padZero;
exports.range = range;
exports.times = times;
var _utils = require("../../utils");
function times(n, iteratee) {
  var index = -1;
  var result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
function getTrueValue(value) {
  if (!value) {
    return 0;
  }
  while ((0, _utils.isNaN)(parseInt(value, 10))) {
    if (value.length > 1) {
      value = value.slice(1);
    } else {
      return 0;
    }
  }
  return parseInt(value, 10);
}
function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}
function getTimeStamp(date) {
  return date.getTime();
}
function padZero(num) {
  var targetLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var str = num + '';
  while (str.length < targetLength) {
    str = '0' + str;
  }
  return str;
}
function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}