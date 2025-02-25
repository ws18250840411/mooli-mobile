"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNestedFieldValue = getNestedFieldValue;
function getNestedFieldValue(object, path) {
  path = path || [];
  object = object || {};
  var value = object;
  for (var i = 0; i < path.length; i++) {
    value = value[path[i]];
    if (value == null) {
      return null;
    }
  }
  return value;
}