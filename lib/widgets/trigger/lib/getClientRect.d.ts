export default function getClientRect(elem: HTMLElement): {
    width: any;
    height: any;
    offset: {
        top: number;
        left: number;
    };
} | {
    width: any;
    height: any;
    offset: {
        top: number;
        left: number;
        height: number;
        width: number;
    };
} | undefined;
