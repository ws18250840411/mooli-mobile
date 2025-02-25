import { raf, cancelRaf } from '../../utils';
var scrollLeftRafId;
export function scrollLeftTo(scroller, to, duration, type) {
  cancelRaf(scrollLeftRafId);
  var scrollType = type || 'scrollLeft';
  var count = 0;
  // @ts-ignore
  var from = scroller[scrollType];
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);
  function animate() {
    // @ts-ignore
    scroller[scrollType] += (to - from) / frames;
    if (++count < frames) {
      scrollLeftRafId = raf(animate);
    }
  }
  animate();
}