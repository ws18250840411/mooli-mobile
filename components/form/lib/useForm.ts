import * as React from "react";
import FormContext from "./formContext";

export default () => {
    const context = React.useContext(FormContext);
    return context.form;
};
