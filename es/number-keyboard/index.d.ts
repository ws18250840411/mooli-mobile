import * as React from 'react';
import { KeyProps } from './key';
export interface NumberKeyboardProps {
    value: string;
    show: boolean;
    maxlength: number | string;
    theme?: 'custom' | 'default';
    title?: React.ReactNode;
    titleLeft?: React.ReactNode;
    extraKey?: React.ReactNode;
    zIndex?: number;
    closeButtonText?: React.ReactNode;
    deleteButtonText?: React.ReactNode;
    showDeleteButtonIcon?: boolean;
    hideOnClickOutside?: boolean;
    safeAreaInsetBottom?: boolean;
    randomKeyOrder?: boolean;
    blurOnClose?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onTitleLeftClick?: () => void;
    onInput?: (v: string) => void;
    onChange?: (v: string) => void;
    onDelete?: () => void;
    onBlur?: () => void;
    onClose?: () => void;
    onShow?: () => void;
    onHide?: () => void;
}
export default class NumberKeyboard extends React.PureComponent<NumberKeyboardProps> {
    static displayName: 'NumberKeyboard';
    static defaultProps: {
        value: string;
        theme: string;
        maxlength: number;
        showDeleteButtonIcon: boolean;
        hideOnClickOutside: boolean;
        safeAreaInsetBottom: boolean;
        closeButtonText: string;
        zIndex: number;
    };
    randomKeys: KeyProps[];
    get keys(): KeyProps[];
    genCustomKeys: () => KeyProps[];
    genDefaultKeys: () => KeyProps[];
    genBasicKeys: () => KeyProps[];
    onClose: () => void;
    onBlur: () => void;
    onPress: ({ text, type }: {
        text: any;
        type: any;
    }) => void;
    onAnimationEnd: () => void;
    renderTitle: () => JSX.Element | undefined;
    renderContent: () => JSX.Element;
    renderKeys: () => JSX.Element;
    renderSidebar: () => JSX.Element | null;
    render(): JSX.Element;
}
