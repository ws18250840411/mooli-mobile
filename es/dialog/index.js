import extend from 'lodash/extend';
import alert from './alert';
import confirm from './confirm';
import Dialog from './dialog';
var defaultOptions = {
  closeOnClickMask: false,
  lock: true
};
var currentOptions = extend({}, defaultOptions);
var instance;
function promises(fun, props) {
  return new Promise(function (resolve, reject) {
    instance = fun(extend({}, currentOptions, props, {
      callback: function callback(action) {
        (action === 'onConfirm' ? resolve : reject)(action);
      }
    }));
  });
}
Dialog.setDefaultOptions = function (options) {
  extend(currentOptions, options);
};
Dialog.resetDefaultOptions = function () {
  currentOptions = extend({}, defaultOptions);
};
Dialog.alert = function (props) {
  return promises(alert, props);
};
Dialog.confirm = function (props) {
  return promises(confirm, props);
};
Dialog.close = function () {
  if (instance && instance.close) instance.close();
};
export default Dialog;