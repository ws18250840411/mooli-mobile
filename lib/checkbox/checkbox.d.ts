import * as React from 'react';
import PropTypes from 'prop-types';
import CheckboxGroup from './checkbox-group';
export interface CheckboxProps {
    name?: string;
    value?: any;
    disabled?: boolean;
    icon?: Function;
    iconSize?: string;
    checkedColor?: string;
    labelPosition?: string;
    labelDisabled?: boolean;
    shape?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: Function;
}
export default class Checkbox extends React.PureComponent<CheckboxProps> {
    static Group: typeof CheckboxGroup;
    static displayName: 'Checkbox';
    static propTypes: {
        name: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        icon: PropTypes.Requireable<(...args: any[]) => any>;
        iconSize: PropTypes.Requireable<string>;
        checkedColor: PropTypes.Requireable<string>;
        labelPosition: PropTypes.Requireable<string>;
        labelDisabled: PropTypes.Requireable<boolean>;
        shape: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        labelPosition: string;
        shape: string;
    };
    static contextType: React.Context<import("./lib/context").CheckboxContextState>;
    protected iconRef: React.RefObject<HTMLDivElement>;
    constructor(props: CheckboxProps);
    get isDisabled(): any;
    get currentValue(): any;
    get checked(): any;
    iconStyle: () => {
        borderColor: any;
        backgroundColor: any;
    } | undefined;
    onClick: (event: {
        target: any;
    }) => void;
    genIcon: () => JSX.Element;
    genLabel: () => JSX.Element;
    render(): JSX.Element;
}
