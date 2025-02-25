"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = confirm;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _dialog = _interopRequireWildcard(require("./dialog"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function confirm(props) {
  var container = document.createDocumentFragment();
  document.body.appendChild(container);
  function close() {
    _reactDom.default.unmountComponentAtNode(container);
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
    if (props.lock) document.body.classList.remove(_dialog.BODY_LOCK_CLASS);
  }
  function Component() {
    var _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      _props$closeOnAction = props.closeOnAction,
      closeOnAction = _props$closeOnAction === void 0 ? true : _props$closeOnAction,
      beforeClose = props.beforeClose,
      callback = props.callback,
      closeOnClickMask = props.closeOnClickMask,
      confirmLoading = props.confirmLoading,
      onConfirm = props.onConfirm,
      onCancel = props.onCancel,
      rest = __rest(props, ["visible", "closeOnAction", "beforeClose", "callback", "closeOnClickMask", "confirmLoading", "onConfirm", "onCancel"]);
    var _useState = (0, _react.useState)(visible),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];
    var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];
    var handleClosed = function handleClosed() {
      if (callback) callback('onConfirm');
    };
    var handleClose = function handleClose(action, e) {
      if (beforeClose) {
        setLoading(true);
        beforeClose(action, function () {
          setLoading(false);
          if (closeOnAction) {
            setShow(false);
          }
          if (action === 'onConfirm') {
            onConfirm && onConfirm(e);
          }
          if (action === 'onCancel') {
            onCancel && onCancel(e);
          }
        });
      } else {
        if (closeOnAction) {
          setShow(false);
        }
        if (action === 'onConfirm') {
          onConfirm && onConfirm(e);
        }
        if (action === 'onCancel') {
          onCancel && onCancel(e);
        }
      }
    };
    return /*#__PURE__*/_react.default.createElement(_dialog.default, Object.assign({
      visible: show,
      confirmLoading: loading,
      onConfirm: function onConfirm(e) {
        return handleClose('onConfirm', e);
      },
      onCancel: function onCancel(e) {
        return handleClose('onCancel', e);
      },
      onClosed: handleClosed,
      maskProps: {
        onClick: function onClick() {
          closeOnClickMask && setShow(false);
        }
      }
    }, rest));
  }
  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(Component, null), container);
  return {
    close: close
  };
}