import React from 'react';
import PropTypes from 'prop-types';
import { PopupProps } from '../widgets/popup';
import { GetContainer } from '../utils/renderToContainer';
import { ConfirmProps } from './confirm';
export declare const BODY_LOCK_CLASS = "mooli-overflow-hidden";
export declare type DialogAction = 'onConfirm' | 'onCancel';
export interface DialogProps extends PopupProps {
    visible?: boolean;
    title?: string;
    message?: string | React.ReactNode;
    width?: string | number;
    lock?: boolean;
    showCancelButton?: boolean;
    cancelButtonText?: string;
    cancelButtonColor?: string;
    cancelLoading?: boolean;
    showConfirmButton?: boolean;
    confirmButtonText?: string;
    confirmButtonColor?: string;
    confirmLoading?: boolean;
    closeOnClickMask?: boolean;
    children?: React.ReactNode;
    getContainer?: GetContainer;
    vertical?: boolean;
    callback?: (action?: DialogAction) => void;
    onConfirm?: React.EventHandler<React.SyntheticEvent>;
    onCancel?: React.EventHandler<React.SyntheticEvent>;
    onOpen?: React.EventHandler<React.SyntheticEvent>;
    onClose?: React.EventHandler<React.SyntheticEvent>;
    onOpened?: React.EventHandler<React.SyntheticEvent>;
    onClosed?: React.EventHandler<React.SyntheticEvent>;
}
interface DialogState {
    loading: {
        confirm: boolean;
        cancel: boolean;
    };
}
export default class Dialog extends React.PureComponent<DialogProps, DialogState> {
    static alert: (props: ConfirmProps) => void;
    static confirm: (props: ConfirmProps) => void;
    static close: () => void;
    static setDefaultOptions: (options: DialogProps) => void;
    static resetDefaultOptions: () => void;
    static propTypes: {
        visible: PropTypes.Requireable<boolean>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        message: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        width: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        showCancelButton: PropTypes.Requireable<boolean>;
        cancelButtonText: PropTypes.Requireable<string>;
        cancelButtonColor: PropTypes.Requireable<string>;
        cancelLoading: PropTypes.Requireable<boolean>;
        showConfirmButton: PropTypes.Requireable<boolean>;
        confirmButtonText: PropTypes.Requireable<string>;
        confirmButtonColor: PropTypes.Requireable<string>;
        confirmLoading: PropTypes.Requireable<boolean>;
        closeOnClickMask: PropTypes.Requireable<boolean>;
        callback: PropTypes.Requireable<(...args: any[]) => any>;
        onConfirm: PropTypes.Requireable<(...args: any[]) => any>;
        onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        onOpen: PropTypes.Requireable<(...args: any[]) => any>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        onOpened: PropTypes.Requireable<(...args: any[]) => any>;
        onClosed: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        visible: boolean;
        mask: boolean;
        closeOnClickMask: boolean;
        showCancelButton: boolean;
        cancelButtonText: string;
        cancelLoading: boolean;
        showConfirmButton: boolean;
        confirmButtonText: string;
        confirmLoading: boolean;
        getContainer: HTMLElement | null;
    };
    constructor(props: Readonly<DialogProps>);
    static getDerivedStateFromProps(nextProps: any, prevState: any): {
        visible: any;
    } | null;
    handleEnter: (e: React.MouseEvent) => void;
    handleEntered: (e: React.MouseEvent) => void;
    handleExit: (e: React.MouseEvent) => void;
    handleExited: (e: React.MouseEvent) => void;
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
export {};
