import * as React from 'react';
import PropTypes from 'prop-types';
export interface ListProps {
    error?: boolean | React.ReactNode;
    errorText?: string;
    loading?: boolean | React.ReactNode;
    loadingText?: string;
    loadingStyle?: {};
    finished?: boolean | React.ReactNode;
    finishedText?: string;
    immediateCheck?: boolean;
    offset: number;
    direction?: 'down' | 'up';
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onLoad?: () => void;
}
export interface ListState {
    innerLoading?: boolean;
}
export default class List extends React.PureComponent<ListProps, ListState> {
    static propTypes: {
        loading: PropTypes.Requireable<boolean>;
        loadingText: PropTypes.Requireable<string>;
        immediateCheck: PropTypes.Requireable<boolean>;
        offset: PropTypes.Requireable<number>;
        direction: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        loadingText: string;
        errorText: string;
        immediateCheck: boolean;
        offset: number;
        direction: string;
    };
    rootRef: React.RefObject<HTMLDivElement>;
    placeholderRef: React.RefObject<HTMLDivElement>;
    events: {
        add: (node: EventTarget, type: string, handler: any, options?: {} | undefined) => any;
        removeAll: () => any;
    };
    constructor(props: ListProps);
    static getDerivedStateFromProps(prevProps: {
        loading: any;
    }, prevState: {
        innerLoading: any;
    }): {
        innerLoading: any;
    } | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    clickErrorText: () => void;
    check: (e: {
        currentTarget: any;
        target: any;
        srcElement: any;
    }) => false | undefined;
    loadingRender: () => JSX.Element | null;
    finishedTextRender: () => JSX.Element | null;
    errorTextRender: () => JSX.Element | null;
    placeholderRender: () => JSX.Element;
    render(): JSX.Element;
}
