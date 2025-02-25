import * as React from 'react';
import PropTypes from 'prop-types';
interface ImageProps {
    src?: string;
    alt?: string;
    fit?: string;
    round?: boolean;
    width?: string;
    height?: string;
    className?: string;
    style?: React.CSSProperties;
}
export interface CaptchaProps {
    backdrop?: ImageProps;
    slideblock?: ImageProps;
    loading?: boolean;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onChange?: Function;
    onFinish?: Function;
    onRefresh?: Function;
    onTouchStart?: Function;
    onTouchMove?: Function;
    onTouchEnd?: Function;
}
export interface CaptchaStates {
    value: number;
}
export default class Captcha extends React.PureComponent<CaptchaProps, CaptchaStates> {
    wrapRef: React.RefObject<any>;
    sliderRef: React.RefObject<any>;
    grayRef: React.RefObject<any>;
    dragStatus: string;
    startValue: number;
    currentValue: number;
    ratio: number;
    static displayName: 'Captcha';
    static propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {};
    constructor(props: CaptchaProps);
    sliderDiff(): number;
    grayDiff(): number;
    hasMove(): boolean;
    updateValue: (value: number) => void;
    onTouchStart: () => void;
    onTouchMove: (_event: any, position: any) => void;
    onTouchEnd: () => void;
    handleRefresh: () => void;
    handleLoad: (e: any) => void;
    reset: () => void;
    renderPanel(): JSX.Element;
    renderControl(): JSX.Element;
    render(): JSX.Element;
}
export {};
