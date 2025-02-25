var MIN_DISTANCE = 10;
export function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
}
export function getPosition(event) {
  if ('touches' in event) {
    var _event$touches$ = event.touches[0],
      pageX = _event$touches$.pageX,
      pageY = _event$touches$.pageY;
    return {
      x: pageX,
      y: pageY
    };
  }
  var screenX = event.screenX,
    screenY = event.screenY;
  return {
    x: screenX,
    y: screenY
  };
}