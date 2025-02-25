export function isDocument(element: { nodeType: number; }) {
  return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE;
}

export function isWindow(node: Element | SVGElement | any) {
  if ('window' in node && node.window === node) return node;
  if (isDocument(node)) return node.defaultView || false;
  return false;
}

export declare type EventHandler<K extends keyof HTMLElementEventMap> = (this: HTMLElement, event: HTMLElementEventMap[K]) => any;
export function listen<K extends keyof HTMLElementEventMap>(node: HTMLElement, eventName: K, handler: EventHandler<K>, options?: boolean){
  node.addEventListener(eventName, handler, options);
  return function () {
    let capture = options && typeof options !== 'boolean';
    node.removeEventListener(eventName, handler, capture);
  };
}

// 是否包含某个元素
export function contains(context: Element, node: Element): boolean | undefined {
  if (!context) return;
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}
// 判断是否包含某个类名
export function hasClass(element: Element | SVGElement | any, className: string) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
// 新增类名
export function addClass(element: Element | SVGElement | any, className: string) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
// 移除类名
function replaceClassName(origClass: string, classToRemove: string) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
export function removeClass(element: Element | SVGElement | any, className: string) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
