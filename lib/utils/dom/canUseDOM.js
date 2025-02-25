"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areEqualShallow = areEqualShallow;
exports.canUseDOM = canUseDOM;
function canUseDOM() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
function areEqualShallow(objectA, objectB) {
  return Object.keys(objectA).length === Object.keys(objectB).length && Object.keys(objectA).every(function (objectKey) {
    if (!Object.prototype.hasOwnProperty.call(objectB, objectKey)) {
      return false;
    }
    return objectA[objectKey] === objectB[objectKey];
  });
}