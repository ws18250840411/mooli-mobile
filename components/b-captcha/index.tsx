import * as React from 'react';
import ReactDOM from 'react-dom';
import Toast from '../toast';
import BCaptcha, { BCaptchaProps } from './bcaptcha';
import { ajax } from './lib/fetch';

function renderBCaptcha(props: BCaptchaProps, callback: Function | undefined) {
  const container = document.createDocumentFragment();
  document.body.appendChild(container);

  function Component(): React.ReactElement {
    return <BCaptcha callback={callback} {...props} />;
  }
  ReactDOM.render(<Component />, container as unknown as Element);
}

function BCaptchaInstance(
  options: BCaptchaProps,
  callback: (err: boolean | Error, data: {}) => void,
) {
  const { action, phoneNumber, type = '1021' } = options;
  // 获取安全策略
  if (action.getStrategyFetchUrl && phoneNumber) {
    ajax({
      url: action.getStrategyFetchUrl,
      data: { phoneNumber, type },
      onSuccess: (res: any) => {
        if (res.success) {
          const { operationId, securityMethods = [] } = res.data;
          const safe = securityMethods.some((s: any) => s.method === 'image');
          if (safe) {
            renderBCaptcha({ ...options, operationId, phoneNumber }, callback);
          } else {
            callback(false, { operationId });
          }
        } else {
          callback(true, {});
          res.errMsg && Toast({ message: res.errMsg });
        }
      },
      onError: (e: any) => {
        callback(e, {});
      },
    });
  } else {
    callback(true, {});
  }
}

export default BCaptchaInstance;
