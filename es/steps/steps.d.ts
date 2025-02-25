import * as React from 'react';
import PropTypes from 'prop-types';
import Step from './step';
export interface StepsProps {
    current?: string | number;
    direction?: 'horizontal' | 'vertical';
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export default class Steps extends React.PureComponent<StepsProps> {
    static displayName: 'Steps';
    static propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static Step: typeof Step;
    static defaultProps: {};
    render(): JSX.Element;
}
