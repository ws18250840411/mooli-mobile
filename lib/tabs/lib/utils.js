"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollLeftTo = scrollLeftTo;
var _utils = require("../../utils");
var scrollLeftRafId;
function scrollLeftTo(scroller, to, duration, type) {
  (0, _utils.cancelRaf)(scrollLeftRafId);
  var scrollType = type || 'scrollLeft';
  var count = 0;
  // @ts-ignore
  var from = scroller[scrollType];
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);
  function animate() {
    // @ts-ignore
    scroller[scrollType] += (to - from) / frames;
    if (++count < frames) {
      scrollLeftRafId = (0, _utils.raf)(animate);
    }
  }
  animate();
}