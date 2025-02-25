import { isWindow } from './utils';

export default function getClientAttribute(elem: HTMLElement, type: string = "Width") { 
  if (isWindow(elem)) {
    //@ts-ignore
    return (elem as unknown  as Window).document.documentElement["client"+type];
  }
  if (elem.nodeType === 9) { 
    const doc = (elem as unknown as Document).documentElement;
    //@ts-ignore
    return Math.max((elem as Document).body["scroll" + type],doc["scroll" + type],(elem as Document).body["offset" + type],doc["offset" + type],doc["client" + type]);
  }  
  //@ts-ignore
  return elem["offset" + type];
}