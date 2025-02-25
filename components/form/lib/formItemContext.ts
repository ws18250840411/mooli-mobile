import * as React from "react";
import FormItem from "../form-item";

export interface IFormItemContext {
	formItem: FormItem;
}

export default React.createContext<IFormItemContext>({
	formItem: {} as FormItem,
});
