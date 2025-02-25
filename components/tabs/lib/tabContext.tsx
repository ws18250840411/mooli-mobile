import { createContext, Context } from 'react';

export interface ContextState {
  activeKey?: number;
  animated?: boolean;
}

const TabContext: Context<ContextState> = createContext({});

export default TabContext;
