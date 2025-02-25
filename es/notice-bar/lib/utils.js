export function raf(fn) {
  return window.requestAnimationFrame.call(window, fn);
}
export function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}