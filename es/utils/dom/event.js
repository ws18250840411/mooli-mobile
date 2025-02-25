export function stopPropagation(event) {
  event.stopPropagation();
}
export function preventDefault(event, isStopPropagation) {
  if (isStopPropagation) {
    stopPropagation(event);
  }
}
export function eventStore() {
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