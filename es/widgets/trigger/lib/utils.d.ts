export declare function isDocument(element: {
    nodeType: number;
}): boolean;
export declare function isWindow(node: Element | SVGElement | any): any;
export declare type EventHandler<K extends keyof HTMLElementEventMap> = (this: HTMLElement, event: HTMLElementEventMap[K]) => any;
export declare function listen<K extends keyof HTMLElementEventMap>(node: HTMLElement, eventName: K, handler: EventHandler<K>, options?: boolean): () => void;
export declare function contains(context: Element, node: Element): boolean | undefined;
export declare function hasClass(element: Element | SVGElement | any, className: string): any;
export declare function addClass(element: Element | SVGElement | any, className: string): void;
export declare function removeClass(element: Element | SVGElement | any, className: string): void;
