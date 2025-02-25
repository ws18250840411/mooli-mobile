import * as React from 'react';
import PropTypes from 'prop-types';
export interface BaseSharedProps {
    title?: string;
    description?: string | React.ReactNode;
    loading?: boolean;
    itemHeight?: number;
    showToolbar?: boolean;
    visibleItemCount?: number;
    cancelButtonText?: string;
    confirmButtonText?: string;
}
export interface PickerProps extends BaseSharedProps {
    readonly?: boolean;
    allowHtml?: boolean;
    swipeDuration?: number;
    defaultIndex?: number;
    columnsTop?: React.ReactNode;
    columns?: any[];
    columnsBottom?: React.ReactNode;
    option?: React.ReactNode;
    confirm?: React.ReactNode;
    cancel?: React.ReactNode;
    toolbarPosition?: 'top' | 'bottom';
    valueKey?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onConfirm?: Function;
    onCancel?: Function;
    onChange?: Function;
}
export default class Picker extends React.PureComponent<PickerProps> {
    static propTypes: {
        readonly: PropTypes.Requireable<boolean>;
        defaultIndex: PropTypes.Requireable<number>;
        columns: PropTypes.Requireable<any[]>;
        toolbarPosition: PropTypes.Requireable<string>;
        valueKey: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        defaultIndex: number;
        columns: never[];
        allowHtml: boolean;
        visibleItemCount: number;
        swipeDuration: number;
        toolbarPosition: string;
        valueKey: string;
        cancelButtonText: string;
        confirmButtonText: string;
    };
    private collect;
    constructor(props: PickerProps);
    get itemPxHeight(): number;
    get dataType(): "object" | "text" | "cascade";
    setCollect: (instance: any, destroy?: boolean | undefined) => void;
    format: () => any;
    formatCascade: () => any;
    getColumn(index: number): any;
    getColumnValue: (index: number) => any;
    getColumnValues: (index: number) => any;
    getColumnIndex: (columnIndex: number) => any;
    getValues: () => any[];
    getIndexes: () => any[];
    setValues: (values: any[]) => void;
    setIndexes: (indexes: any[]) => void;
    setColumnValue: (index: number, value: any) => void;
    setColumnIndex: (columnIndex: number, optionIndex: any) => void;
    setColumnValues(index: number, options: any[]): void;
    onCascadeChange: (columnIndex: number) => void;
    change: (columnIndex: number) => void;
    confirm: () => void;
    cancel: () => void;
    emit: (event: string) => void;
    genLoading: () => JSX.Element | null;
    genTitle: () => JSX.Element | null;
    genCancel: () => JSX.Element | null;
    genConfirm: () => JSX.Element | null;
    genToolbar: () => JSX.Element | null;
    genDescription: () => JSX.Element | null;
    genColumns: () => JSX.Element;
    genColumnItems: () => any;
    render(): JSX.Element;
}
