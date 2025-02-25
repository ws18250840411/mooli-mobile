import * as React from 'react';
import PropTypes from 'prop-types';
interface PickerColumnProps {
    valueKey: string;
    readonly?: boolean;
    allowHtml?: boolean;
    itemHeight: number;
    defaultIndex: number;
    swipeDuration: number;
    visibleItemCount: number;
    initialOptions: [];
    className?: string;
    style?: React.CSSProperties;
    onCollect?: Function;
    onChange?: Function;
}
interface PickerColumnStates {
    offset: number;
    options: any;
}
export declare class PickerColumn extends React.PureComponent<PickerColumnProps, PickerColumnStates> {
    static propTypes: {
        initialOptions: PropTypes.Requireable<any[]>;
        defaultIndex: PropTypes.Requireable<number>;
    };
    static defaultProps: {
        initialOptions: never[];
        defaultIndex: number;
    };
    private wrapper;
    private moving;
    private duration;
    private currentIndex;
    private startOffset;
    private transitionEndTrigger;
    private touchStartTime;
    private momentumOffset;
    constructor(props: PickerColumnProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    update: () => void;
    get baseOffset(): number;
    get count(): any;
    getValue: () => any;
    setValue: (value: any) => void;
    setOptions: (options: any) => void;
    isOptionDisabled: (option: {
        disabled: boolean;
    }) => boolean;
    adjustIndex(index: number): number | undefined;
    setIndex: (index: number, emitChange?: boolean | undefined) => void;
    momentum: (distance: number, duration: number) => void;
    stopMomentum: () => void;
    getOptionText: (option: {
        [x: string]: any;
    }) => any;
    genOptions: () => any;
    getIndexByOffset: (offset: number) => number;
    onTouchStart: () => void;
    onTouchMove: (_event: Event, position: {
        y: number;
    }) => void;
    onTouchEnd: () => void;
    onTransitionEnd: () => void;
    onClickItem: (index: number) => void;
    render(): JSX.Element;
}
export {};
