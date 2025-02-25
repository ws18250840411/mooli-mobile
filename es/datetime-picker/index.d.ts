import * as React from 'react';
import PropTypes from 'prop-types';
import Picker, { PickerProps } from '../picker';
export interface DatetimePickerProps extends PickerProps {
    value?: any;
    type?: string;
    filter?: Function;
    columnsOrder?: any[];
    showToolbar?: boolean;
    formatter?: Function;
    minDate?: Date;
    maxDate?: Date;
    minHour?: number;
    maxHour?: number;
    minMinute?: number;
    maxMinute?: number;
    className?: string;
    style?: React.CSSProperties;
    onChange?: Function;
    onConfirm?: Function;
    onCancel?: Function;
}
interface DatetimePickerStates {
    innerValue: any;
}
export default class DatetimePicker extends React.PureComponent<DatetimePickerProps, DatetimePickerStates> {
    static displayName: 'DatePicker';
    static propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        type: string;
        showToolbar: boolean;
        minDate: Date;
        maxDate: Date;
        minHour: number;
        maxHour: number;
        minMinute: number;
        maxMinute: number;
        formatter: (_type: string, value: any) => any;
    };
    pickerRef: React.RefObject<any>;
    constructor(props: DatetimePickerProps);
    get ranges(): {
        type: string;
        range: any[];
    }[];
    get originColumns(): {
        type: string;
        values: any[];
    }[];
    get columns(): {
        values: any[];
    }[];
    getPicker(): any;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    updateDateTime: () => void;
    updateColumnValue: () => void;
    updateInnerValue: () => void;
    getBoundary: (type: string, value: {
        getFullYear: () => number;
        getMonth: () => number;
        getDate: () => number;
        getHours: () => number;
    }) => {
        [x: string]: any;
    };
    formatValue: (value: any) => string | Date | null;
    onChange: (picker: Picker) => void;
    onConfirm: () => void;
    render(): JSX.Element;
}
export {};
