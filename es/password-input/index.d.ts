import * as React from 'react';
import PropTypes from 'prop-types';
export interface PasswordInputProps {
    value: string;
    mask: boolean;
    length: number;
    gutter?: number | string;
    focused?: boolean;
    info?: React.ReactNode;
    errorInfo?: React.ReactNode;
    className?: string;
    cursorColor?: string;
    cursorStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onFocus?: () => void;
}
export default class PasswordInput extends React.PureComponent<PasswordInputProps> {
    static displayName: 'PasswordInput';
    static propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        value: string;
        mask: boolean;
        length: number;
    };
    renderPoints: () => any;
    render(): JSX.Element;
}
