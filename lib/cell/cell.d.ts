import * as React from 'react';
import PropTypes from 'prop-types';
export interface CellProps {
    title?: React.ReactNode;
    label?: React.ReactNode;
    value?: React.ReactNode;
    size?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    border?: boolean;
    required?: boolean;
    clickable?: boolean;
    center?: boolean;
    arrow?: boolean;
    arrowDirection?: string;
    arrowRender?: React.ReactNode;
    labelClass?: string;
    valueClass?: string;
    titleClass?: string;
    titleStyle?: object;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
    onClickLeftIcon?: React.EventHandler<React.MouseEvent<HTMLElement>>;
    onClickRightIcon?: React.EventHandler<React.MouseEvent<HTMLElement>>;
}
export default class Cell extends React.PureComponent<CellProps> {
    static displayName: 'Cell';
    static Group: any;
    static propTypes: {
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        value: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        size: PropTypes.Requireable<string>;
        iconLeft: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        iconRight: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        border: PropTypes.Requireable<boolean>;
        required: PropTypes.Requireable<boolean>;
        clickable: PropTypes.Requireable<boolean>;
        center: PropTypes.Requireable<boolean>;
        arrow: PropTypes.Requireable<boolean>;
        arrowDirection: PropTypes.Requireable<string>;
        arrowRender: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        labelClass: PropTypes.Requireable<string>;
        valueClass: PropTypes.Requireable<string>;
        titleClass: PropTypes.Requireable<string>;
        titleStyle: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        onClickLeftIcon: PropTypes.Requireable<(...args: any[]) => any>;
        onClickRightIcon: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        border: boolean;
    };
    renderLabel: () => JSX.Element | null;
    renderIconLeft: () => JSX.Element | null;
    renderIconRight: () => JSX.Element | null;
    renderArrow: () => JSX.Element | null;
    renderTitle: () => JSX.Element | null;
    renderValue: () => JSX.Element | null;
    render(): JSX.Element;
}
