"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClientRect;
var _utils = require("./utils");
var _getClientAttribute = _interopRequireDefault(require("./getClientAttribute"));
var _getOffset = _interopRequireDefault(require("./getOffset"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function getClientRect(elem) {
  if (!elem) return;
  var width = (0, _getClientAttribute.default)(elem, 'Width');
  var height = (0, _getClientAttribute.default)(elem, 'Height');
  if (elem.nodeType === 9) {
    return {
      width: width,
      height: height,
      offset: {
        top: 0,
        left: 0
      }
    };
  }
  if ((0, _utils.isWindow)(elem)) {
    return {
      width: width,
      height: height,
      offset: {
        top: elem.scrollTop,
        left: elem.scrollLeft
      }
    };
  }
  return {
    width: width,
    height: height,
    offset: (0, _getOffset.default)(elem)
  };
}