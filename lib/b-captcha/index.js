"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _toast = _interopRequireDefault(require("../toast"));
var _bcaptcha = _interopRequireDefault(require("./bcaptcha"));
var _fetch = require("./lib/fetch");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function renderBCaptcha(props, callback) {
  var container = document.createDocumentFragment();
  document.body.appendChild(container);
  function Component() {
    return /*#__PURE__*/React.createElement(_bcaptcha.default, Object.assign({
      callback: callback
    }, props));
  }
  _reactDom.default.render( /*#__PURE__*/React.createElement(Component, null), container);
}
function BCaptchaInstance(options, callback) {
  var action = options.action,
    phoneNumber = options.phoneNumber,
    _options$type = options.type,
    type = _options$type === void 0 ? '1021' : _options$type;
  // 获取安全策略
  if (action.getStrategyFetchUrl && phoneNumber) {
    (0, _fetch.ajax)({
      url: action.getStrategyFetchUrl,
      data: {
        phoneNumber: phoneNumber,
        type: type
      },
      onSuccess: function onSuccess(res) {
        if (res.success) {
          var _res$data = res.data,
            operationId = _res$data.operationId,
            _res$data$securityMet = _res$data.securityMethods,
            securityMethods = _res$data$securityMet === void 0 ? [] : _res$data$securityMet;
          var safe = securityMethods.some(function (s) {
            return s.method === 'image';
          });
          if (safe) {
            renderBCaptcha(Object.assign(Object.assign({}, options), {
              operationId: operationId,
              phoneNumber: phoneNumber
            }), callback);
          } else {
            callback(false, {
              operationId: operationId
            });
          }
        } else {
          callback(true, {});
          res.errMsg && (0, _toast.default)({
            message: res.errMsg
          });
        }
      },
      onError: function onError(e) {
        callback(e, {});
      }
    });
  } else {
    callback(true, {});
  }
}
var _default = exports.default = BCaptchaInstance;