import * as React from 'react';
import PropTypes from 'prop-types';
import RadioGroup from './radio-group';
export interface RadioProps {
    name?: string;
    value?: string | boolean | number;
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
export default class Radio extends React.PureComponent<RadioProps> {
    static Group: typeof RadioGroup;
    static displayName: 'Radio';
    static propTypes: {
        name: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<string | number | boolean>;
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
    };
    static defaultProps: {
        labelPosition: string;
        shape: string;
    };
    static contextType: React.Context<import("./lib/context").RadioContextState>;
    protected iconRef: React.RefObject<any>;
    constructor(props: RadioProps);
    get isDisabled(): any;
    get currentValue(): any;
    get checked(): any;
    onClick: (event: {
        target: any;
    }) => void;
    iconStyle: () => {
        borderColor: any;
        backgroundColor: any;
    } | undefined;
    genIcon: () => JSX.Element;
    genLabel: () => JSX.Element;
    render(): JSX.Element;
}
