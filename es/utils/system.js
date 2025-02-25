export var inBrowser = typeof window !== 'undefined';
export function isAndroid() {
  return inBrowser ? /android/.test(navigator.userAgent.toLowerCase()) : false;
}
export function isIOS() {
  return inBrowser ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;
}