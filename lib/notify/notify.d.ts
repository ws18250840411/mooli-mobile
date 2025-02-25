import * as React from 'react';
import PropTypes from 'prop-types';
import { PopupProps } from '../popup';
import { GetContainer } from '../utils/renderToContainer';
export declare const btype: readonly ["info", "success", "warning", "danger"];
export declare type NotifyType = typeof btype[number];
export interface NotifyProps extends PopupProps {
    visible?: boolean;
    color?: string;
    message?: React.ReactNode;
    background?: string;
    duration?: number;
    type?: NotifyType;
    getContainer?: GetContainer;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
interface ToastState {
    mountNode: GetContainer;
}
export interface NotifyProps extends PopupProps {
    visible?: boolean;
    color?: string;
    message?: React.ReactNode;
    background?: string;
    duration?: number;
    type?: NotifyType;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export default class Notify extends React.PureComponent<NotifyProps, ToastState> {
    static info: (props: any) => {
        close: () => void;
    };
    static success: (props: any) => {
        close: () => void;
    };
    static warning: (props: any) => {
        close: () => void;
    };
    static danger: (props: any) => {
        close: () => void;
    };
    static close: () => void;
    static setDefaultOptions: (options: NotifyProps) => void;
    static resetDefaultOptions: () => void;
    static propTypes: {
        visible: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        visible: boolean;
    };
    constructor(props: NotifyProps);
    componentDidMount(): void;
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
export {};
