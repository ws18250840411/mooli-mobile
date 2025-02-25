"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderToContainer = renderToContainer;
var _reactDom = require("react-dom");
var _getContainer = require("./getContainer");
function renderToContainer(getContainer, node) {
  if (getContainer) {
    var container = (0, _getContainer.resolveContainer)(getContainer);
    return /*#__PURE__*/(0, _reactDom.createPortal)(node, container);
  }
  return node;
}