import * as React from 'react';
import ReactDOM from 'react-dom';
import Toast from '../toast';
import BCaptcha from './bcaptcha';
import { ajax } from './lib/fetch';
function renderBCaptcha(props, callback) {
  var container = document.createDocumentFragment();
  document.body.appendChild(container);
  function Component() {
    return /*#__PURE__*/React.createElement(BCaptcha, Object.assign({
      callback: callback
    }, props));
  }
  ReactDOM.render( /*#__PURE__*/React.createElement(Component, null), container);
}
function BCaptchaInstance(options, callback) {
  var action = options.action,
    phoneNumber = options.phoneNumber,
    _options$type = options.type,
    type = _options$type === void 0 ? '1021' : _options$type;
  // 获取安全策略
  if (action.getStrategyFetchUrl && phoneNumber) {
    ajax({
      url: action.getStrategyFetchUrl,
      data: {
        phoneNumber: phoneNumber,
        type: type
      },
      onSuccess: function onSuccess(res) {
        if (res.success) {
          var _res$data = res.data,
            operationId = _res$data.operationId,
            _res$data$securityMet = _res$data.securityMethods,
            securityMethods = _res$data$securityMet === void 0 ? [] : _res$data$securityMet;
          var safe = securityMethods.some(function (s) {
            return s.method === 'image';
          });
          if (safe) {
            renderBCaptcha(Object.assign(Object.assign({}, options), {
              operationId: operationId,
              phoneNumber: phoneNumber
            }), callback);
          } else {
            callback(false, {
              operationId: operationId
            });
          }
        } else {
          callback(true, {});
          res.errMsg && Toast({
            message: res.errMsg
          });
        }
      },
      onError: function onError(e) {
        callback(e, {});
      }
    });
  } else {
    callback(true, {});
  }
}
export default BCaptchaInstance;