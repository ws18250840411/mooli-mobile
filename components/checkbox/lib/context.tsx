import { createContext, Context } from 'react';

export interface CheckboxContextState {
  value?: string | number | boolean;
  max?: number;
  iconSize?: string;
  disabled?: boolean;
  direction?: string;
  checkedColor?: string;
  onSwitch?: Function;
}

const CheckboxContext: Context<CheckboxContextState> = createContext({});

export default CheckboxContext;
