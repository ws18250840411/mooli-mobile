import * as React from "react";
import IndexBar from "./index-bar";
export interface IFormContext {
    indexBar: IndexBar;
    zIndex?: number | string;
    highlightColor?: string;
    sticky?: boolean;
}
declare const _default: React.Context<IFormContext>;
export default _default;
