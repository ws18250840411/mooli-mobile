import * as React from "react";
import IndexBar from "./index-bar";

export interface IFormContext {
	indexBar: IndexBar;
  zIndex?: number | string;
  highlightColor?: string;
  sticky?: boolean;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default React.createContext<IFormContext>({ indexBar: {} as IndexBar });

