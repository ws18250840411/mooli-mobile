import * as React from 'react';
import PropTypes from 'prop-types';
export interface CellGroupProps {
    title?: string;
    border?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export default class CellGroup extends React.PureComponent<CellGroupProps> {
    static displayName: 'CellGroup';
    static propTypes: {
        title: PropTypes.Requireable<string>;
        border: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {};
    render(): JSX.Element;
}
