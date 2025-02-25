import { isWindow } from './utils';
export default function getClientAttribute(elem) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Width";
  if (isWindow(elem)) {
    //@ts-ignore
    return elem.document.documentElement["client" + type];
  }
  if (elem.nodeType === 9) {
    var doc = elem.documentElement;
    //@ts-ignore
    return Math.max(elem.body["scroll" + type], doc["scroll" + type], elem.body["offset" + type], doc["offset" + type], doc["client" + type]);
  }
  //@ts-ignore
  return elem["offset" + type];
}