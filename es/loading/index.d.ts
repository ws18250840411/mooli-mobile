import * as React from 'react';
import PropTypes from 'prop-types';
export declare const types: readonly ["circular", "spinner", "beat", "clockwise", "line"];
export declare type Types = typeof types[number];
export declare const PType: PropTypes.Requireable<"line" | "spinner" | "circular" | "beat" | "clockwise">;
export interface LoadingProps {
    type?: Types;
    color?: string;
    size?: string | number;
    vertical?: boolean;
    rotate?: boolean;
    textSize?: string | number;
    textColor?: string;
    indicator?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export default class Loading extends React.PureComponent<LoadingProps> {
    static displayName: 'Loading';
    static propTypes: {
        type: PropTypes.Requireable<"line" | "spinner" | "circular" | "beat" | "clockwise">;
        color: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string | number>;
        vertical: PropTypes.Requireable<boolean>;
        textSize: PropTypes.Requireable<string | number>;
        textColor: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        type: string;
        rotate: boolean;
    };
    LoadingIcon: () => any;
    LoadingText: () => JSX.Element | null;
    render(): JSX.Element;
}
