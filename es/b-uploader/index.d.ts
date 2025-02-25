import * as React from 'react';
import PropTypes from 'prop-types';
import { UploaderProps } from '../uploader';
import { compressOptions } from './lib/compress';
export declare enum State {
    READY = "ready",
    SUCCESS = "done",
    FAIL = "failed",
    UPLOADING = "uploading"
}
export interface BUploaderProps extends UploaderProps {
    action: string;
    name: string;
    method?: string;
    withCredentials?: boolean;
    data?: object;
    headers?: object;
    autoUpload?: boolean;
    compress?: compressOptions;
    uploadStartMessage?: string;
    uploadingMessage?: string;
    uploadFailMessage?: string;
    uploadSuccessMessage?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: Function;
    onRemove?: Function;
    customRequest?: Function;
}
export interface BUploaderStates {
    fileList: any[];
    uploading: boolean;
}
export default class BUploader extends React.PureComponent<BUploaderProps, BUploaderStates> {
    static displayName: 'BUploader';
    static propTypes: {
        action: PropTypes.Requireable<string>;
        name: PropTypes.Requireable<string>;
        method: PropTypes.Requireable<string>;
        withCredentials: PropTypes.Requireable<boolean>;
        data: PropTypes.Requireable<object>;
        headers: PropTypes.Requireable<object>;
        autoUpload: PropTypes.Requireable<boolean>;
        uploadStartMessage: PropTypes.Requireable<string>;
        uploadingMessage: PropTypes.Requireable<string>;
        uploadFailMessage: PropTypes.Requireable<string>;
        uploadSuccessMessage: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onRemove: PropTypes.Requireable<(...args: any[]) => any>;
        customRequest: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        name: string;
        action: string;
        method: string;
        data: {};
        headers: {};
        withCredentials: boolean;
        autoUpload: boolean;
        uploadStartMessage: string;
        uploadingMessage: string;
        uploadFailMessage: string;
        uploadSuccessMessage: string;
    };
    constructor(props: BUploaderProps);
    private changeFileState;
    private setFileState;
    private handleBeforeRead;
    private triggerChange;
    private post;
    private handleAfterRead;
    private handleOversize;
    private handleDelete;
    private handleClosePreview;
    render(): JSX.Element;
}
