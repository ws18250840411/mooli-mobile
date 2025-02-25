import * as React from "react";
import FormItemContext from "./formItemContext";

export default () => {
    const context = React.useContext(FormItemContext);
    return context.formItem;
};
