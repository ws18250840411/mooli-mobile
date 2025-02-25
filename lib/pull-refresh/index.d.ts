import * as React from 'react';
import PropTypes from 'prop-types';
export interface PullRefreshProps {
    pullDistance?: number;
    headHeight?: number;
    finished?: boolean;
    disabled?: boolean;
    pulling?: React.ReactNode;
    loosing?: string;
    loading?: string;
    success?: string;
    pullingText?: string;
    loosingText?: string;
    loadingText?: string;
    successText?: string;
    successDuration?: number;
    animationDuration?: number;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onRefresh: () => Promise<any>;
}
interface PullRefreshStates {
    status: string;
    ceiling: boolean;
    distance: any;
    duration: any;
}
export default class PullRefresh extends React.PureComponent<PullRefreshProps, PullRefreshStates> {
    static displayName: 'PullRefresh';
    static propTypes: {
        pullDistance: PropTypes.Requireable<number>;
        headHeight: PropTypes.Requireable<number>;
        finished: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        pulling: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        loading: PropTypes.Requireable<string>;
        success: PropTypes.Requireable<string>;
        pullingText: PropTypes.Requireable<string>;
        loosingText: PropTypes.Requireable<string>;
        loadingText: PropTypes.Requireable<string>;
        successText: PropTypes.Requireable<string>;
        successDuration: PropTypes.Requireable<number>;
        animationDuration: PropTypes.Requireable<number>;
        onRefresh: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        headHeight: number;
        finished: boolean;
        animationDuration: number;
        successDuration: number;
        pullingText: string;
        loosingText: string;
        loadingText: string;
        disabled: boolean;
    };
    protected rootRef: React.RefObject<any>;
    constructor(props: PullRefreshProps);
    get touchable(): boolean;
    get headStyle(): {
        height: string;
    } | {
        height?: undefined;
    };
    componentDidUpdate(prevProps: any): void;
    update: () => void;
    checkPullStart: () => void;
    updateStatus: (distance: React.SetStateAction<number>, finish?: boolean | undefined) => void;
    ease: (distance: any) => number;
    onTouchStart: () => void;
    onTouchMove: (event: Event, position: {
        y: number;
    }) => void;
    onTouchEnd: () => void;
    pullDownRender: () => JSX.Element | null;
    trackRender: () => JSX.Element;
    render(): JSX.Element;
}
export {};
