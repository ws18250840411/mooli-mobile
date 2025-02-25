"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = void 0;
/* eslint-disable func-name-matching */
function getError(action, xhr, method) {
  var msg;
  if (xhr.response) {
    msg = "".concat(xhr.response.error || xhr.response);
  } else if (xhr.responseText) {
    msg = "".concat(xhr.responseText);
  } else {
    msg = "fail to ".concat(method, " ").concat(action, " ").concat(xhr.status);
  }
  return new Error(msg);
}
function getBody(xhr) {
  var text = xhr.response;
  if (!text) {
    return text;
  }
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}
var fetch = exports.fetch = function fetch(option) {
  var action = option.action,
    _option$data = option.data,
    data = _option$data === void 0 ? {} : _option$data,
    filename = option.filename,
    file = option.file,
    _option$method = option.method,
    method = _option$method === void 0 ? 'GET' : _option$method,
    _option$withCredentia = option.withCredentials,
    withCredentials = _option$withCredentia === void 0 ? false : _option$withCredentia,
    _option$headers = option.headers,
    headers = _option$headers === void 0 ? {} : _option$headers,
    onLoadStart = option.onLoadStart,
    onProgress = option.onProgress,
    onSuccess = option.onSuccess,
    onError = option.onError;
  if (typeof XMLHttpRequest === 'undefined') {
    throw new Error('The current environment does not support uploading');
  }
  var xhr = new XMLHttpRequest();
  if (xhr.upload) {
    xhr.upload.onloadstart = function progress(e) {
      onLoadStart && onLoadStart(e);
    };
    xhr.upload.onprogress = function progress(e) {
      onProgress && onProgress(e);
    };
  }
  xhr.onerror = function error(e) {
    onError && onError(e);
  };
  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return onError && onError(getError(action, xhr, method));
    }
    onSuccess && onSuccess(getBody(xhr));
  };
  xhr.open(method, action, true);
  if (withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }
  Object.keys(headers).forEach(function (item) {
    if (headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item]);
    }
  });
  // Payload
  if (headers['Content-Type'] === 'application/json') {
    xhr.send(JSON.stringify(data));
  } else {
    var formData = new FormData();
    Object.keys(data).forEach(function (key) {
      formData.append(key, data[key]);
    });
    if (filename && file) {
      formData.append(filename, file, file.name);
    }
    xhr.send(formData);
  }
  return xhr;
};