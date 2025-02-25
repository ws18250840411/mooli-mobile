import * as React from 'react';
import PropTypes from 'prop-types';
export interface GridItemProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export default class GridItem extends React.PureComponent<GridItemProps> {
    static displayName: 'GridItem';
    static propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {};
    static contextType: React.Context<import("./lib/context").GridContextState>;
    render(): JSX.Element;
}
