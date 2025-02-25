export interface compressOptions {
    maxSize?: number;
    maxIteration?: number;
    maxWidthOrHeight?: number;
    fileType?: string;
}
export declare function compress(file: File, options: compressOptions): Promise<any>;
