import * as React from "react";
import FormItemContext from "./formItemContext";
export default (function () {
  var context = React.useContext(FormItemContext);
  return context.formItem;
});