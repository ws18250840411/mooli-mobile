function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import * as React from 'react';
import ReactDOM from 'react-dom';
import extend from 'lodash/extend';
import { isObject } from '../utils';
import ImagePreview from './image-preview';
var defaultOptions = {
  visible: true,
  lock: true,
  destroy: true
};
var currentOptions = extend({}, defaultOptions);
function renderImagePreview(props) {
  var container = document.createDocumentFragment();
  document.body.appendChild(container);
  function close() {
    ReactDOM.unmountComponentAtNode(container);
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }
  function Component() {
    var visible = props.visible,
      onClose = props.onClose,
      rest = __rest(props, ["visible", "onClose"]);
    var _React$useState = React.useState(visible),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      show = _React$useState2[0],
      setShow = _React$useState2[1];
    var handleClose = function handleClose() {
      setShow(false);
      if (onClose) onClose();
    };
    return /*#__PURE__*/React.createElement(ImagePreview, Object.assign({
      visible: show,
      onClose: handleClose
    }, rest));
  }
  ReactDOM.render( /*#__PURE__*/React.createElement(Component, null), container);
  return {
    close: close
  };
}
function parseOptions(message) {
  if (isObject(message)) {
    return message;
  }
  return {
    message: message
  };
}
function ImagePreviewInstance(options) {
  var parsedOptions = parseOptions(options);
  var config = extend({}, currentOptions, parsedOptions);
  return renderImagePreview(config);
}
ImagePreview.create = function (options) {
  return ImagePreviewInstance(options);
};
export default ImagePreview;