export interface RequestOption {
    action: string;
    data?: {
        [key: string]: any;
    };
    filename?: string;
    file?: File;
    method?: string;
    withCredentials?: boolean;
    headers?: {
        [key: string]: any;
    };
    onLoadStart?: (e: ProgressEvent<EventTarget>) => void;
    onProgress?: (e: ProgressEvent<EventTarget>) => void;
    onError?: (e: Error | ProgressEvent<EventTarget>) => void;
    onSuccess?: (e: object) => void;
}
export declare const fetch: (option: RequestOption) => XMLHttpRequest;
