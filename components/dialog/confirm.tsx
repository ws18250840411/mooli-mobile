import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Dialog, { DialogProps, BODY_LOCK_CLASS } from './dialog';

export interface ConfirmProps extends DialogProps {
  beforeClose?: (action: string, done: () => void) => void;
  closeOnAction?: boolean;
}

export default function confirm(props: ConfirmProps) {
  const container = document.createDocumentFragment();
  document.body.appendChild(container);

  function close() {
    ReactDOM.unmountComponentAtNode(container);
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
    if (props.lock) document.body.classList.remove(BODY_LOCK_CLASS);
  }

  function Component(): React.ReactElement {
    const {
      visible = true,
      closeOnAction = true,
      beforeClose,
      callback,
      closeOnClickMask,
      confirmLoading,
      onConfirm,
      onCancel,
      ...rest
    } = props;
    const [show, setShow] = useState(visible);
    const [loading, setLoading] = useState(false);
    const handleClosed = () => {
      if (callback) callback('onConfirm');
    };
    const handleClose = (
      action: string,
      e: React.SyntheticEvent<Element, Event>,
    ) => {
      if (beforeClose) {
        setLoading(true);
        beforeClose(action, () => {
          setLoading(false);
          if (closeOnAction) {
            setShow(false);
          }
          if (action === 'onConfirm') {
            onConfirm && onConfirm(e);
          }
          if (action === 'onCancel') {
            onCancel && onCancel(e);
          }
        });
      } else {
        if (closeOnAction) {
          setShow(false);
        }
        if (action === 'onConfirm') {
          onConfirm && onConfirm(e);
        }
        if (action === 'onCancel') {
          onCancel && onCancel(e);
        }
      }
    };
    return (
      <Dialog
        visible={show}
        confirmLoading={loading}
        onConfirm={(e) => handleClose('onConfirm', e)}
        onCancel={(e) => handleClose('onCancel', e)}
        onClosed={handleClosed}
        maskProps={{
          onClick: () => {
            closeOnClickMask && setShow(false);
          },
        }}
        {...rest}
      />
    );
  }

  ReactDOM.render(<Component />, container as unknown as Element);

  return { close };
}
