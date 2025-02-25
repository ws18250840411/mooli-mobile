"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _extend = _interopRequireDefault(require("lodash/extend"));
var _utils = require("../utils");
var _toast = _interopRequireWildcard(require("./toast"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var currentOptions = (0, _extend.default)({}, defaultOptions);
var defaultOptionsMap = {};
function renderToast(props) {
  var _props$position = props.position,
    position = _props$position === void 0 ? _toast.DEFAULT_POSITION : _props$position,
    _props$single = props.single,
    single = _props$single === void 0 ? true : _props$single;
  var container = document.createDocumentFragment();
  var posClass = "".concat(_toast.prefixCls, "--").concat(position);
  var toastRef = /*#__PURE__*/(0, _react.createRef)();
  var nKey = (0, _utils.getUniqueId)();
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
    divElement.classList.add("".concat(_toast.prefixCls), posClass);
    document.body.appendChild(divElement);
    toastContainer[position] = divElement;
  }
  // 将DOM插入到Container容器
  toastContainer[position].appendChild(container);
  // 将Notification组件挂载到Container
  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_toast.default, Object.assign({}, props, {
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
        _reactDom.default.unmountComponentAtNode(container);
      }, 0);
    }
  })), container);
}
function parseOptions(message) {
  if ((0, _utils.isObject)(message)) {
    return message;
  }
  return {
    message: message
  };
}
function ToastInstance(options) {
  var parsedOptions = parseOptions(options);
  var config = (0, _extend.default)({}, currentOptions, defaultOptionsMap[parsedOptions.type || currentOptions.type], parsedOptions);
  return renderToast(config);
}
function setDefaultOptions(type, options) {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = options;
  } else {
    (0, _extend.default)(currentOptions, type);
  }
}
var createMethod = function createMethod(type) {
  return function (options) {
    return ToastInstance((0, _extend.default)({
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
    currentOptions = (0, _extend.default)({}, defaultOptions);
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
var _default = exports.default = ToastInstance;