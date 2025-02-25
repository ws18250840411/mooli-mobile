import { Context } from 'react';
export interface ContextState {
    activeKey?: number;
    animated?: boolean;
}
declare const TabContext: Context<ContextState>;
export default TabContext;
