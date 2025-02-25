import * as React from "react";
import Form from "../form";

export interface IFormContext {
	form: Form;
}

export default React.createContext<IFormContext>({ form: {} as Form });

