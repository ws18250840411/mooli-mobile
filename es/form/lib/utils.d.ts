export declare function isEmptyValue<T>(value: T): boolean;
export declare function isFunction(val: unknown): val is Function;
export declare function isObject(val: unknown): val is Record<any, any>;
export declare function isPromise<T = any>(val: unknown): val is Promise<T>;
