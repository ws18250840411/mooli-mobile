import React, { createRef, RefObject } from 'react';
import ReactDOM from 'react-dom';
import extend from 'lodash/extend';
import { getUniqueId, isObject } from '../utils';
import Toast, {
  Type,
  ToastProps,
  Position,
  prefixCls,
  DEFAULT_POSITION,
} from './toast';

type TContainer = { [key in Position]: HTMLElement | null };
interface TRoom {
  [propName: string]: {
    position: Position;
    container: DocumentFragment;
    toastRef: RefObject<Toast>;
  };
}

const toastContainer: TContainer = {
  top: null,
  bottom: null,
  center: null,
};

const toastKeyRoom: TRoom | {} = {};

const defaultOptions: ToastProps = {
  duration: 2000,
  forbidClick: false,
  closeOnClick: false,
};

let currentOptions = extend({}, defaultOptions);
let defaultOptionsMap: Record<string, ToastProps | null> = {};

function renderToast(props: ToastProps) {
  const { position = DEFAULT_POSITION, single = true } = props;
  const container = document.createDocumentFragment();
  const posClass = `${prefixCls}--${position}`;
  const toastRef = createRef<Toast>();
  const nKey = getUniqueId();

  if (single) {
    for (const key in toastKeyRoom) {
      if (Object.prototype.hasOwnProperty.call(toastKeyRoom, key)) {
        const { toastRef } = toastKeyRoom[key];
        if (toastRef) {
          if (toastRef.current) {
            toastRef.current.handleSingle();
            toastRef.current.handleClose();
          }
          delete toastKeyRoom[nKey];
        }
      }
    }
  }

  // 通过nKey唯一键值对保存当前对象
  toastKeyRoom[nKey] = {
    position,
    container,
    toastRef,
  };

  // 创建Container通知类容器
  if (toastContainer[position] === null) {
    const divElement: HTMLElement = document.createElement('div');
    divElement.classList.add(`${prefixCls}`, posClass);
    document.body.appendChild(divElement);
    toastContainer[position] = divElement;
  }
  // 将DOM插入到Container容器
  (toastContainer[position] as HTMLElement).appendChild(container);
  // 将Notification组件挂载到Container

  ReactDOM.render(
    <Toast
      {...props}
      ref={toastRef}
      onExited={() => {
        setTimeout(() => {
          // 销毁Container容器
          if (
            toastContainer[position] &&
            (toastContainer[position] as HTMLElement).childNodes.length === 0
          ) {
            document.body.removeChild(toastContainer[position] as HTMLElement);
            toastContainer[position] = null;
          }
          // 删除KeyRoom
          delete toastKeyRoom[nKey];
          // React组件树上销毁Notification
          ReactDOM.unmountComponentAtNode(container as unknown as Element);
        }, 0);
      }}
    />,
    container as unknown as Element,
  );
}

function parseOptions(message: string | ToastProps) {
  if (isObject(message)) {
    return message;
  }
  return { message };
}

function ToastInstance(options: string | ToastProps) {
  const parsedOptions = parseOptions(options);
  const config: ToastProps = extend(
    {},
    currentOptions,
    defaultOptionsMap[parsedOptions.type || currentOptions.type!],
    parsedOptions,
  );
  return renderToast(config);
}

function setDefaultOptions(options: ToastProps): void;
function setDefaultOptions(type: Type, options: ToastProps): void;
function setDefaultOptions(type: Type | ToastProps, options?: any) {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = options;
  } else {
    extend(currentOptions, type);
  }
}

const createMethod = (type: Type) => (options: string | ToastProps) =>
  ToastInstance(extend({ type }, parseOptions(options)));

// 方法
ToastInstance.setDefaultOptions = setDefaultOptions;
ToastInstance.resetDefaultOptions = (type?: Type) => {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = null;
  } else {
    currentOptions = extend({}, defaultOptions);
    defaultOptionsMap = {};
  }
};

ToastInstance.loading = createMethod('loading');
ToastInstance.success = createMethod('success');
ToastInstance.fail = createMethod('fail');
ToastInstance.clear = () => {
  Object.keys(toastKeyRoom).forEach((nKey) => {
    const { toastRef } = toastKeyRoom[nKey];
    if (toastRef.current) {
      toastRef.current.handleClose();
    }
    delete toastKeyRoom[nKey];
  });
};

export default ToastInstance;
