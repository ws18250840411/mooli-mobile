export interface PositionOptions {
    at?: string;
    my?: string;
}
export default function getPosition(targetDom: HTMLElement, popupDom: HTMLElement, options: any): {
    positon: any;
    feedback: any;
};
