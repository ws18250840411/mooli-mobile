import { isDef, isObject } from './index';
function assignKey(to, from, key) {
  var val = from[key];
  if (!isDef(val)) {
    return;
  }
  if (!Object.prototype.hasOwnProperty.call(to, key) || !isObject(val)) {
    to[key] = val;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    to[key] = extend(Object(to[key]), from[key]);
  }
}
export function extend(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}