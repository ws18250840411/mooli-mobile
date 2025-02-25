import { isDef } from './index';

export type ObjectIndex = Record<string, any>;
export function clone(obj: ObjectIndex): object {
  if (!isDef(obj)) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => clone(item));
  }

  if (typeof obj === 'object') {
    const to = {};
    Object.keys(obj).forEach((key) => {
      to[key] = clone(obj[key]);
    });
    return to;
  }

  return obj;
}
