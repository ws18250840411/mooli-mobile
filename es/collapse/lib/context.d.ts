import { Context } from 'react';
export interface CollapseContextState {
    value?: any;
    accordion?: boolean;
    border?: boolean;
    onSwitch?: Function;
}
declare const CollapseContext: Context<CollapseContextState>;
export default CollapseContext;
