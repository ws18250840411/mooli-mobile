export { addUnit, range, unitToPx } from './format/unit';
export { formatNumber } from './format/number';
export { createClassName } from './createClassName';
export { isHidden } from './dom/style';
export { raf, cancelRaf } from './format/raf';
export { canUseDOM, areEqualShallow } from './dom/canUseDOM';
export { resetScroll } from './dom/resetScroll';
export { eventStore } from './dom/event';
export { getScroller, getScrollTop, getElementTop } from './dom/scroll';
export { addClass, removeClass, hasClass } from './dom/class';
export { inBrowser, isIOS, isAndroid } from './system';
export { resolveContainer } from './getContainer';
export { renderToContainer } from './renderToContainer';
export { extend } from './extend';
export { clone } from './clone';

export function noop() { };

export const getUniqueId = () => {
  return parseInt((Math.random() * 1e9) as any, 10).toString(36);
};

export const getViewportSize = () => {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  };
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

export function isDate(val: Date): val is Date {
  return (
    Object.prototype.toString.call(val) === '[object Date]' &&
    !isNaN(val.getTime())
  );
}

export function isNaN(val: number): val is typeof NaN {
  if (Number.isNaN) {
    return Number.isNaN(val);
  }
  // eslint-disable-next-line no-self-compare
  return val !== val;
}

export function isString(value: any): boolean {
  return typeof value === 'string'
}

export function isBoolean(value: any): boolean {
  return typeof value === 'boolean'
}

export function isNull(value: any): boolean {
  return value === null
}

export function isUndefined(value: any): boolean {
  return typeof value === 'undefined'
}

export function isDef<T>(val: T): val is NonNullable<T> {
  return val !== undefined && val !== null;
}

export function isWindow(val: unknown): val is Window {
  return val === window;
}
