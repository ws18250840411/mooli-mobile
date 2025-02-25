import * as React from 'react';
import ReactDOM from 'react-dom';
import extend from 'lodash/extend';
import { isObject } from '../utils';
import Notify, { NotifyProps } from './notify';

const defaultOptions: NotifyProps = {
  visible: true,
  lock: true,
  destroy: true,
  duration: 2000,
};

let currentOptions = extend({}, defaultOptions);

function renderNotify(props: NotifyProps) {
  const container = document.createDocumentFragment();
  document.body.appendChild(container);

  function close() {
    ReactDOM.unmountComponentAtNode(container);
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }
  function Component(): React.ReactElement {
    const { visible, duration, ...rest } = props;
    const [show, setShow] = React.useState(visible);

    if (duration) setTimeout(() => setShow(false), duration);
    return <Notify visible={show} {...rest} />;
  }

  ReactDOM.render(<Component />, container as unknown as Element);
  return { close };
}

function parseOptions(message: string | NotifyProps) {
  if (isObject(message)) {
    return message;
  }
  return { message };
}

function NotifyInstance(options: string | NotifyProps) {
  const parsedOptions = parseOptions(options);
  const config: NotifyProps = extend({}, currentOptions, parsedOptions);
  return renderNotify(config);
}

Notify.setDefaultOptions = (options: NotifyProps) => {
  extend(currentOptions, options);
};

Notify.resetDefaultOptions = () => {
  currentOptions = extend({}, defaultOptions);
};

Notify.info = (options) => NotifyInstance({ type: 'info', ...options });
Notify.success = (options) => NotifyInstance({ type: 'success', ...options });
Notify.warning = (options) => NotifyInstance({ type: 'warning', ...options });
Notify.danger = (options) => NotifyInstance({ type: 'danger', ...options });

export default Notify;
