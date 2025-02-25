"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _cell = _interopRequireDefault(require("./cell"));
var _cellGroup = _interopRequireDefault(require("./cell-group"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_cell.default.Group = _cellGroup.default;
var _default = exports.default = _cell.default;