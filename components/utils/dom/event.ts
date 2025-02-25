export function stopPropagation(event: Event | any) {
  event.stopPropagation();
}

export function preventDefault(
  event: Event | any,
  isStopPropagation?: boolean,
) {
  if (isStopPropagation) {
    stopPropagation(event);
  }
}

export function eventStore() {
  let listeners: any = [];

  function add(node: EventTarget, type: string, handler: any, options?: {}) {
    node.addEventListener(type, handler, options);
    listeners.push(() => {
      return node.removeEventListener(type, handler, options);
    });
    return self;
  }

  function removeAll() {
    listeners = listeners.filter((remove: () => any) => remove());
    return self;
  }

  const self = {
    add,
    removeAll,
  };
  return self;
}
