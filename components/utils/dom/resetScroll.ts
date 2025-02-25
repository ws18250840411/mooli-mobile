
import { isIOS } from '../system';
import { getRootScrollTop, setRootScrollTop } from './scroll';

export function resetScroll() {
  if (isIOS()) {
    setRootScrollTop(getRootScrollTop());
  }
}
