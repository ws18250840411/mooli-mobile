import * as React from 'react';
import PropTypes from 'prop-types';
export interface StickyProps {
    zIndex?: number;
    offsetTop: number;
    container?: any;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (isFixed: boolean) => void;
    onScroll?: (scrollTop: number, isFixed: boolean) => void;
}
interface StickyStates {
    fixed: boolean;
    transform: {};
}
export default class Sticky extends React.PureComponent<StickyProps, StickyStates> {
    static propTypes: {
        zIndex: PropTypes.Requireable<number>;
    };
    static defaultProps: {
        offsetTop: number;
    };
    rootRef: React.RefObject<HTMLDivElement>;
    events: {
        add: (node: EventTarget, type: string, handler: any, options?: {} | undefined) => any;
        removeAll: () => any;
    };
    height: number;
    offsetTopPx: number;
    container: any;
    flog: boolean;
    constructor(props: StickyProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(_prevProps: any, prevState: any): void;
    emitScroll: (scrollTop: number, isFixed: boolean) => void;
    onscroll: () => void;
    get curStyle(): any;
    render(): JSX.Element;
}
export {};
