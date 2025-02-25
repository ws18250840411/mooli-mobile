"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extend = _interopRequireDefault(require("lodash/extend"));
var _alert = _interopRequireDefault(require("./alert"));
var _confirm = _interopRequireDefault(require("./confirm"));
var _dialog = _interopRequireDefault(require("./dialog"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultOptions = {
  closeOnClickMask: false,
  lock: true
};
var currentOptions = (0, _extend.default)({}, defaultOptions);
var instance;
function promises(fun, props) {
  return new Promise(function (resolve, reject) {
    instance = fun((0, _extend.default)({}, currentOptions, props, {
      callback: function callback(action) {
        (action === 'onConfirm' ? resolve : reject)(action);
      }
    }));
  });
}
_dialog.default.setDefaultOptions = function (options) {
  (0, _extend.default)(currentOptions, options);
};
_dialog.default.resetDefaultOptions = function () {
  currentOptions = (0, _extend.default)({}, defaultOptions);
};
_dialog.default.alert = function (props) {
  return promises(_alert.default, props);
};
_dialog.default.confirm = function (props) {
  return promises(_confirm.default, props);
};
_dialog.default.close = function () {
  if (instance && instance.close) instance.close();
};
var _default = exports.default = _dialog.default;