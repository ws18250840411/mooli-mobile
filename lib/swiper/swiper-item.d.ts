import * as React from 'react';
import PropTypes from 'prop-types';
export interface SwiperItemProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export default class SwiperItem extends React.PureComponent<SwiperItemProps> {
    static displayName: 'SwiperItem';
    static propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {};
    render(): JSX.Element;
}
