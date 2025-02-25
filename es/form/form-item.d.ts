import * as React from 'react';
import PropTypes from 'prop-types';
import { FormProps, FormValue, TriggerType } from './form';
interface Rule {
    require?: boolean;
    optional?: boolean;
    message?: string | Function;
    validator?: Function;
    pattern?: RegExp;
    trigger?: TriggerType | TriggerType[];
    formatter?: Function;
}
export interface FormItemProps {
    name: string;
    disableValidator?: boolean;
    validateTrigger?: TriggerType;
    required?: boolean;
    initialValue?: any;
    rules?: Rule[] | any;
    labelWidth?: number;
    labelAlign?: string;
    inputAlign?: string;
    error?: boolean;
    hidden?: boolean;
    errorMessage?: string;
    errorMessageAlign?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (value: any, e?: React.SyntheticEvent) => void;
    onFocus?: (e: React.FocusEvent) => void;
    onBlur?: (e: React.FocusEvent) => void;
}
export declare type ValueChangeCallback = (fromValue: FormValue) => void;
export default class FormItem extends React.PureComponent<FormItemProps> {
    static contextType: React.Context<import("./lib/formContext").IFormContext>;
    static propTypes: {
        name: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        disableValidator: boolean;
    };
    curRef: React.RefObject<HTMLDivElement>;
    constructor(props: FormItemProps, context?: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    validateValue(): any;
    getValue(): any;
    setValue(value: any, callback?: ValueChangeCallback): void;
    getForm(): any;
    getFormItemContext(this: FormItem): {
        FormItem: FormItem;
    };
    getFormProp<T extends keyof FormProps>(prop: T, defaultValue: Required<FormProps>[T]): Required<FormProps>[T];
    getProp<T extends keyof FormItemProps>(prop: T, defaultValue?: Required<FormItemProps>[T]): any;
    cleanError(): any;
    hasError(): any;
    getError(): any;
    setError(message: any): any;
    triggerValidate(trigger: TriggerType): void;
    validate(rules?: Rule[] | undefined): any;
    otherValidate(): any;
    handleChange: (value: any, callback?: (() => void) | undefined) => void;
    handleFocus: (callback?: (() => void) | undefined) => void;
    handleBlur: (callback?: (() => void) | undefined) => void;
    render(): JSX.Element;
}
export {};
