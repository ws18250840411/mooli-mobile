export function raf(fn: FrameRequestCallback): number {
  return window.requestAnimationFrame.call(window, fn);
}

export function doubleRaf(fn: FrameRequestCallback): void {
  raf(() => {
    raf(fn);
  });
}
