import * as React from 'react';
import PropTypes from 'prop-types';
export interface ColProps {
    span?: number | string;
    offset?: number | string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export default class Col extends React.PureComponent<ColProps> {
    static displayName: 'Col';
    static propTypes: {
        span: PropTypes.Requireable<string | number>;
        offset: PropTypes.Requireable<string | number>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        span: number;
        offset: number;
    };
    static contextType: React.Context<import("../row/lib/context").RowContextState>;
    render(): JSX.Element;
}
