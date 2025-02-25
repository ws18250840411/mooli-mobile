import * as React from 'react';
import PropTypes from 'prop-types';
import { GetContainer } from '../utils/renderToContainer';
export interface ImagePreviewProps {
    visible?: boolean;
    images?: any[];
    initial?: number;
    showIndex?: boolean;
    showIndicators?: boolean;
    closeable?: boolean;
    closeIcon?: string;
    closeIconPosition?: string;
    maskClosable?: boolean;
    loop?: boolean;
    lock?: boolean;
    destroy?: boolean;
    getContainer?: GetContainer;
    className?: string;
    style?: React.CSSProperties;
    onClose?: () => void;
    onChange?: (index: number) => void;
}
export default class ImagePreview extends React.PureComponent<ImagePreviewProps> {
    static propTypes: {
        visible: PropTypes.Requireable<boolean>;
        images: PropTypes.Requireable<any[]>;
        initial: PropTypes.Requireable<number>;
        showIndex: PropTypes.Requireable<boolean>;
        showIndicators: PropTypes.Requireable<boolean>;
        closeable: PropTypes.Requireable<boolean>;
        closeIcon: PropTypes.Requireable<string>;
        closeIconPosition: PropTypes.Requireable<string>;
        maskClosable: PropTypes.Requireable<boolean>;
        loop: PropTypes.Requireable<boolean>;
        lock: PropTypes.Requireable<boolean>;
        destroy: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        closeIcon: string;
        closeIconPosition: string;
        maskClosable: boolean;
        showIndex: boolean;
        loop: boolean;
        getContainer: HTMLElement | null;
    };
    static create: (options: ImagePreviewProps) => {
        close: () => void;
    };
    constructor(props: ImagePreviewProps);
    onTouchStart: () => void;
    onTouchMove: () => void;
    onTouchEnd: () => void;
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
