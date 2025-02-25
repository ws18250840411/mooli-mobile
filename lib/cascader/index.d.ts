import * as React from 'react';
import PropTypes from 'prop-types';
export interface CascaderProps {
    title?: string;
    value?: string | number;
    defaultValue?: string | number;
    fieldNames?: any;
    placeholder?: string;
    activeColor?: string;
    options?: [];
    closeable?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (options: any) => void;
    onClose?: Function;
    onInput?: Function;
    onFinish?: Function;
}
interface CascaderStates {
    tabs: any[];
    activeTab: number;
}
export default class Cascader extends React.PureComponent<CascaderProps, CascaderStates> {
    static displayName: 'Cascader';
    static propTypes: {
        title: PropTypes.Requireable<string>;
        fieldNames: PropTypes.Requireable<object>;
        placeholder: PropTypes.Requireable<string>;
        activeColor: PropTypes.Requireable<string>;
        lineColor: PropTypes.Requireable<string>;
        options: PropTypes.Requireable<any[]>;
        closeable: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        options: never[];
        closeable: boolean;
        placeholder: string;
    };
    state: CascaderStates;
    constructor(props: CascaderProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    get textKey(): any;
    get valueKey(): any;
    get childrenKey(): any;
    getSelectedOptionsByValue(options: any, value: string | number): any;
    updateTabs: () => void;
    onClose: () => void;
    onSelect: (option: {
        [x: string]: any;
    }, tabIndex: number) => void;
    renderHeader: () => JSX.Element;
    renderOptions: (options: any[], selectedOption: {
        [x: string]: any;
    }, tabIndex: any) => JSX.Element;
    renderTab: (item: {
        options: any;
        selectedOption: any;
    }, tabIndex: any) => JSX.Element;
    renderTabs: () => JSX.Element;
    render(): JSX.Element;
}
export {};
