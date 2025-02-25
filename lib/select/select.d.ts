import * as React from 'react';
import PropTypes from 'prop-types';
import { SearchProps } from '../search';
import Option, { OptionProps } from './option';
import JSearch from './lib/Search';
export interface SelectProps extends SearchProps {
    options?: OptionProps[];
    filterable?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onCompleted?: (item?: OptionProps) => void;
}
export interface SelectStates {
    value: string;
    curSelected: OptionProps;
    options: OptionProps[];
}
export default class Select extends React.PureComponent<SelectProps, SelectStates> {
    static displayName: 'Select';
    static propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        filterable: PropTypes.Requireable<boolean>;
        options: PropTypes.Requireable<any[]>;
    };
    static defaultProps: {};
    static Option: typeof Option;
    search: JSearch;
    options: any[];
    constructor(props: SelectProps);
    componentDidMount(): void;
    renderOptions: () => void;
    render(): JSX.Element;
}
