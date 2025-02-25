import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import extend from 'lodash/extend';
import { getUniqueId, isObject } from '../utils';
import Toast, { prefixCls, DEFAULT_POSITION } from './toast';
var toastContainer = {
  top: null,
  bottom: null,
  center: null
};
var toastKeyRoom = {};
var defaultOptions = {
  duration: 2000,
  forbidClick: false,
  closeOnClick: false
};
var currentOptions = extend({}, defaultOptions);
var defaultOptionsMap = {};
function renderToast(props) {
  var _props$position = props.position,
    position = _props$position === void 0 ? DEFAULT_POSITION : _props$position,
    _props$single = props.single,
    single = _props$single === void 0 ? true : _props$single;
  var container = document.createDocumentFragment();
  var posClass = "".concat(prefixCls, "--").concat(position);
  var toastRef = /*#__PURE__*/createRef();
  var nKey = getUniqueId();
  if (single) {
    for (var key in toastKeyRoom) {
      if (Object.prototype.hasOwnProperty.call(toastKeyRoom, key)) {
        var _toastRef = toastKeyRoom[key].toastRef;
        if (_toastRef) {
          if (_toastRef.current) {
            _toastRef.current.handleSingle();
            _toastRef.current.handleClose();
          }
          delete toastKeyRoom[nKey];
        }
      }
    }
  }
  // 通过nKey唯一键值对保存当前对象
  toastKeyRoom[nKey] = {
    position: position,
    container: container,
    toastRef: toastRef
  };
  // 创建Container通知类容器
  if (toastContainer[position] === null) {
    var divElement = document.createElement('div');
    divElement.classList.add("".concat(prefixCls), posClass);
    document.body.appendChild(divElement);
    toastContainer[position] = divElement;
  }
  // 将DOM插入到Container容器
  toastContainer[position].appendChild(container);
  // 将Notification组件挂载到Container
  ReactDOM.render( /*#__PURE__*/React.createElement(Toast, Object.assign({}, props, {
    ref: toastRef,
    onExited: function onExited() {
      setTimeout(function () {
        // 销毁Container容器
        if (toastContainer[position] && toastContainer[position].childNodes.length === 0) {
          document.body.removeChild(toastContainer[position]);
          toastContainer[position] = null;
        }
        // 删除KeyRoom
        delete toastKeyRoom[nKey];
        // React组件树上销毁Notification
        ReactDOM.unmountComponentAtNode(container);
      }, 0);
    }
  })), container);
}
function parseOptions(message) {
  if (isObject(message)) {
    return message;
  }
  return {
    message: message
  };
}
function ToastInstance(options) {
  var parsedOptions = parseOptions(options);
  var config = extend({}, currentOptions, defaultOptionsMap[parsedOptions.type || currentOptions.type], parsedOptions);
  return renderToast(config);
}
function setDefaultOptions(type, options) {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = options;
  } else {
    extend(currentOptions, type);
  }
}
var createMethod = function createMethod(type) {
  return function (options) {
    return ToastInstance(extend({
      type: type
    }, parseOptions(options)));
  };
};
// 方法
ToastInstance.setDefaultOptions = setDefaultOptions;
ToastInstance.resetDefaultOptions = function (type) {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = null;
  } else {
    currentOptions = extend({}, defaultOptions);
    defaultOptionsMap = {};
  }
};
ToastInstance.loading = createMethod('loading');
ToastInstance.success = createMethod('success');
ToastInstance.fail = createMethod('fail');
ToastInstance.clear = function () {
  Object.keys(toastKeyRoom).forEach(function (nKey) {
    var toastRef = toastKeyRoom[nKey].toastRef;
    if (toastRef.current) {
      toastRef.current.handleClose();
    }
    delete toastKeyRoom[nKey];
  });
};
export default ToastInstance;