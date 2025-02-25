import * as React from 'react';
import PropTypes from 'prop-types';
export declare const directions: string[];
export declare type DirectionType = typeof directions[number];
export interface RadioGroupProps {
    value?: number | string;
    direction?: DirectionType;
    disabled?: boolean;
    checkedColor?: string;
    iconSize?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (value: any) => void;
}
export default class RadioGroup extends React.PureComponent<RadioGroupProps> {
    static displayName: 'RadioGroup';
    static propTypes: {
        value: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        checkedColor: PropTypes.Requireable<string>;
        iconSize: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        direction: string;
    };
    render(): JSX.Element;
}
