function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import React, { Fragment } from 'react';
import classnames from 'classnames';
import Transition, { EXITED } from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';
export var Popup = /*#__PURE__*/function (_React$Component) {
  _inherits(Popup, _React$Component);
  var _super = _createSuper(Popup);
  function Popup(props) {
    var _this;
    _classCallCheck(this, Popup);
    _this = _super.call(this, props);
    _this.transitionStatus = EXITED;
    _this.inTransition = false;
    _this.inMaskTransition = false;
    _this.addEndListener = function (_, cb) {
      var _a;
      var transition = _this.props.transition;
      (_a = transition === null || transition === void 0 ? void 0 : transition.addEndListener) === null || _a === void 0 ? void 0 : _a.call(transition, _this.popupInstance.current, cb);
    };
    _this.rootInstance = /*#__PURE__*/React.createRef();
    _this.popupInstance = /*#__PURE__*/React.createRef();
    _this.maskInstance = /*#__PURE__*/React.createRef();
    return _this;
  }
  _createClass(Popup, [{
    key: "getRootDOM",
    value: function getRootDOM() {
      return this.rootInstance.current;
    }
  }, {
    key: "getPopupDOM",
    value: function getPopupDOM() {
      return this.popupInstance.current;
    }
  }, {
    key: "getMaskDOM",
    value: function getMaskDOM() {
      return this.maskInstance.current;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.forceRender || !(EXITED === this.transitionStatus && !nextProps.visible);
    }
  }, {
    key: "ShowPopup",
    value: function ShowPopup(node) {
      if (!node) return;
      node.style.display = '';
      // @ts-ignore
      delete node.__popupHide;
    }
  }, {
    key: "HidePopup",
    value: function HidePopup(node) {
      if (!node) return;
      node.style.display = 'none';
      // @ts-ignore
      node.__popupHide = true;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        lazy = _this$props.lazy,
        visible = _this$props.visible,
        mask = _this$props.mask;
      var rootElement = this.rootInstance.current;
      var popupElement = this.popupInstance.current;
      var maskElement = this.maskInstance.current;
      if (!visible && !lazy) {
        this.HidePopup(rootElement);
        this.HidePopup(popupElement);
        this.HidePopup(maskElement);
      }
      if (visible && !mask) {
        this.HidePopup(maskElement);
      }
    }
  }, {
    key: "onEnter",
    value: function onEnter(_ref, isMask, appearing) {
      var _onEnter = _ref.onEnter;
      var getPosition = this.props.getPosition;
      var rootElement = this.rootInstance.current;
      var popupElement = this.popupInstance.current;
      var maskElement = this.maskInstance.current;
      if (isMask) {
        this.inMaskTransition = true;
      } else {
        this.inTransition = true;
      }
      // @ts-ignore
      if (rootElement && rootElement.__popupHide) {
        this.ShowPopup(rootElement);
      }
      // @ts-ignore
      if (!isMask && popupElement && popupElement.__popupHide) {
        this.ShowPopup(popupElement);
      }
      // @ts-ignore
      if (isMask && maskElement && maskElement.__popupHide) {
        this.ShowPopup(maskElement);
      }
      if (!isMask && getPosition) {
        var pos = getPosition(popupElement);
        var transform = function transform(v) {
          return typeof v === 'number' ? "".concat(v, "px") : v;
        };
        if (pos) {
          if ('left' in pos) {
            popupElement.style.left = transform(pos.left);
          }
          if ('top' in pos) {
            popupElement.style.top = transform(pos.top);
          }
          if ('right' in pos) {
            popupElement.style.right = transform(pos.right);
          }
          if ('bottom' in pos) {
            popupElement.style.bottom = transform(pos.bottom);
          }
        }
      }
      if (_onEnter) {
        _onEnter(popupElement, appearing);
      }
    }
  }, {
    key: "onEntered",
    value: function onEntered(_ref2, isMask, appearing) {
      var _onEntered = _ref2.onEntered;
      var popupElement = this.popupInstance.current;
      if (isMask) {
        this.inMaskTransition = false;
      } else {
        this.inTransition = false;
      }
      if (_onEntered) {
        _onEntered(popupElement, appearing);
      }
    }
  }, {
    key: "onExit",
    value: function onExit(_ref3, isMask) {
      var _onExit = _ref3.onExit;
      var popupElement = this.popupInstance.current;
      if (isMask) {
        this.inMaskTransition = true;
      } else {
        this.inTransition = true;
      }
      if (_onExit) {
        _onExit(popupElement);
      }
    }
  }, {
    key: "onExited",
    value: function onExited(_ref4, isMask) {
      var _onExited = _ref4.onExited;
      var _this$props2 = this.props,
        destroy = _this$props2.destroy,
        visible = _this$props2.visible;
      var rootElement = this.rootInstance.current;
      var popupElement = this.popupInstance.current;
      var maskElement = this.maskInstance.current;
      if (isMask) {
        this.inMaskTransition = false;
      } else {
        this.inTransition = false;
      }
      if (!destroy) {
        if (!visible && !this.inMaskTransition && !this.inTransition && rootElement) {
          this.HidePopup(rootElement);
        }
        if (!isMask && popupElement) {
          this.HidePopup(popupElement);
        }
        if (isMask && maskElement) {
          this.HidePopup(maskElement);
        }
      }
      if (_onExited) {
        _onExited(popupElement);
      }
    }
  }, {
    key: "renderPopupMask",
    value: function renderPopupMask() {
      var _this$props3 = this.props,
        prefixCls = _this$props3.prefixCls,
        visible = _this$props3.visible,
        mask = _this$props3.mask,
        maskProps = _this$props3.maskProps,
        maskStyle = _this$props3.maskStyle,
        maskClassName = _this$props3.maskClassName,
        maskTransition = _this$props3.maskTransition,
        lazy = _this$props3.lazy,
        destroy = _this$props3.destroy,
        fixed = _this$props3.fixed,
        zIndex = _this$props3.zIndex,
        duration = _this$props3.duration,
        maskComponent = _this$props3.maskComponent;
      var MaskComponent = maskComponent;
      var classes = classnames(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-mask"), true), "".concat(prefixCls, "-mask-fixed"), fixed), maskProps.className, maskClassName);
      var TransitionComponent = maskTransition.classNames ? CSSTransition : Transition;
      var style2Use = {};
      if (duration) {
        style2Use.animationDuration = "".concat(duration, "s");
      }
      return /*#__PURE__*/React.createElement(TransitionComponent, Object.assign({
        enter: true,
        exit: true,
        appear: true,
        addEndListener: function addEndListener(_, cb) {
          return maskTransition.timeout === null && cb();
        }
      }, maskTransition, {
        in: mask && visible,
        onEnter: this.onEnter.bind(this, maskTransition, true),
        onEntered: this.onEntered.bind(this, maskTransition, true),
        onExit: this.onExit.bind(this, maskTransition, true),
        onExited: this.onExited.bind(this, maskTransition, true),
        unmountOnExit: destroy,
        mountOnEnter: lazy,
        nodeRef: this.maskInstance
      }), /*#__PURE__*/React.createElement(MaskComponent, Object.assign({}, maskProps, {
        ref: this.maskInstance,
        style: Object.assign(Object.assign(Object.assign(Object.assign({}, maskStyle), maskProps.style), style2Use), {
          zIndex: zIndex
        }),
        className: classes
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _a = this.props,
        style = _a.style,
        prefixCls = _a.prefixCls,
        className = _a.className,
        fixed = _a.fixed,
        zIndex = _a.zIndex,
        duration = _a.duration,
        visible = _a.visible,
        children = _a.children,
        lazy = _a.lazy,
        destroy = _a.destroy,
        icon = _a.icon,
        rootClassName = _a.rootClassName,
        rootStyle = _a.rootStyle,
        rootProps = _a.rootProps,
        rootComponent = _a.rootComponent,
        component = _a.component,
        transition = _a.transition,
        wrapContent = _a.wrapContent,
        disableMask = _a.disableMask,
        childProps = __rest(_a, ["style", "prefixCls", "className", "fixed", "zIndex", "duration", "visible", "children", "lazy", "destroy", "icon", "rootClassName", "rootStyle", "rootProps", "rootComponent", "component", "transition", "wrapContent", "disableMask"]);
      var RootComponent = rootComponent;
      var Component = component;
      delete childProps.mask;
      delete childProps.maskProps;
      delete childProps.maskStyle;
      delete childProps.maskClassName;
      delete childProps.maskComponent;
      delete childProps.maskTransition;
      delete childProps.getPosition;
      delete childProps.forceRender;
      var rootComponentProps = Object.assign(Object.assign({}, rootProps), {
        className: classnames("".concat(prefixCls, "-root"), rootClassName, rootProps.className),
        style: Object.assign(Object.assign(Object.assign({}, rootStyle), rootProps.style), {
          zIndex: zIndex
        })
      });
      if (RootComponent === Fragment) {
        rootComponentProps = {};
      }
      var classes = classnames(prefixCls, _defineProperty({}, "".concat(prefixCls, "-fixed"), fixed), className);
      var style2Use = {};
      if (duration) {
        style2Use.animationDuration = "".concat(duration, "s");
      }
      var TransitionComponent = transition.classNames ? CSSTransition : Transition;
      var popup = /*#__PURE__*/React.createElement(RootComponent, Object.assign({}, rootComponentProps, {
        ref: this.rootInstance
      }), !disableMask && this.renderPopupMask(), wrapContent( /*#__PURE__*/React.createElement(TransitionComponent, Object.assign({
        enter: true,
        exit: true,
        appear: true,
        addEndListener: function addEndListener(_, cb) {
          return transition.timeout === null && cb();
        }
      }, transition, {
        in: visible,
        onEnter: this.onEnter.bind(this, transition, false),
        onEntered: this.onEntered.bind(this, transition, false),
        onExit: this.onExit.bind(this, transition, false),
        onExited: this.onExited.bind(this, transition, false),
        unmountOnExit: destroy,
        mountOnEnter: lazy,
        nodeRef: this.popupInstance
      }), function (status) {
        _this2.transitionStatus = status;
        return /*#__PURE__*/React.createElement(Component, Object.assign({}, childProps, {
          ref: _this2.popupInstance,
          style: Object.assign(Object.assign({}, style2Use), style),
          className: classes
        }), typeof icon === 'function' ? icon() : icon, typeof children === 'function' ? children(status) : children);
      })));
      return /*#__PURE__*/React.createElement(Transition, {
        enter: true,
        exit: true,
        appear: true,
        addEndListener: function addEndListener() {
          return transition.addEndListener ? _this2.addEndListener : undefined;
        },
        timeout: transition.timeout,
        in: visible,
        unmountOnExit: destroy,
        mountOnEnter: lazy,
        nodeRef: this.rootInstance
      }, function () {
        return popup;
      });
    }
  }]);
  return Popup;
}(React.Component);
Popup.defaultProps = {
  prefixCls: 'base-popup',
  style: {},
  className: '',
  rootClassName: '',
  rootStyle: {},
  rootProps: {},
  visible: false,
  fixed: false,
  lazy: true,
  forceRender: false,
  transition: {
    timeout: 500
  },
  destroy: true,
  disableMask: false,
  duration: 0.3,
  mask: false,
  maskStyle: {},
  maskProps: {},
  maskClassName: '',
  maskTransition: {
    timeout: 500
  },
  component: 'div',
  maskComponent: 'div',
  rootComponent: 'div',
  wrapContent: function wrapContent(node) {
    return node;
  }
};
export default Popup;