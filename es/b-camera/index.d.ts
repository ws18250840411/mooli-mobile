import * as React from 'react';
import PropTypes from 'prop-types';
import { CameraProps } from '../camera';
export interface BCameraProps extends CameraProps {
    type: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onFinish?: (imgSrc: string) => void;
}
interface BCameraStates {
    isFinish: boolean;
    isHold: boolean;
}
export default class BCamera extends React.PureComponent<BCameraProps, BCameraStates> {
    static displayName: 'BCamera';
    static propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        type: string;
    };
    static defaultRatio: {
        width: number;
        height: number;
    };
    cameraRef: React.RefObject<any>;
    constructor(props: BCameraProps);
    changeStatus: (isFinish: boolean) => void;
    switchCamera: () => void;
    getScreenshot: () => void;
    renderFooter: () => JSX.Element;
    render(): JSX.Element;
}
export {};
