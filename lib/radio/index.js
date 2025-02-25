"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _radio = _interopRequireDefault(require("./radio"));
var _radioGroup = _interopRequireDefault(require("./radio-group"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_radio.default.Group = _radioGroup.default;
var _default = exports.default = _radio.default;