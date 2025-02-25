export declare function getDataUrlFromFile(file: Blob): Promise<unknown>;
export declare function getNewCanvasAndCtx(width: number, height: number): any[];
export declare function getFilefromDataUrl(dataUrl: any, filename: any, lastModified?: number): Promise<unknown>;
export declare function loadImage(src: any): Promise<unknown>;
export declare function drawImageInCanvas(img: any): any;
export declare function drawFileInCanvas(file: File): Promise<any[]>;
export declare function canvasToFile(canvas: any, fileType: string, fileName: string, fileLastModified: any, quality?: number): Promise<any>;
export declare function cleanupCanvasMemory(canvas: {
    width: number;
    height: number;
}): void;
export declare function adjustCanvasWidthOrHeight(canvas: any, maxWidthOrHeight: any): any;
