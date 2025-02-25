import * as React from 'react';
import PropTypes from 'prop-types';
export interface NoticeBarItemProps {
    index?: number;
    key?: number;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export default class NoticeBarItem extends React.PureComponent<NoticeBarItemProps> {
    static displayName: 'NoticeBarItem';
    static propTypes: {
        index: PropTypes.Requireable<number>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {};
    static contextType: React.Context<import("./lib/context").NoticeBarContextState>;
    render(): JSX.Element;
}
