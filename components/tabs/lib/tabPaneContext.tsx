import { createContext, Context } from 'react';

export interface ContextState {
  tabKey?: number;
}

const TabPaneContext: Context<ContextState> = createContext({});

export default TabPaneContext;
