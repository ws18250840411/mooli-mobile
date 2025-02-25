import * as React from 'react';
import PropTypes from 'prop-types';
import { Keyframes } from './lib/keyframe';
import NoticeBarItem from './notice-bar-item';
export interface NoticeBarProps {
    mode?: string;
    text?: string;
    color?: string;
    wrapable?: boolean;
    background?: string;
    scrollable?: boolean;
    cssTransition?: boolean;
    delay?: number;
    speed?: number;
    vertical?: boolean;
    leftIcon?: React.ReactNode | string;
    rightIcon?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClose?: Function;
    onReplay?: Function;
    onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
}
export interface NoticeBarState {
    show: boolean;
    offset?: number;
    duration?: number;
    display: boolean;
    animationDuration?: number;
}
export default class NoticeBar extends React.PureComponent<NoticeBarProps, NoticeBarState> {
    static Item: typeof NoticeBarItem;
    static displayName: 'NoticeBar';
    static propTypes: {
        mode: PropTypes.Requireable<string>;
        text: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        wrapable: PropTypes.Requireable<boolean>;
        background: PropTypes.Requireable<string>;
        scrollable: PropTypes.Requireable<boolean>;
        cssTransition: PropTypes.Requireable<boolean>;
        delay: PropTypes.Requireable<number>;
        speed: PropTypes.Requireable<number>;
        vertical: PropTypes.Requireable<boolean>;
        leftIcon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        rightIcon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        onReplay: PropTypes.Requireable<(...args: any[]) => any>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        scrollable: null;
        delay: number;
        speed: number;
        cssTransition: boolean;
        vertical: boolean;
    };
    rootRef: React.RefObject<HTMLDivElement>;
    wrapRef: React.RefObject<HTMLDivElement>;
    contentRef: React.RefObject<HTMLDivElement>;
    wrapWidth: number;
    contentWidth: number;
    startTimer: any;
    keyframeName: string;
    keyframe: Keyframes;
    wrapHeight: number;
    contentHeight: number;
    active: number;
    constructor(props: NoticeBarProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    get counts(): number;
    reset: () => void;
    correctPosition: () => void;
    getTargetActive: (pace: number) => number;
    getTargetOffset: (targetActive: number, offset?: number) => number;
    move: ({ pace, offset }: {
        pace?: number | undefined;
        offset?: number | undefined;
    }) => void;
    next: () => void;
    start: () => void;
    onTransitionEnd: () => void;
    onClickIcon: () => void;
    getLeftIconRender: () => JSX.Element | null;
    getRightIconRender: () => JSX.Element | null;
    getContentRender: () => JSX.Element;
    render(): JSX.Element;
}
