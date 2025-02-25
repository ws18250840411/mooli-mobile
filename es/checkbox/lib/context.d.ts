import { Context } from 'react';
export interface CheckboxContextState {
    value?: string | number | boolean;
    max?: number;
    iconSize?: string;
    disabled?: boolean;
    direction?: string;
    checkedColor?: string;
    onSwitch?: Function;
}
declare const CheckboxContext: Context<CheckboxContextState>;
export default CheckboxContext;
