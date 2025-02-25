import * as React from 'react';
import ReactDOM from 'react-dom';
import extend from 'lodash/extend';
import { isObject } from '../utils';
import ImagePreview, { ImagePreviewProps } from './image-preview';

const defaultOptions: ImagePreviewProps = {
  visible: true,
  lock: true,
  destroy: true,
};

let currentOptions = extend({}, defaultOptions);

function renderImagePreview(props: ImagePreviewProps) {
  const container = document.createDocumentFragment();
  document.body.appendChild(container);

  function close() {
    ReactDOM.unmountComponentAtNode(container);
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }

  function Component(): React.ReactElement {
    const { visible, onClose, ...rest } = props;
    const [show, setShow] = React.useState(visible);
    const handleClose = () => {
      setShow(false);
      if (onClose) onClose();
    };
    return <ImagePreview visible={show} onClose={handleClose} {...rest} />;
  }

  ReactDOM.render(<Component />, container as unknown as Element);
  return { close };
}

function parseOptions(message: string | ImagePreviewProps) {
  if (isObject(message)) {
    return message;
  }
  return { message };
}

function ImagePreviewInstance(options: string | ImagePreviewProps) {
  const parsedOptions = parseOptions(options);
  const config: ImagePreviewProps = extend({}, currentOptions, parsedOptions);
  return renderImagePreview(config);
}

ImagePreview.create = (options: ImagePreviewProps) =>
  ImagePreviewInstance(options);

export default ImagePreview;
