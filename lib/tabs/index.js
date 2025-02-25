"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tabs = _interopRequireDefault(require("./tabs"));
var _tabPane = _interopRequireDefault(require("./tab-pane"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_tabs.default.TabPane = _tabPane.default;
var _default = exports.default = _tabs.default;