import PropTypes from 'prop-types';
import * as React from 'react';
import FormItem from './form-item';
export declare type FormValue = Record<string, any>;
export declare type TriggerType = 'change' | 'blur' | 'submit';
export declare type ValueChangeCallback = (fromValue: FormValue) => void;
export interface FormProps {
    validateFirst?: boolean;
    scrollToError?: boolean;
    validateTrigger?: TriggerType;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onSubmit?: (values: any) => void;
    onFailed?: (values: any) => void;
    onValuesChange?: (values: any, pass?: boolean) => void;
}
export interface FormStates {
    formError: Record<string, any>;
    validatingFields: Record<string, boolean>;
    formValue: FormValue;
}
export interface ValidatingValuesType {
    optional?: boolean;
    name: string;
    value: string;
    isValidate: boolean;
}
export default class Form extends React.PureComponent<FormProps, FormStates> {
    static Item: typeof FormItem;
    static propTypes: {
        scrollToError: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        scrollToError: boolean;
        validateFirst: boolean;
        validateTrigger: string;
    };
    fields: FormItem[];
    validatingValues: {
        [key: string]: ValidatingValuesType;
    };
    constructor(props: FormProps, context?: any);
    componentDidUpdate(prevProps: Readonly<FormProps>): void;
    getNameByChildren(children: any): any;
    getFormContext(this: Form): {
        form: Form;
    };
    getFormValue(): FormValue;
    getValue(name: string): any;
    getFieldByName(name: string): FormItem | null;
    getFieldByNames(names: string): FormItem[];
    getValues(): FormValue;
    setValue(name: string, value: any, cb?: ValueChangeCallback | undefined): void;
    setValues(obj?: FormValue, cb?: ValueChangeCallback): void;
    addField(field: FormItem): void;
    removeField(field: FormItem): void;
    removeFieldByName(name: string): void;
    removeFields(names: string | string[]): void;
    setStateByName(key: string, value: any, name?: string): void;
    remoteStateByName(key: string, name?: string): void;
    hasError(name: string): boolean;
    getError(name: string): any;
    cleanError(name: string): void;
    setError(name: string, message: any): void;
    cleanErrors(): void;
    setErrors(errors: Record<string, any>): void;
    isDisableValidatorField(name: string): any;
    isFieldValidating(name: string): boolean;
    getFieldsByNames(names?: string | string[]): FormItem[];
    getRuleMessage(value: any, rule: {
        message: any;
    }): any;
    getValidatingFields(name: string): boolean;
    getValidatingOptional(name: string): boolean;
    getMessageFields(name: string): any;
    resetValidation(name: string): void;
    scrollToField(name: string, options?: object): void;
    runSyncRule(value: any, rule: {
        required: any;
        pattern: {
            test: (arg0: any) => any;
        };
    }): boolean;
    runValidator(value: any, rule: {
        validator: (arg0: any, arg1: any) => any;
    }): Promise<unknown>;
    runRules(rules: any[], name: string): any;
    validateSeq(names: string | string[]): Promise<void>;
    validateFields(names: string | string[]): Promise<void>;
    validateField(name: string, rules?: undefined): Promise<void>;
    validate(name?: any): Promise<void>;
    otherValidateField(name: string, rules: any): Promise<void>;
    otherValidateValues(): void;
    runOtherRules(rules: any[], name: string): any;
    submit(): void;
    handleSubmit: (e: React.FormEvent) => void;
    render(): JSX.Element;
}
