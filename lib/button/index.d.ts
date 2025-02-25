import * as React from 'react';
import PropTypes from 'prop-types';
import { Types as LoadingType } from '../loading';
export declare const btype: readonly ["default", "primary", "info", "warning", "danger"];
export declare type ButtonType = typeof btype[number];
export declare const bsize: string[];
export declare type ButtonSize = typeof bsize[number];
export declare const iconpositions: string[];
export declare type IconPositionType = typeof iconpositions[number];
declare const htmlTypes: readonly ["button", "reset", "submit"];
export declare type HtmlType = typeof htmlTypes[number];
export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    text?: string;
    color?: string;
    plain?: boolean;
    hairline?: Boolean;
    disabled?: boolean;
    round?: boolean;
    square?: boolean;
    bordered?: boolean;
    loading?: boolean;
    loadingSize?: string;
    loadingType?: LoadingType;
    loadingText?: string;
    loadingIndicator?: React.ReactNode;
    icon?: React.ReactNode;
    iconSize?: string;
    iconPosition?: IconPositionType;
    block?: boolean;
    htmlType?: HtmlType;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
}
export default class Button extends React.PureComponent<ButtonProps> {
    static displayName: 'ActionSheet';
    static propTypes: {
        type: PropTypes.Requireable<"default" | "primary" | "info" | "warning" | "danger">;
        size: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        type: string;
        size: string;
        bordered: boolean;
        loadingSize: string;
        iconSize: string;
        iconPosition: string;
        htmlType: string;
    };
    renderIcon(): JSX.Element | undefined;
    renderContent(): any;
    render(): JSX.Element;
}
export {};
