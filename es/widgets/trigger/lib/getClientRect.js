import { isWindow } from './utils';
import getClientAttribute from './getClientAttribute';
import offset from './getOffset';
export default function getClientRect(elem) {
  if (!elem) return;
  var width = getClientAttribute(elem, 'Width');
  var height = getClientAttribute(elem, 'Height');
  if (elem.nodeType === 9) {
    return {
      width: width,
      height: height,
      offset: {
        top: 0,
        left: 0
      }
    };
  }
  if (isWindow(elem)) {
    return {
      width: width,
      height: height,
      offset: {
        top: elem.scrollTop,
        left: elem.scrollLeft
      }
    };
  }
  return {
    width: width,
    height: height,
    offset: offset(elem)
  };
}