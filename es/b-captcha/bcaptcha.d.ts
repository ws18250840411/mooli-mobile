import * as React from 'react';
import PropTypes from 'prop-types';
import { GetContainer } from '../utils/renderToContainer';
interface ActionType {
    getStrategyFetchUrl?: string;
    getCaptchaFetchUrl?: string;
    validatorCaptchaFetchUrl?: string;
    validationFetchUrl?: string;
}
export interface BCaptchaProps {
    action: ActionType;
    method?: string;
    withCredentials?: boolean;
    headers?: object;
    type?: string;
    phoneNumber: number | string;
    operationId?: number | string;
    duration?: number;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    callback?: Function;
}
interface BCaptchaState {
    mountNode: GetContainer;
    loading: boolean;
    backdropUrl: string;
    slideblockUrl: string;
    status: string;
    showStatus: boolean;
    visible: boolean;
}
export default class BCaptcha extends React.PureComponent<BCaptchaProps, BCaptchaState> {
    static displayName: 'BCaptcha';
    static propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        duration: number;
    };
    ratio: number;
    backdrop: {};
    slideblock: {};
    catchLastImgSource: never[];
    requestId: any;
    takeTime: number;
    captchaRef: React.RefObject<any>;
    timer: any;
    constructor(props: BCaptchaProps);
    componentDidMount(): void;
    getSliderCaptcha(): void;
    loadImg(data: any): Promise<void>;
    calculateWidthAndHeight(imgUrl: string): Promise<unknown>;
    validatorCaptcha(moveLength: number): void;
    checkValid: (status: string) => void;
    updateStatus: (status: string, duration?: number | undefined, cb?: (() => void) | undefined) => void;
    getStatus: (state: number) => string;
    reset: () => void;
    close: () => void;
    handleTouchStart: () => void;
    handleRefresh: () => void;
    handleFinish: (value: number, ratio: number) => void;
    renderResult(): JSX.Element | null;
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
export {};
