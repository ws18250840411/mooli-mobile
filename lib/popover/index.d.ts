import React from 'react';
import PropTypes from 'prop-types';
import { TriggerProps } from '../widgets/trigger';
export declare type PopoverTheme = 'light' | 'dark';
export interface PopoverProps extends TriggerProps {
    className?: string;
    style?: React.CSSProperties;
    content?: React.ReactNode | (() => React.ReactNode);
    theme?: PopoverTheme;
    color?: string;
    placement?: TriggerProps['placement'];
    visible?: boolean;
    trigger?: TriggerProps['action'];
    offset?: number;
    visibleArrow?: boolean;
    arrowSize?: number;
    destroy?: boolean;
    transition?: TriggerProps['popupTransition'];
    onVisibleChange?: (visible: boolean) => void;
}
export default class Popover extends React.PureComponent<PopoverProps> {
    static displayName: 'Popover';
    static propTypes: {
        content: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        destroy: PropTypes.Requireable<boolean>;
        visibleArrow: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        offset: PropTypes.Requireable<number>;
        arrowSize: PropTypes.Requireable<number>;
        transition: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        theme: string;
        visibleArrow: boolean;
        destroy: boolean;
        arrowSize: number;
        offset: number;
        delay: number;
    };
    renderPopup: () => JSX.Element;
    render(): JSX.Element;
}
