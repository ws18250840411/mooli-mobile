import * as React from "react";
import FormContext from "./formContext";
export default (function () {
  var context = React.useContext(FormContext);
  return context.form;
});