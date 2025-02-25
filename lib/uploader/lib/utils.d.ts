export declare function isImageUrl(url: string): boolean;
export declare type FileListItem = {
    url?: string;
    file?: File;
    content?: string;
    isImage?: boolean;
    status?: '' | 'uploading' | 'done' | 'failed';
    message?: string;
};
export declare function isImageFile(item: FileListItem): boolean;
export declare function toArray<T>(item: T | T[]): T[];
export declare function isOversize(files: File | File[], maxSize: number | string): boolean;
export declare function fileReader(file: File, resultType: string): Promise<string | ArrayBuffer | null>;
