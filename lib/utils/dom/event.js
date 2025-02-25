"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventStore = eventStore;
exports.preventDefault = preventDefault;
exports.stopPropagation = stopPropagation;
function stopPropagation(event) {
  event.stopPropagation();
}
function preventDefault(event, isStopPropagation) {
  if (isStopPropagation) {
    stopPropagation(event);
  }
}
function eventStore() {
  var listeners = [];
  function add(node, type, handler, options) {
    node.addEventListener(type, handler, options);
    listeners.push(function () {
      return node.removeEventListener(type, handler, options);
    });
    return self;
  }
  function removeAll() {
    listeners = listeners.filter(function (remove) {
      return remove();
    });
    return self;
  }
  var self = {
    add: add,
    removeAll: removeAll
  };
  return self;
}