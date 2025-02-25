import * as React from 'react';
import PropTypes from 'prop-types';
export interface ProgressProps {
    color?: string;
    inactive?: boolean;
    pivotText?: string;
    textColor?: string;
    pivotColor?: string;
    trackColor?: string;
    strokeWidth?: number;
    cssTransition?: boolean;
    percentage: number;
    showPivot?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
interface ProgressStates {
    pivotWidth: number;
    progressWidth: number;
}
export default class Progress extends React.PureComponent<ProgressProps, ProgressStates> {
    static displayName: 'Progress';
    static propTypes: {
        color: PropTypes.Requireable<string>;
        inactive: PropTypes.Requireable<boolean>;
        pivotText: PropTypes.Requireable<string>;
        textColor: PropTypes.Requireable<string>;
        pivotColor: PropTypes.Requireable<string>;
        trackColor: PropTypes.Requireable<string>;
        strokeWidth: PropTypes.Requireable<string | number>;
        cssTransition: PropTypes.Requireable<boolean>;
        percentage: PropTypes.Requireable<string | number>;
        showPivot: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        cssTransition: boolean;
        showPivot: boolean;
    };
    protected wrapperRef: React.RefObject<any>;
    protected pivotRef: React.RefObject<any>;
    constructor(props: ProgressProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    update: () => void;
    render(): JSX.Element;
}
export {};
