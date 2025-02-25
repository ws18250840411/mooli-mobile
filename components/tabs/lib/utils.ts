import { raf, cancelRaf } from '../../utils';

let scrollLeftRafId: number;
export function scrollLeftTo(
  scroller: HTMLElement,
  to: number,
  duration: number,
  type?: string
) {
  cancelRaf(scrollLeftRafId);
  let scrollType = type || 'scrollLeft'
  let count = 0;
  // @ts-ignore
  const from = scroller[scrollType];
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);

  function animate() {
    // @ts-ignore
    scroller[scrollType] += (to - from) / frames;
    if (++count < frames) {
      scrollLeftRafId = raf(animate);
    }
  }

  animate();
}
