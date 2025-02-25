"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _swiper = _interopRequireDefault(require("./swiper"));
var _swiperItem = _interopRequireDefault(require("./swiper-item"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_swiper.default.Item = _swiperItem.default;
var _default = exports.default = _swiper.default;