import * as React from 'react';
import PropTypes from 'prop-types';
import { FieldProps } from '../field';
export interface SearchProps extends FieldProps {
    shape?: 'sqaure' | 'round';
    value?: string;
    label?: React.ReactNode;
    showSearchIcon?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    background?: string;
    left?: React.ReactNode;
    action?: React.ReactNode;
    showAction?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onCancel?: (value?: any) => void;
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch?: (value: string) => void;
    onKeypress?: (event: KeyboardEvent) => void;
}
export default class Search extends React.PureComponent<SearchProps> {
    static displayName: 'Search';
    static propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {};
    renderLabel(): JSX.Element | null;
    renderAction(): JSX.Element | undefined;
    render(): JSX.Element;
}
