import * as React from 'react';
import PropTypes from 'prop-types';
export interface TabBarProps {
    title: React.ReactNode;
    dot?: boolean;
    type?: string;
    info?: string;
    color?: string;
    isActive?: boolean;
    disabled?: boolean;
    scrollable?: boolean;
    activeColor?: string;
    inactiveColor?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export default class TabBar extends React.PureComponent<TabBarProps> {
    static displayName: 'TabBar';
    static propTypes: {
        dot: PropTypes.Requireable<boolean>;
        type: PropTypes.Requireable<string>;
        info: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        isActive: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        scrollable: PropTypes.Requireable<boolean>;
        activeColor: PropTypes.Requireable<string>;
        inactiveColor: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {};
    get curStyle(): React.CSSProperties;
    genText: () => JSX.Element;
    render(): JSX.Element;
}
