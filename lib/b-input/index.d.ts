import * as React from 'react';
import PropTypes from 'prop-types';
import { FieldProps } from '../field';
export interface BInputProps extends FieldProps {
    border?: boolean;
    animate?: boolean;
    showErrorMessage?: boolean;
    filterEmoji?: boolean;
    onFinish?: (v: string) => void;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    prefix?: React.ReactNode;
}
export default class BInput extends React.PureComponent<BInputProps> {
    static displayName: 'BInput';
    static propTypes: {
        border: PropTypes.Requireable<boolean>;
        animate: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        animate: boolean;
        border: boolean;
    };
    render(): JSX.Element;
}
