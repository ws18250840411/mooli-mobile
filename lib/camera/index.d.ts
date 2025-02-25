import * as React from 'react';
interface ScreenshotDimensions {
    width: number;
    height: number;
}
export declare type CameraProps = Omit<React.HTMLProps<HTMLVideoElement>, 'ref'> & {
    audio?: boolean;
    audioConstraints?: MediaStreamConstraints['audio'];
    shotSourceSize?: boolean;
    imageSmoothing?: boolean;
    mirrored?: boolean;
    shotHeight?: number;
    shotWidth?: number;
    onUserMedia?: (stream: MediaStream) => void;
    onUserMediaError?: (error: string | DOMException) => void;
    shotFormat?: 'image/webp' | 'image/png' | 'image/jpeg';
    shotQuality?: number;
    videoConstraints?: MediaStreamConstraints['video'];
};
interface CameraState {
    hasUserMedia: boolean;
    src?: string;
}
export default class Camera extends React.PureComponent<CameraProps, CameraState> {
    static defaultProps: {
        audio: boolean;
        shotSourceSize: boolean;
        imageSmoothing: boolean;
        mirrored: boolean;
        onUserMedia: () => undefined;
        onUserMediaError: () => undefined;
        shotFormat: string;
        shotQuality: number;
    };
    private canvas;
    private ctx;
    private unmounted;
    stream: MediaStream | null | undefined;
    video: HTMLVideoElement | null | undefined;
    constructor(props: CameraProps);
    componentDidMount(): void;
    componentDidUpdate(nextProps: CameraProps): void;
    componentWillUnmount(): void;
    private static stopMediaStream;
    private stopAndCleanup;
    getScreenshot(screenshotDimensions?: ScreenshotDimensions): string | null;
    getCanvas(screenshotDimensions?: ScreenshotDimensions): HTMLCanvasElement | null;
    private requestUserMedia;
    private handleUserMedia;
    render(): JSX.Element;
}
export {};
