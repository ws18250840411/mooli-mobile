import { ToastProps } from './toast';
declare function ToastInstance(options: string | ToastProps): void;
declare namespace ToastInstance {
    var setDefaultOptions: {
        (options: ToastProps): void;
        (type: "html" | "success" | "loading" | "fail", options: ToastProps): void;
    };
    var resetDefaultOptions: (type?: "html" | "success" | "loading" | "fail" | undefined) => void;
    var loading: (options: string | ToastProps) => void;
    var success: (options: string | ToastProps) => void;
    var fail: (options: string | ToastProps) => void;
    var clear: () => void;
}
export default ToastInstance;
