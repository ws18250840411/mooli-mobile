"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUnit = addUnit;
exports.range = range;
exports.unitToPx = unitToPx;
var _system = require("../system");
var _utils = require("../../utils");
function addUnit(value) {
  if (!value || (0, _utils.isUndefined)(value) || (0, _utils.isNull)(value)) {
    return '';
  }
  var curValue = value.toString();
  if (!isNaN(Number(curValue))) {
    return "".concat(curValue, "px");
  }
  return curValue;
}
function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
var rootFontSize;
function getRootFontSize() {
  if (!rootFontSize) {
    var doc = document.documentElement;
    var fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
    rootFontSize = parseFloat(fontSize);
  }
  return rootFontSize;
}
function convertRem(value) {
  value = value.replace(/rem/g, '');
  return Number(value) * getRootFontSize();
}
function convertVw(value) {
  value = value.replace(/vw/g, '');
  return Number(value) * window.innerWidth / 100;
}
function convertVh(value) {
  value = value.replace(/vh/g, '');
  return Number(value) * window.innerHeight / 100;
}
function unitToPx(value) {
  if (typeof value === 'number') {
    return value;
  }
  if (_system.inBrowser) {
    if (value.indexOf('rem') !== -1) {
      return convertRem(value);
    }
    if (value.indexOf('vw') !== -1) {
      return convertVw(value);
    }
    if (value.indexOf('vh') !== -1) {
      return convertVh(value);
    }
  }
  return parseFloat(value);
}