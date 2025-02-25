import * as React from 'react';
import PropTypes from 'prop-types';
import { PopupProps } from '../popup';
export interface ActionSheetAction {
    name?: string;
    color?: string;
    subname?: string;
    loading?: boolean;
    disabled?: boolean;
    callback?: (action: ActionSheetAction) => void;
    className?: string;
}
export interface ActionSheetProps extends PopupProps {
    visible?: boolean;
    title?: string;
    round?: boolean;
    closeable?: boolean;
    actions?: ActionSheetAction[];
    cancelText?: React.ReactNode;
    description?: React.ReactNode;
    safeAreaInsetBottom?: boolean;
    closeIcon?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onSelect?: (params: any) => void;
    onCancel?: React.EventHandler<React.MouseEvent<HTMLElement>>;
    onClickMask?: React.EventHandler<React.MouseEvent<HTMLElement>>;
    onOpen?: React.EventHandler<React.SyntheticEvent>;
    onClose?: React.EventHandler<React.SyntheticEvent>;
    onOpened?: React.EventHandler<React.SyntheticEvent>;
    onClosed?: React.EventHandler<React.SyntheticEvent>;
}
export default class ActionSheet extends React.PureComponent<ActionSheetProps> {
    static displayName: 'ActionSheet';
    static propTypes: {
        visible: PropTypes.Requireable<boolean>;
        title: PropTypes.Requireable<string>;
        round: PropTypes.Requireable<boolean>;
        closeable: PropTypes.Requireable<boolean>;
        cancelText: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        description: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        closeIcon: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        onClickMask: PropTypes.Requireable<(...args: any[]) => any>;
        onOpen: PropTypes.Requireable<(...args: any[]) => any>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        onOpened: PropTypes.Requireable<(...args: any[]) => any>;
        onClosed: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        round: boolean;
        closeIcon: string;
    };
    renderHeader: () => JSX.Element | null;
    renderCancel: () => JSX.Element | null;
    renderDescription: () => JSX.Element | null;
    renderOption: (item: ActionSheetAction, index: number) => JSX.Element;
    renderOptions: () => JSX.Element[] | null;
    renderContent: () => JSX.Element;
    render(): JSX.Element;
}
