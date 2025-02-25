"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetScroll = resetScroll;
var _system = require("../system");
var _scroll = require("./scroll");
function resetScroll() {
  if ((0, _system.isIOS)()) {
    (0, _scroll.setRootScrollTop)((0, _scroll.getRootScrollTop)());
  }
}