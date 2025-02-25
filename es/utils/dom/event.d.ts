export declare function stopPropagation(event: Event | any): void;
export declare function preventDefault(event: Event | any, isStopPropagation?: boolean): void;
export declare function eventStore(): {
    add: (node: EventTarget, type: string, handler: any, options?: {} | undefined) => any;
    removeAll: () => any;
};
