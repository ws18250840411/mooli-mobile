import * as React from 'react';
import PropTypes from 'prop-types';
export interface SwitchProps {
    size?: string;
    value?: any;
    loading?: boolean;
    disabled?: boolean;
    activeValue?: any;
    inactiveValue?: any;
    activeColor?: string;
    inactiveColor?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (checked: boolean) => void;
}
export default class Switch extends React.PureComponent<SwitchProps> {
    static displayName: 'Switch';
    static propTypes: {
        size: PropTypes.Requireable<string>;
        loading: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        activeColor: PropTypes.Requireable<string>;
        inactiveColor: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        activeValue: boolean;
        inactiveValue: boolean;
    };
    get checked(): boolean;
    onClick: () => void;
    render(): JSX.Element;
}
