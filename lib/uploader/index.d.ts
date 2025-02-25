import * as React from 'react';
import PropTypes from 'prop-types';
import { ImageFit } from '../image';
export declare type ResultType = 'dataUrl' | 'text' | 'file';
export interface UploaderProps {
    name?: string;
    accept?: string;
    fileList?: any[];
    maxSize?: number;
    maxCount?: number;
    deletable?: boolean;
    showUpload?: boolean;
    previewImage?: boolean;
    previewFullImage?: boolean;
    imageFit?: ImageFit;
    resultType?: ResultType;
    uploadIcon?: React.ReactNode;
    uploadIconName?: string;
    disabled?: boolean;
    multiple?: boolean;
    uploadText?: string;
    previewCover?: Function;
    previewSize?: string;
    previewOptions?: object;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onBeforeRead?: Function;
    onAfterRead?: Function;
    onOversize?: Function;
    onBeforeDelete?: Function;
    onDelete?: Function;
    onClickPreview?: Function;
    onClosePreview?: Function;
}
export default class Uploader extends React.PureComponent<UploaderProps> {
    static propTypes: {
        name: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        name: string;
        accept: string;
        fileList: never[];
        deletable: boolean;
        showUpload: boolean;
        previewImage: boolean;
        previewFullImage: boolean;
        imageFit: string;
        resultType: string;
        uploadIconName: string;
        maxSize: number;
        maxCount: number;
    };
    inputRef: React.RefObject<HTMLInputElement>;
    imagePreview: {
        close: () => void;
    };
    constructor(props: UploaderProps);
    get previewSizeWithUnit(): string;
    resetInput: () => void;
    getDetail(index?: number | undefined): {
        name: string | undefined;
        index: number | undefined;
    };
    deleteFile: (file: any, index: number | undefined) => void;
    afterRead: (files: any[], oversize: boolean) => void;
    readFile: (files: any) => void;
    onChange: (event: {
        target: {
            files: any;
        };
    }) => void;
    onDelete: (file: {
        beforeDelete: Function | undefined;
    }, index: number | undefined) => void;
    onPreviewImage: (item: any) => void;
    genPreviewItem: (item: any, index: number) => JSX.Element;
    genPreviewList: () => JSX.Element[] | null | undefined;
    genUpload: () => JSX.Element | undefined;
    render(): JSX.Element;
}
