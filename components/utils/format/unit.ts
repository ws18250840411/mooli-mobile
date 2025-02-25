import { inBrowser } from '../system';
import { isUndefined, isNull } from '../../utils';

export function addUnit(value?: string | number): string {
  if (!value || isUndefined(value) || isNull(value)) {
    return '';
  }
  let curValue = value.toString();
  if (!isNaN(Number(curValue))) {
    return `${curValue}px`
  }
  return curValue
}

export function range(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

let rootFontSize: number;

function getRootFontSize() {
  if (!rootFontSize) {
    const doc = document.documentElement;
    const fontSize =
      doc.style.fontSize || window.getComputedStyle(doc).fontSize;

    rootFontSize = parseFloat(fontSize);
  }

  return rootFontSize;
}

function convertRem(value: string) {
  value = value.replace(/rem/g, '');
  return Number(value) * getRootFontSize();
}

function convertVw(value: string) {
  value = value.replace(/vw/g, '');
  return (Number(value) * window.innerWidth) / 100;
}

function convertVh(value: string) {
  value = value.replace(/vh/g, '');
  return (Number(value) * window.innerHeight) / 100;
}

export function unitToPx(value: string | number): number {
  if (typeof value === 'number') {
    return value;
  }
  if (inBrowser) {
    if (value.indexOf('rem') !== -1) {
      return convertRem(value);
    }
    if (value.indexOf('vw') !== -1) {
      return convertVw(value);
    }
    if (value.indexOf('vh') !== -1) {
      return convertVh(value);
    }
  }
  return parseFloat(value);
}
