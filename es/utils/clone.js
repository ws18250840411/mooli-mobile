function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import { isDef } from './index';
export function clone(obj) {
  if (!isDef(obj)) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return clone(item);
    });
  }
  if (_typeof(obj) === 'object') {
    var to = {};
    Object.keys(obj).forEach(function (key) {
      to[key] = clone(obj[key]);
    });
    return to;
  }
  return obj;
}