import * as React from 'react';
import PropTypes from 'prop-types';
export interface IndexAnchorProps {
    index?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    formatIndexAnchor?: (index: string) => React.ReactNode;
    onScrollIntoView?: () => void;
}
export interface IndexAnchorStates {
    top: number;
    left: number | null;
    rect: {
        top?: number;
        left?: number;
        right?: number;
        height?: number;
    };
    width: number | null;
    active: boolean;
}
export default class IndexAnchor extends React.PureComponent<IndexAnchorProps, IndexAnchorStates> {
    static contextType: React.Context<import("./context").IFormContext>;
    static displayName: 'IndexAnchor';
    static propTypes: {
        index: PropTypes.Requireable<string>;
        formatIndexAnchor: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {};
    curRef: React.RefObject<HTMLDivElement>;
    constructor(props: IndexAnchorProps, context?: any);
    get sticky(): any;
    get anchorStyle(): {};
    componentDidMount(): void;
    scrollIntoView(): void;
    getIndexBar(): any;
    getRect(scroller: HTMLElement | Window, scrollerRect: {
        top: number;
    }): {
        top: number;
        left: number;
        right: number;
        height: number;
    } | undefined;
    setStates(params: {}): void;
    render(): JSX.Element;
}
