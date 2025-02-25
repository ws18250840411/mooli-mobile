import * as React from 'react';
import PropTypes from 'prop-types';
export interface IconProps {
    name?: string;
    dot?: boolean;
    badge?: string | number;
    color?: string;
    size?: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
    onMouseDown?: React.EventHandler<React.MouseEvent<HTMLElement>>;
}
export default class Icon extends React.PureComponent<IconProps> {
    static displayName: 'Icon';
    static propTypes: {
        name: PropTypes.Requireable<string>;
        dot: PropTypes.Requireable<boolean>;
        badge: PropTypes.Requireable<string | number>;
        color: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        onMouseDown: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {};
    render(): JSX.Element;
}
