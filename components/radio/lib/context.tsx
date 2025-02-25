import { createContext, Context } from 'react';

export interface RadioContextState {
  value?: string | number | boolean;
  name?: string;
  iconSize?: string;
  disabled?: boolean;
  direction?: string;
  checkedColor?: string;
  onSwitch?: Function;
}

const RadioContext: Context<RadioContextState> = createContext({});

export default RadioContext;
