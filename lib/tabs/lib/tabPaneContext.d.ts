import { Context } from 'react';
export interface ContextState {
    tabKey?: number;
}
declare const TabPaneContext: Context<ContextState>;
export default TabPaneContext;
