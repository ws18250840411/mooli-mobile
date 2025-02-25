import * as React from 'react';
import PropTypes from 'prop-types';
import { PopupProps as BasePopupProps } from '../widgets/popup';
export interface PopupProps extends BasePopupProps {
    visible?: boolean;
    lock?: boolean;
    position?: string;
    round?: boolean;
    closeable?: boolean;
    closeIcon?: string;
    closeIconPosition?: string;
    closeProps?: React.HTMLAttributes<any>;
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
    onClickMask?: React.EventHandler<React.MouseEvent<HTMLElement>>;
    onClickIcon?: React.EventHandler<React.MouseEvent<HTMLElement>>;
    onOpened?: React.EventHandler<React.SyntheticEvent>;
    onClosed?: React.EventHandler<React.SyntheticEvent>;
}
export default class Popup extends React.PureComponent<PopupProps> {
    static displayName: 'popup';
    static propTypes: {
        visible: PropTypes.Requireable<boolean>;
        lock: PropTypes.Requireable<boolean>;
        position: PropTypes.Requireable<string>;
        round: PropTypes.Requireable<boolean>;
        closeable: PropTypes.Requireable<boolean>;
        closeIcon: PropTypes.Requireable<string>;
        closeIconPosition: PropTypes.Requireable<string>;
        closeProps: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        onClickMask: PropTypes.Requireable<(...args: any[]) => any>;
        onClickIcon: PropTypes.Requireable<(...args: any[]) => any>;
        onOpened: PropTypes.Requireable<(...args: any[]) => any>;
        onClosed: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        destroy: boolean;
        lock: boolean;
        position: string;
        closeIcon: string;
        closeIconPosition: string;
        closeProps: {};
        fixed: boolean;
        mask: boolean;
    };
    onEnter: (e: React.MouseEvent) => void;
    onExited: (e: React.MouseEvent) => void;
    renderIcon: () => JSX.Element | null;
    render(): JSX.Element;
}
