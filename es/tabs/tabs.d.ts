import * as React from 'react';
import PropTypes from 'prop-types';
import TabPane from './tab-pane';
export interface TabsProps {
    value?: string | number;
    defaultValue?: string | number;
    disabled?: boolean;
    direction?: string;
    type?: string;
    active?: number;
    ellipsis: boolean;
    duration?: number;
    offsetTop?: number;
    lazyRender?: boolean;
    swipeThreshold: number;
    color?: string;
    border?: boolean;
    sticky?: boolean;
    animated?: boolean;
    swipeable?: boolean;
    scrollspy?: boolean;
    background?: string;
    lineWidth?: number | string;
    lineHeight?: number | string;
    titleActiveColor?: string;
    titleInactiveColor?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    beforeChange?: () => void;
    onDisabled?: (index: number) => void;
    onClick?: (index: number) => void;
    onChange?: (index: number) => void;
    onSticktScroll?: () => void;
}
export interface TabsState {
    currentIndex: any;
    lineStyle: any;
}
export default class Tabs extends React.PureComponent<TabsProps, TabsState> {
    static TabPane: typeof TabPane;
    static propTypes: {
        type: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        disabled: boolean;
        swipeable: boolean;
        direction: string;
        defaultValue: number;
        type: string;
        active: number;
        ellipsis: boolean;
        duration: number;
        offsetTop: number;
        lazyRender: boolean;
        swipeThreshold: number;
    };
    events: {
        add: (node: EventTarget, type: string, handler: any, options?: {} | undefined) => any;
        removeAll: () => any;
    };
    tabBarRef: React.RefObject<HTMLDivElement>;
    shouldAnimate: boolean;
    constructor(props: TabsProps);
    get scrollable(): boolean;
    get navStyle(): {
        borderColor: string | undefined;
        background: string | undefined;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    onTabChange(index: number): void;
    setCurrentIndex: (index: number) => void;
    scrollIntoView: (immediate?: boolean | undefined) => void;
    setLine: () => void;
    handleNavClick(item: any, index: number): void;
    renderLine: () => JSX.Element | null;
    renderNavs: () => JSX.Element;
    renderWrap: () => JSX.Element;
    renderPanes: () => JSX.Element;
    render(): JSX.Element;
}
