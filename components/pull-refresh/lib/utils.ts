export enum DIRECTION {
  UP = -0b01,
  DOWN = 0b01,
}

function isOverflowScrollable(element: HTMLElement): boolean {
  const overflowType: string = getComputedStyle(element).overflowY;
  if (element === document.scrollingElement && overflowType === 'visible') {
    return true;
  }

  if (overflowType !== 'scroll' && overflowType !== 'auto') {
    return false;
  }

  return true;
}

function isScrollable(element: HTMLElement, direction: DIRECTION): boolean {
  if (!isOverflowScrollable(element)) {
    return false;
  }

  if (direction === DIRECTION.DOWN) {
    const bottomScroll = element.scrollTop + element.clientHeight;
    return bottomScroll < element.scrollHeight;
  }

  if (direction === DIRECTION.UP) {
    return element.scrollTop > 0;
  }

  throw new Error('unsupported direction');
}

export function isTreeScrollable(element: HTMLElement, direction: DIRECTION): boolean {
  if (isScrollable(element, direction)) {
    return true;
  }

  if (element.parentElement == null) {
    return false;
  }

  return isTreeScrollable(element.parentElement, direction);
}
