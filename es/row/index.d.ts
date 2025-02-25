import * as React from 'react';
import PropTypes from 'prop-types';
export interface RowProps {
    align?: string;
    justify?: string;
    gutter?: string | number;
    wrap?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export default class Row extends React.PureComponent<RowProps> {
    static displayName: 'Row';
    static propTypes: {
        align: PropTypes.Requireable<string>;
        justify: PropTypes.Requireable<string>;
        gutter: PropTypes.Requireable<string | number>;
        wrap: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        gutter: number;
        wrap: boolean;
    };
    render(): JSX.Element;
}
