import * as React from 'react';
import PropTypes from 'prop-types';
import { TabBarProps } from './tab-bar';
export interface TabPaneProps extends TabBarProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export default class TabPane extends React.PureComponent<TabPaneProps> {
    static displayName: 'TabPane';
    static propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {};
    static contextType: React.Context<import("./lib/tabPaneContext").ContextState>;
    render(): JSX.Element;
}
