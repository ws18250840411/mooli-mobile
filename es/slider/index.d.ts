import * as React from 'react';
import PropTypes from 'prop-types';
export interface SliderProps {
    value: any;
    step: number;
    min: number;
    max: number;
    disabled?: boolean;
    vertical?: boolean;
    range?: boolean;
    barHeight?: number;
    button?: React.ReactNode;
    buttonSize?: string;
    activeColor?: string;
    inactiveColor?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: Function;
    onDragStart?: Function;
    onDragEnd?: Function;
}
export default class Slider extends React.PureComponent<SliderProps> {
    static propTypes: {
        step: PropTypes.Requireable<number>;
    };
    static defaultProps: {
        value: number;
        step: number;
        min: number;
        max: number;
    };
    wrapperRef: React.RefObject<HTMLDivElement>;
    index: number;
    startValue: any;
    currentValue: any;
    dragStatus: string;
    constructor(props: SliderProps);
    get scope(): number;
    get buttonStyle(): {
        width?: undefined;
        height?: undefined;
    } | {
        width: string;
        height: string;
    };
    componentDidMount(): void;
    updateValue: (value: any) => void;
    isSameValue: (newValue: any, oldValue: any) => boolean;
    format: (value: number) => number;
    handleOverlap: (value: any[]) => any[];
    onTouchStart: () => void;
    onTouchMove: (event: any, position: any) => void;
    onTouchEnd: () => void;
    onClick: (event: any) => void;
    renderButton: () => JSX.Element;
    renderButtonGroup: () => JSX.Element;
    render(): JSX.Element;
}
