import { isNaN } from '../../utils';
export function times(n, iteratee) {
  var index = -1;
  var result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
export function getTrueValue(value) {
  if (!value) {
    return 0;
  }
  while (isNaN(parseInt(value, 10))) {
    if (value.length > 1) {
      value = value.slice(1);
    } else {
      return 0;
    }
  }
  return parseInt(value, 10);
}
export function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}
export function getTimeStamp(date) {
  return date.getTime();
}
export function padZero(num) {
  var targetLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var str = num + '';
  while (str.length < targetLength) {
    str = '0' + str;
  }
  return str;
}
export function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}