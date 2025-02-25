import * as React from 'react';
import PropTypes from 'prop-types';
export interface OverlayProps {
    visible: boolean;
    duration?: number;
    lockScroll?: boolean;
    destory?: boolean;
    className?: string;
    zIndex?: React.CSSProperties['zIndex'];
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
interface OverlayStates {
    display: boolean;
}
export default class Overlay extends React.PureComponent<OverlayProps, OverlayStates> {
    static displayName: 'Overlay';
    static propTypes: {
        visible: PropTypes.Validator<boolean>;
        duration: PropTypes.Requireable<number>;
        destory: PropTypes.Requireable<boolean>;
        lockScroll: PropTypes.Requireable<boolean>;
        zIndex: PropTypes.Requireable<number>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        visible: boolean;
        destory: boolean;
        lockScroll: boolean;
    };
    protected rootRef: React.RefObject<any>;
    constructor(props: OverlayProps);
    render(): JSX.Element;
}
export {};
