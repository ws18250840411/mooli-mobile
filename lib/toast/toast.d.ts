import React from 'react';
import PropTypes from 'prop-types';
import { PopupProps } from '../widgets/popup';
import { Types } from '../loading';
export declare const positions: readonly ["center", "top", "bottom"];
export declare type Position = typeof positions[number];
export declare const types: readonly ["html", "loading", "success", "fail"];
export declare type Type = typeof types[number];
export declare const DEFAULT_TYPE: "html";
export declare const DEFAULT_POSITION: "center";
export declare const DEFAULT_DURATION = 2000;
export declare const prefixCls: string;
export interface ToastProps extends PopupProps {
    type?: Type;
    duration?: number;
    position?: Position;
    message?: React.ReactNode;
    icon?: React.ReactNode;
    iconSize?: string;
    loadingType?: Types;
    closeOnClick?: boolean;
    forbidClick?: boolean;
    className?: string;
    single?: boolean;
    style?: React.CSSProperties;
    onClick?: React.EventHandler<React.SyntheticEvent>;
    onClose?: Function;
    onEnter?: Function;
    onExited?: Function;
}
interface ToastState {
    visible: boolean;
    hide: boolean;
    mountNode: Element | null;
}
export default class Toast extends React.PureComponent<ToastProps, ToastState> {
    static propTypes: {
        type: PropTypes.Requireable<"html" | "success" | "loading" | "fail">;
        message: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        duration: PropTypes.Requireable<number>;
        position: PropTypes.Requireable<"center" | "bottom" | "top">;
        iconSize: PropTypes.Requireable<string>;
        loadingType: PropTypes.Requireable<"line" | "spinner" | "circular" | "beat" | "clockwise">;
        closeOnClick: PropTypes.Requireable<boolean>;
        forbidClick: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        onEnter: PropTypes.Requireable<(...args: any[]) => any>;
        onExited: PropTypes.Requireable<(...args: any[]) => any>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        type: "html";
        position: "center";
        duration: number;
        forbidClick: boolean;
        closeOnClick: boolean;
    };
    static displayName: 'Toast';
    private timer;
    constructor(props: ToastProps);
    componentDidMount(): void;
    setTimer: (duration: number) => void;
    clearTimer: () => void;
    handleEnter: () => void;
    handleExit: () => void;
    handleClose: () => void;
    handleClick: (e: React.MouseEvent) => void;
    handleSingle: () => void;
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
}
export {};
