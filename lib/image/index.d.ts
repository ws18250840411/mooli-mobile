import * as React from 'react';
import PropTypes from 'prop-types';
export declare type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export interface ImageProps {
    src?: string;
    alt?: string;
    fit?: ImageFit;
    round?: boolean;
    width?: string;
    height?: string;
    radius?: string;
    iconSize?: string;
    showError?: boolean;
    iconPrefix?: string;
    showLoading?: boolean;
    errorIcon?: string;
    errorIndicator?: React.ReactNode;
    loadingIcon?: string;
    loadingIndicator?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
    onLoad?: React.ReactEventHandler<HTMLImageElement>;
    onError?: React.ReactEventHandler<HTMLImageElement>;
    onMouseUp?: React.EventHandler<React.MouseEvent<HTMLElement>>;
    onMouseMove?: React.EventHandler<React.MouseEvent<HTMLElement>>;
    onMouseDown?: React.EventHandler<React.MouseEvent<HTMLElement>>;
}
interface ImageStates {
    error: boolean;
    loading: boolean;
}
export default class Image extends React.PureComponent<ImageProps, ImageStates> {
    static displayName: 'Image';
    static propTypes: {
        src: PropTypes.Requireable<string>;
        alt: PropTypes.Requireable<string>;
        round: PropTypes.Requireable<boolean>;
        width: PropTypes.Requireable<string>;
        height: PropTypes.Requireable<string>;
        radius: PropTypes.Requireable<string>;
        iconSize: PropTypes.Requireable<string>;
        showError: PropTypes.Requireable<boolean>;
        iconPrefix: PropTypes.Requireable<string>;
        showLoading: PropTypes.Requireable<boolean>;
        errorIcon: PropTypes.Requireable<string>;
        errorIndicator: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        loadingIcon: PropTypes.Requireable<string>;
        loadingIndicator: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        onLoad: PropTypes.Requireable<(...args: any[]) => any>;
        onError: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        showLoading: boolean;
        showError: boolean;
        loadingIcon: string;
        errorIcon: string;
    };
    constructor(props: ImageProps);
    componentDidUpdate(prevProps: any): void;
    renderLoadingIcon: () => JSX.Element;
    renderErrorIcon: () => JSX.Element;
    renderPlaceholder: () => JSX.Element | null;
    renderImage: () => JSX.Element | null;
    render(): JSX.Element;
}
export {};
