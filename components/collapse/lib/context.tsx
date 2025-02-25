import { createContext, Context } from 'react';

export interface CollapseContextState {
  value?: any;
  accordion?: boolean;
  border?: boolean;
  onSwitch?: Function;
}

const CollapseContext: Context<CollapseContextState> = createContext({});

export default CollapseContext;
