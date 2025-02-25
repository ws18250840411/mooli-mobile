"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _noticeBar = _interopRequireDefault(require("./notice-bar"));
var _noticeBarItem = _interopRequireDefault(require("./notice-bar-item"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_noticeBar.default.Item = _noticeBarItem.default;
var _default = exports.default = _noticeBar.default;