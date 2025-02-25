import * as React from 'react';
import PropTypes from 'prop-types';
export declare const directions: string[];
export declare type DirectionType = typeof directions[number];
export interface CheckboxGroupProps {
    value?: string;
    disabled?: boolean;
    direction?: DirectionType;
    iconSize?: string;
    checkedColor?: string;
    max?: number;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (value: any) => void;
}
export default class CheckboxGroup extends React.PureComponent<CheckboxGroupProps> {
    static displayName: 'CheckboxGroup';
    static propTypes: {
        disabled: PropTypes.Requireable<boolean>;
        iconSize: PropTypes.Requireable<string>;
        checkedColor: PropTypes.Requireable<string>;
        max: PropTypes.Requireable<string | number>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        direction: string;
    };
    render(): JSX.Element;
}
