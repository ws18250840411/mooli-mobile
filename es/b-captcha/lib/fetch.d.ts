interface AjaxType {
    url: string;
    method?: "POST" | "GET";
    data?: any;
    headers?: {};
    withCredentials?: boolean;
    onSuccess?: (res: any) => void;
    onError?: (e: any) => void;
}
export declare const ajax: ({ url, method, data, headers, withCredentials, onSuccess, onError }: AjaxType) => Promise<void>;
export {};
