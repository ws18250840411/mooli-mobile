import * as React from 'react';
import PropTypes from 'prop-types';
import IndexAnchor from "./index-anchor";
export interface IndexBarProps {
    indexList: string[];
    sticky?: boolean;
    stickyOffsetTop?: number;
    zIndex?: number;
    highlightColor?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    formatIndexBar?: (index: string) => React.ReactNode;
    onChange?: (value: number | string) => void;
    onSelect?: (value: number | string) => void;
}
export interface IndexBarStates {
    activeAnchorIndex: any;
    interacting: boolean;
}
export default class IndexBar extends React.PureComponent<IndexBarProps, IndexBarStates> {
    static displayName: 'IndexBar';
    static propTypes: {
        indexList: PropTypes.Requireable<any[]>;
        zIndex: PropTypes.Requireable<number>;
        highlightColor: PropTypes.Requireable<string>;
        sticky: PropTypes.Requireable<boolean>;
        stickyOffsetTop: PropTypes.Requireable<number>;
        formatIndexBar: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        indexList: never[];
        sticky: boolean;
        stickyOffsetTop: number;
    };
    static Anchor: typeof IndexAnchor;
    childrens: IndexAnchor[];
    rootRef: React.RefObject<HTMLDivElement>;
    scroller: HTMLElement | Window | any;
    events: {
        add: (node: EventTarget, type: string, handler: any, options?: {} | undefined) => any;
        removeAll: () => any;
    };
    touchActiveIndex: string;
    constructor(props: IndexBarProps, context?: any);
    get sidebarStyle(): {
        zIndex: number;
    } | {
        zIndex?: undefined;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    getContext(this: IndexBar): {
        indexBar: IndexBar;
        sticky: boolean;
        highlightColor: string | undefined;
        zIndex: number | undefined;
    };
    getScrollerRect(): any;
    getActiveAnchorIndex(scrollTop: any, rects: any): number;
    addChildren(child: IndexAnchor): void;
    setActiveAnchorIndex(index: string): void;
    scrollToElement(index: string): void;
    scrollTo(index: string): void;
    onScroll: () => void;
    onTouchStart: () => void;
    onTouchEnd: () => void;
    onTouchMove: (event: any) => void;
    renderIndex(): never[];
    render(): JSX.Element;
}
