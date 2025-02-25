import { Context } from 'react';
export interface RadioContextState {
    value?: string | number | boolean;
    name?: string;
    iconSize?: string;
    disabled?: boolean;
    direction?: string;
    checkedColor?: string;
    onSwitch?: Function;
}
declare const RadioContext: Context<RadioContextState>;
export default RadioContext;
