import { fetch } from '../../widgets/fetch';

interface AjaxType {
  url: string;
  method?: "POST" | "GET";
  data?: any;
  headers?: {};
  withCredentials?: boolean;
  onSuccess?: (res: any) => void;
  onError?: (e: any) => void;
}

export const ajax = async({ url, method = "POST", data, headers, withCredentials, onSuccess, onError }: AjaxType) => {
  fetch({
    action: url,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    method,
    data,
    withCredentials,
    onSuccess,
    onError,
  });
}
