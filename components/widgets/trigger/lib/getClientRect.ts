import { isWindow } from './utils';
import getClientAttribute from './getClientAttribute';
import offset from './getOffset';

export default function getClientRect(elem: HTMLElement) {
  if (!elem) return
  const width = getClientAttribute(elem, 'Width');
  const height = getClientAttribute(elem, 'Height');
  if (elem.nodeType === 9) { 
    return {
      width,
      height,
      offset: { top: 0, left: 0 }
    }
  }
  if (isWindow(elem)) { 
    return {
      width,
      height,
      offset: { top: elem.scrollTop, left: elem.scrollLeft }
    }
  }
  return {
    width,
    height,
    offset: offset(elem)
  }
}
