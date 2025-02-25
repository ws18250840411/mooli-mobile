import * as React from 'react';
import PropTypes from 'prop-types';
export interface StepProps {
    index?: number;
    title?: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    status?: 'wait' | 'process' | 'finish';
    className?: string;
    style?: React.CSSProperties;
}
export default class Step extends React.PureComponent<StepProps> {
    static displayName: 'Step';
    static propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {};
    render(): JSX.Element;
}
