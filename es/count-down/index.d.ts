import * as React from 'react';
import PropTypes from 'prop-types';
export interface CountDownProps {
    millisecond?: boolean;
    time: number;
    format: string;
    autoStart: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onFinish?: Function;
    onChange?: Function;
}
export interface CountDownState {
    remain: number;
}
export default class CountDown extends React.PureComponent<CountDownProps, CountDownState> {
    static propTypes: {
        millisecond: PropTypes.Requireable<boolean>;
        time: PropTypes.Requireable<number>;
        format: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        time: number;
        format: string;
        autoStart: boolean;
    };
    rafId: number;
    endTime: number;
    counting: boolean;
    constructor(props: CountDownProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    get timeData(): import("./lib/utils").TimeData;
    start: () => void;
    pause: () => void;
    reset: () => void;
    tick: () => void;
    microTick: () => void;
    macroTick: () => void;
    getRemain(): number;
    setRemain(remain: number): void;
    render(): JSX.Element;
}
