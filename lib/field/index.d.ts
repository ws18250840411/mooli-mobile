import * as React from 'react';
import PropTypes from 'prop-types';
import { CellProps } from '../cell/cell';
export interface FieldProps extends CellProps {
    label?: string | React.ReactNode;
    value?: string;
    defaultValue?: string;
    type?: string;
    error?: boolean;
    colon?: boolean;
    formatTrigger?: string;
    name?: string;
    disabled?: boolean;
    readOnly?: boolean;
    autoSize?: boolean | object;
    rows?: number;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    clearable?: boolean;
    clearableIcon?: React.ReactNode;
    formatter?: Function;
    maxLength?: number;
    limit?: boolean;
    labelWidth?: number;
    labelClass?: string;
    labelAlign?: string;
    inputAlign?: string;
    placeholder?: string;
    errorMessage?: string;
    errorMessageAlign?: string;
    className?: string;
    style?: React.CSSProperties;
    prefix?: React.ReactNode;
    children?: React.ReactNode;
    onFocus?: React.EventHandler<React.MouseEvent<HTMLElement>>;
    onBlur?: React.EventHandler<React.MouseEvent<HTMLElement>>;
    onKeyPress?: (event: KeyboardEvent) => void;
    onClickInput?: React.EventHandler<React.MouseEvent<HTMLElement>>;
    onClear?: React.EventHandler<React.MouseEvent<HTMLElement>>;
    onChange?: (value: any) => void;
}
export default class Field extends React.PureComponent<FieldProps> {
    static propTypes: {
        value: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        value: string;
        type: string;
        formatTrigger: string;
    };
    inputRef: React.RefObject<any>;
    constructor(props: FieldProps);
    componentDidMount(): void;
    adjustSize: () => void;
    updateValue: (val: string | undefined, trigger?: string) => void;
    onFocus: () => void;
    onBlur: () => void;
    onFocusInput: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onClickInput: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onKeyPressInput: (e: KeyboardEvent) => void;
    onInput: (e: {
        target: {
            composing: any;
            value: string | undefined;
        };
    }) => void;
    onBlurInput: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onClear: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    showClear: () => any;
    render(): JSX.Element;
}
