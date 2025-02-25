import * as React from 'react';
import PropTypes from 'prop-types';
export interface OptionProps {
    value: string;
    label?: string;
    disabled?: boolean;
    selected?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onPress?: (key: {
        label: OptionProps['label'];
        value: OptionProps['value'];
    }) => void;
}
export default class Option extends React.PureComponent<OptionProps> {
    static displayName: 'Option';
    static propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {};
    render(): JSX.Element;
}
