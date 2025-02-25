"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatNumber = formatNumber;
exports.range = range;
/* eslint-disable no-param-reassign */
function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function trimExtraChar(value, char, regExp) {
  var index = value.indexOf(char);
  var prefix = '';
  if (index === -1) {
    return value;
  }
  if (char === '-' && index !== 0) {
    return value.slice(0, index);
  }
  if (char === '.' && value.match(/^(\.|-\.)/)) {
    prefix = index ? '-0' : '0';
  }
  return prefix + value.slice(0, index + 1) + value.slice(index).replace(regExp, '');
}
function formatNumber(value) {
  var allowDot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var allowMinus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g);
  } else {
    value = value.split('.')[0];
  }
  if (allowMinus) {
    value = trimExtraChar(value, '-', /-/g);
  } else {
    value = value.replace(/-/, '');
  }
  var regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
  return value.replace(regExp, '');
}