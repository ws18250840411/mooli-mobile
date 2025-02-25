import extend from 'lodash/extend';

import alert from './alert';
import confirm from './confirm';
import Dialog, { DialogAction, DialogProps } from './dialog';

const defaultOptions: DialogProps = {
  closeOnClickMask: false,
  lock: true,
};

let currentOptions = extend({}, defaultOptions);
let instance: any;

function promises(fun: any, props: DialogProps) {
  return new Promise((resolve, reject) => {
    instance = fun(
      extend({}, currentOptions, props, {
        callback: (action: DialogAction) => {
          (action === 'onConfirm' ? resolve : reject)(action);
        },
      }),
    );
  });
}

Dialog.setDefaultOptions = (options: DialogProps) => {
  extend(currentOptions, options);
};

Dialog.resetDefaultOptions = () => {
  currentOptions = extend({}, defaultOptions);
};

Dialog.alert = (props) => promises(alert, props);
Dialog.confirm = (props) => promises(confirm, props);
Dialog.close = () => {
  if (instance && instance.close) instance.close();
};

export default Dialog;
