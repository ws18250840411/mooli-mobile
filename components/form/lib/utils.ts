export function isEmptyValue<T>(value: T) {
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

export function isFunction(val: unknown): val is Function {
    return typeof val === 'function';
}

export function isObject(val: unknown): val is Record<any, any> {
    return val !== null && typeof val === 'object';
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
  