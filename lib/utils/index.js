"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addClass", {
  enumerable: true,
  get: function get() {
    return _class.addClass;
  }
});
Object.defineProperty(exports, "addUnit", {
  enumerable: true,
  get: function get() {
    return _unit.addUnit;
  }
});
Object.defineProperty(exports, "areEqualShallow", {
  enumerable: true,
  get: function get() {
    return _canUseDOM.areEqualShallow;
  }
});
Object.defineProperty(exports, "canUseDOM", {
  enumerable: true,
  get: function get() {
    return _canUseDOM.canUseDOM;
  }
});
Object.defineProperty(exports, "cancelRaf", {
  enumerable: true,
  get: function get() {
    return _raf.cancelRaf;
  }
});
Object.defineProperty(exports, "clone", {
  enumerable: true,
  get: function get() {
    return _clone.clone;
  }
});
Object.defineProperty(exports, "createClassName", {
  enumerable: true,
  get: function get() {
    return _createClassName.createClassName;
  }
});
Object.defineProperty(exports, "eventStore", {
  enumerable: true,
  get: function get() {
    return _event.eventStore;
  }
});
Object.defineProperty(exports, "extend", {
  enumerable: true,
  get: function get() {
    return _extend.extend;
  }
});
Object.defineProperty(exports, "formatNumber", {
  enumerable: true,
  get: function get() {
    return _number.formatNumber;
  }
});
Object.defineProperty(exports, "getElementTop", {
  enumerable: true,
  get: function get() {
    return _scroll.getElementTop;
  }
});
Object.defineProperty(exports, "getScrollTop", {
  enumerable: true,
  get: function get() {
    return _scroll.getScrollTop;
  }
});
Object.defineProperty(exports, "getScroller", {
  enumerable: true,
  get: function get() {
    return _scroll.getScroller;
  }
});
exports.getViewportSize = exports.getUniqueId = void 0;
Object.defineProperty(exports, "hasClass", {
  enumerable: true,
  get: function get() {
    return _class.hasClass;
  }
});
Object.defineProperty(exports, "inBrowser", {
  enumerable: true,
  get: function get() {
    return _system.inBrowser;
  }
});
Object.defineProperty(exports, "isAndroid", {
  enumerable: true,
  get: function get() {
    return _system.isAndroid;
  }
});
exports.isBoolean = isBoolean;
exports.isDate = isDate;
exports.isDef = isDef;
exports.isFunction = isFunction;
Object.defineProperty(exports, "isHidden", {
  enumerable: true,
  get: function get() {
    return _style.isHidden;
  }
});
Object.defineProperty(exports, "isIOS", {
  enumerable: true,
  get: function get() {
    return _system.isIOS;
  }
});
exports.isNaN = isNaN;
exports.isNull = isNull;
exports.isObject = isObject;
exports.isPromise = isPromise;
exports.isString = isString;
exports.isUndefined = isUndefined;
exports.isWindow = isWindow;
exports.noop = noop;
Object.defineProperty(exports, "raf", {
  enumerable: true,
  get: function get() {
    return _raf.raf;
  }
});
Object.defineProperty(exports, "range", {
  enumerable: true,
  get: function get() {
    return _unit.range;
  }
});
Object.defineProperty(exports, "removeClass", {
  enumerable: true,
  get: function get() {
    return _class.removeClass;
  }
});
Object.defineProperty(exports, "renderToContainer", {
  enumerable: true,
  get: function get() {
    return _renderToContainer.renderToContainer;
  }
});
Object.defineProperty(exports, "resetScroll", {
  enumerable: true,
  get: function get() {
    return _resetScroll.resetScroll;
  }
});
Object.defineProperty(exports, "resolveContainer", {
  enumerable: true,
  get: function get() {
    return _getContainer.resolveContainer;
  }
});
Object.defineProperty(exports, "unitToPx", {
  enumerable: true,
  get: function get() {
    return _unit.unitToPx;
  }
});
var _unit = require("./format/unit");
var _number = require("./format/number");
var _createClassName = require("./createClassName");
var _style = require("./dom/style");
var _raf = require("./format/raf");
var _canUseDOM = require("./dom/canUseDOM");
var _resetScroll = require("./dom/resetScroll");
var _event = require("./dom/event");
var _scroll = require("./dom/scroll");
var _class = require("./dom/class");
var _system = require("./system");
var _getContainer = require("./getContainer");
var _renderToContainer = require("./renderToContainer");
var _extend = require("./extend");
var _clone = require("./clone");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function noop() {}
;
var getUniqueId = exports.getUniqueId = function getUniqueId() {
  return parseInt(Math.random() * 1e9, 10).toString(36);
};
var getViewportSize = exports.getViewportSize = function getViewportSize() {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  };
};
function isFunction(val) {
  return typeof val === 'function';
}
function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
function isDate(val) {
  return Object.prototype.toString.call(val) === '[object Date]' && !isNaN(val.getTime());
}
function isNaN(val) {
  if (Number.isNaN) {
    return Number.isNaN(val);
  }
  // eslint-disable-next-line no-self-compare
  return val !== val;
}
function isString(value) {
  return typeof value === 'string';
}
function isBoolean(value) {
  return typeof value === 'boolean';
}
function isNull(value) {
  return value === null;
}
function isUndefined(value) {
  return typeof value === 'undefined';
}
function isDef(val) {
  return val !== undefined && val !== null;
}
function isWindow(val) {
  return val === window;
}