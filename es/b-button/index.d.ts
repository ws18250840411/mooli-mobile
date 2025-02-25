import * as React from 'react';
import PropTypes from 'prop-types';
import { ButtonProps } from '../button';
export interface BButtonProps extends Omit<ButtonProps, 'type'> {
    size?: 'large' | 'normal' | 'small';
    type?: 'yellow' | 'green' | 'orange' | 'white' | 'black';
    className?: string;
}
export default class BButton extends React.PureComponent<BButtonProps> {
    static displayName: 'BButton';
    static propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {};
    render(): JSX.Element;
}
