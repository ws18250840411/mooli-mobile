"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Trigger = void 0;
exports.feedbackToPlacement = feedbackToPlacement;
var _react = _interopRequireDefault(require("react"));
var _getPosition2 = _interopRequireDefault(require("./lib/getPosition"));
var _utils = require("./lib/utils");
var _popup = _interopRequireDefault(require("../popup"));
var _portal = _interopRequireDefault(require("../portal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
function feedbackToPlacement(feedback) {
  var map = {
    center_top_center_bottom: 'top',
    left_top_left_bottom: 'top-left',
    right_top_right_bottom: 'top-right',
    center_bottom_center_top: 'bottom',
    left_bottom_left_top: 'bottom-left',
    right_bottom_right_top: 'bottom-right',
    left_center_right_center: 'left',
    left_top_right_top: 'left-top',
    left_bottom_right_bottom: 'left-bottom',
    right_center_left_center: 'right',
    right_top_left_top: 'right-top',
    right_bottom_left_bottom: 'right-bottom'
  };
  // @ts-ignore
  return map[feedback.at.join('_') + '_' + feedback.my.join('_')];
}
var Trigger = exports.Trigger = /*#__PURE__*/function (_React$Component) {
  _inherits(Trigger, _React$Component);
  var _super = _createSuper(Trigger);
  function Trigger(props) {
    var _this;
    _classCallCheck(this, Trigger);
    _this = _super.call(this, props);
    _this.state = {
      popupVisible: _this.props.defaultPopupVisible
    };
    _this.delayTimer = null;
    _this.onOutsideClickToHide = function (event) {
      var target = event.target;
      var triggerNode = _this.getTriggerNode();
      var popupRootNode = _this.popupInstance && _this.popupInstance.getRootDOM();
      if (!(0, _utils.contains)(triggerNode, target) && !(0, _utils.contains)(popupRootNode, target)) {
        _this.hide();
      }
    };
    _this.isFocusToShow = function () {
      return _this.checkToShow(['focus']);
    };
    _this.isBlurToHide = function () {
      return _this.checkToHide(['focus', 'blur']);
    };
    _this.isWindowResizeToHide = function () {
      return _this.checkToHide(['resize']);
    };
    _this.onMouseEnter = function () {
      _this.delaySetPopupVisible(true);
    };
    _this.onMouseLeave = function () {
      _this.delaySetPopupVisible(false);
    };
    _this.onFocus = function () {
      _this.delaySetPopupVisible(true);
    };
    _this.onBlur = function () {
      _this.delaySetPopupVisible(false);
    };
    _this.onContextMenuClose = function () {
      _this.hide();
    };
    _this.state = {
      popupVisible: false,
      mounted: props.container || null
    };
    _this.triggerRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }
  _createClass(Trigger, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.togglePopupCloseEvents();
      if (!this.state.mounted) {
        this.setState({
          mounted: document.body
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.togglePopupCloseEvents();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearDelayTimer();
      this.clearOutsideHandler();
    }
  }, {
    key: "togglePopupCloseEvents",
    value: function togglePopupCloseEvents() {
      var _this2 = this;
      var _this$props = this.props,
        getDocument = _this$props.getDocument,
        outsideHideEventName = _this$props.outsideHideEventName;
      var popupVisible = this.state.popupVisible;
      if (popupVisible) {
        var currentDocument = getDocument();
        // 点击popup元素之外都需要隐藏popup
        if (!this.clickOutsideHandler && (this.isMouseDownToHide() || this.isClickToHide() || this.isContextMenuToShow())) {
          if (Array.isArray(outsideHideEventName)) {
            var cancelHandlers = [];
            outsideHideEventName.forEach(function (name) {
              cancelHandlers.push((0, _utils.listen)(currentDocument, name, _this2.onOutsideClickToHide));
            });
            this.clickOutsideHandler = function () {
              cancelHandlers.forEach(function (cancel) {
                return cancel();
              });
            };
          } else {
            this.clickOutsideHandler = (0, _utils.listen)(currentDocument, outsideHideEventName, this.onOutsideClickToHide);
          }
        }
        // 滚动或者窗口失焦/重置等都需要隐藏popup
        if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
          this.contextMenuOutsideHandler1 = (0, _utils.listen)(currentDocument, 'scroll', this.onContextMenuClose);
        }
        if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
          this.contextMenuOutsideHandler2 = (0, _utils.listen)(window, 'blur', this.onContextMenuClose);
        }
        if (!this.windowResizeHandler && this.isWindowResizeToHide()) {
          this.windowResizeHandler = (0, _utils.listen)(window, 'resize', this.hide.bind(this));
        }
      } else {
        this.clearOutsideHandler();
      }
    }
  }, {
    key: "getTriggerNode",
    value: function getTriggerNode() {
      return this.triggerRef.current || null;
    }
  }, {
    key: "getPopupNode",
    value: function getPopupNode() {
      return this.popupInstance && this.popupInstance.getPopupDOM();
    }
  }, {
    key: "getComponentNode",
    value: function getComponentNode() {
      return this.triggerRef.current || null;
    }
  }, {
    key: "clearOutsideHandler",
    value: function clearOutsideHandler() {
      if (this.clickOutsideHandler) {
        this.clickOutsideHandler();
        this.clickOutsideHandler = null;
      }
      if (this.contextMenuOutsideHandler1) {
        this.contextMenuOutsideHandler1();
        this.contextMenuOutsideHandler1 = null;
      }
      if (this.contextMenuOutsideHandler2) {
        this.contextMenuOutsideHandler2();
        this.contextMenuOutsideHandler2 = null;
      }
      if (this.touchOutsideHandler) {
        this.touchOutsideHandler();
        this.touchOutsideHandler = null;
      }
      if (this.windowScrollHandler) {
        this.windowScrollHandler();
        this.windowScrollHandler = null;
      }
      if (this.windowResizeHandler) {
        this.windowResizeHandler();
        this.windowResizeHandler = null;
      }
    }
  }, {
    key: "_setPopupVisible",
    value: function _setPopupVisible(popupVisible) {
      var _a, _b;
      if (this.props.popupVisible === undefined) {
        this.setState({
          popupVisible: popupVisible
        });
      }
      (_b = (_a = this.props).onPopupVisibleChange) === null || _b === void 0 ? void 0 : _b.call(_a, popupVisible);
    }
  }, {
    key: "show",
    value: function show() {
      this.delaySetPopupVisible(true);
    }
  }, {
    key: "hide",
    value: function hide() {
      this.delaySetPopupVisible(false);
    }
  }, {
    key: "clearDelayTimer",
    value: function clearDelayTimer() {
      if (this.delayTimer) {
        clearTimeout(this.delayTimer);
        this.delayTimer = null;
      }
    }
  }, {
    key: "getDelayTime",
    value: function getDelayTime() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'show';
      var delay = this.props.delay;
      if (delay && typeof delay !== 'number') {
        return Math.abs(delay[action]);
      }
      return Math.abs(delay);
    }
  }, {
    key: "delaySetPopupVisible",
    value: function delaySetPopupVisible(visible) {
      var _this3 = this;
      if (this.state.popupVisible === visible) {
        return;
      }
      this._setPopupVisible(visible);
      this.clearDelayTimer();
      this.clearOutsideHandler();
      var delay = this.getDelayTime(visible ? 'show' : 'hide');
      if (delay) {
        this.delayTimer = setTimeout(function () {
          _this3.delayTimer = null;
          _this3._setPopupVisible(visible);
        }, delay);
      } else {
        this._setPopupVisible(visible);
      }
    }
    // 检查是否显示
  }, {
    key: "checkToShow",
    value: function checkToShow(actions) {
      var _this$props2 = this.props,
        action = _this$props2.action,
        showAction = _this$props2.showAction;
      var action1 = Array.isArray(action) ? action : [action];
      var showAction1 = Array.isArray(showAction) ? showAction : [showAction];
      var s = [].concat(_toConsumableArray(action1), _toConsumableArray(showAction1));
      for (var i = 0; i < actions.length; i++) {
        if (s.indexOf(actions[i]) !== -1) return true;
      }
      return false;
    }
    // 检查是否隐藏
  }, {
    key: "checkToHide",
    value: function checkToHide(actions) {
      var _this$props3 = this.props,
        action = _this$props3.action,
        hideAction = _this$props3.hideAction;
      var action1 = Array.isArray(action) ? action : [action];
      var hideAction1 = Array.isArray(hideAction) ? hideAction : [hideAction];
      var s = [].concat(_toConsumableArray(action1), _toConsumableArray(hideAction1));
      for (var i = 0; i < actions.length; i++) {
        if (s.indexOf(actions[i]) !== -1) return true;
      }
      return false;
    }
  }, {
    key: "isContextMenuToShow",
    value: function isContextMenuToShow() {
      return this.checkToShow(['contextMenu']);
    }
  }, {
    key: "isMouseDownToShow",
    value: function isMouseDownToShow() {
      return this.checkToShow(['mouseDown']);
    }
  }, {
    key: "isMouseDownToHide",
    value: function isMouseDownToHide() {
      return this.checkToHide(['mouseDown']);
    }
  }, {
    key: "isClickToShow",
    value: function isClickToShow() {
      return this.checkToShow(['click']);
    }
  }, {
    key: "isClickToHide",
    value: function isClickToHide() {
      return this.checkToHide(['click']);
    }
  }, {
    key: "isMouseEnterToShow",
    value: function isMouseEnterToShow() {
      return this.checkToShow(['hover', 'mouseEnter']);
    }
  }, {
    key: "isMouseLeaveToHide",
    value: function isMouseLeaveToHide() {
      return this.checkToHide(['hover', 'mouseLeave']);
    }
  }, {
    key: "onContextMenu",
    value: function onContextMenu(e) {
      e.preventDefault();
      this.delaySetPopupVisible(true);
    }
  }, {
    key: "onTriggerClick",
    value: function onTriggerClick() {
      var nextVisible = !this.state.popupVisible;
      if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
        this.delaySetPopupVisible(nextVisible);
      }
    }
  }, {
    key: "onTriggerMouseDown",
    value: function onTriggerMouseDown() {
      var nextVisible = !this.state.popupVisible;
      if (this.isMouseDownToHide() && !nextVisible || nextVisible && this.isMouseDownToShow()) {
        this.delaySetPopupVisible(nextVisible);
      }
    }
  }, {
    key: "removeClassNames",
    value: function removeClassNames(popupNode) {
      var prefixCls = this.props.prefixCls;
      ["".concat(prefixCls, "-placement-top"), "".concat(prefixCls, "-placement-topLeft"), "".concat(prefixCls, "-placement-topRight"), "".concat(prefixCls, "-placement-bottom"), "".concat(prefixCls, "-placement-bottomLeft"), "".concat(prefixCls, "-placement-bottomRight"), "".concat(prefixCls, "-placement-left"), "".concat(prefixCls, "-placement-leftTop"), "".concat(prefixCls, "-placement-leftBottom"), "".concat(prefixCls, "-placement-right"), "".concat(prefixCls, "-placement-rightTop"), "".concat(prefixCls, "-placement-rightBottom")].forEach(_utils.removeClass.bind(null, popupNode));
    }
  }, {
    key: "addPlacementClassName",
    value: function addPlacementClassName(popupNode, feedback) {
      var prefixCls = this.props.prefixCls;
      this.removeClassNames(popupNode);
      (0, _utils.addClass)(popupNode, "".concat(prefixCls, "-placement-").concat(feedbackToPlacement(feedback)));
    }
    // 设置popup位置
  }, {
    key: "setPopupPosition",
    value: function setPopupPosition(popupRootNode) {
      var _this$props4 = this.props,
        placement = _this$props4.placement,
        offset = _this$props4.offset,
        aequilate = _this$props4.aequilate;
      var triggerNode = this.getTriggerNode();
      var _getPosition = (0, _getPosition2.default)(triggerNode, popupRootNode, {
          placement: placement,
          offset: offset
        }),
        positon = _getPosition.positon,
        feedback = _getPosition.feedback;
      this.addPlacementClassName(popupRootNode, feedback);
      if (aequilate) popupRootNode.style.width = positon.width + 'px';
      popupRootNode.style.left = positon.left + 'px';
      popupRootNode.style.top = positon.top + 'px';
    }
  }, {
    key: "updatePopupPosition",
    value: function updatePopupPosition() {
      var node = this.getPopupNode();
      node && this.setPopupPosition(node);
    }
    // 创建popup组件
  }, {
    key: "getPopupComponent",
    value: function getPopupComponent() {
      var _this4 = this;
      var _this$props5 = this.props,
        popup = _this$props5.popup,
        prefixCls = _this$props5.prefixCls,
        popupClassName = _this$props5.popupClassName,
        popupMaskClassName = _this$props5.popupMaskClassName,
        popupProps = _this$props5.popupProps,
        popupMaskProps = _this$props5.popupMaskProps,
        popupTransition = _this$props5.popupTransition,
        popupMaskTransition = _this$props5.popupMaskTransition,
        forceRender = _this$props5.forceRender,
        mask = _this$props5.mask,
        disableMask = _this$props5.disableMask,
        maskClosable = _this$props5.maskClosable,
        popupStyle = _this$props5.popupStyle,
        popupMaskStyle = _this$props5.popupMaskStyle,
        destroyPopupOnHide = _this$props5.destroyPopupOnHide,
        zIndex = _this$props5.zIndex,
        popupRootClassName = _this$props5.popupRootClassName,
        popupRootStyle = _this$props5.popupRootStyle,
        onBeforeShow = _this$props5.onBeforeShow,
        onAfterShow = _this$props5.onAfterShow,
        onBeforeHide = _this$props5.onBeforeHide,
        onAfterHide = _this$props5.onAfterHide;
      var popupVisible = this.state.popupVisible;
      var newPopupStyle = Object.assign({}, popupStyle);
      var newPopupMaskStyle = Object.assign({}, popupMaskStyle);
      if (zIndex !== null) {
        newPopupStyle.zIndex = zIndex;
        newPopupMaskStyle.zIndex = zIndex;
      }
      return /*#__PURE__*/_react.default.createElement(_popup.default, Object.assign({
        ref: function ref(node) {
          return _this4.popupInstance = node;
        },
        prefixCls: prefixCls,
        destroy: destroyPopupOnHide,
        style: newPopupStyle,
        className: popupClassName,
        maskClassName: popupMaskClassName,
        maskStyle: newPopupMaskStyle,
        mask: mask,
        disableMask: disableMask,
        rootClassName: popupRootClassName,
        rootStyle: popupRootStyle,
        forceRender: forceRender
      }, popupProps, {
        fixed: false,
        visible: popupVisible,
        transition: Object.assign(Object.assign({}, popupTransition), {
          onEnter: function onEnter(dom, appearing) {
            var _a;
            onBeforeShow === null || onBeforeShow === void 0 ? void 0 : onBeforeShow(dom);
            _this4.setPopupPosition(dom);
            (_a = popupTransition === null || popupTransition === void 0 ? void 0 : popupTransition.onEnter) === null || _a === void 0 ? void 0 : _a.call(popupTransition, dom, appearing);
          },
          onEntered: function onEntered(dom, appearing) {
            var _a;
            (_a = popupTransition === null || popupTransition === void 0 ? void 0 : popupTransition.onEntered) === null || _a === void 0 ? void 0 : _a.call(popupTransition, dom, appearing);
            onAfterShow === null || onAfterShow === void 0 ? void 0 : onAfterShow(dom);
          },
          onExit: function onExit(dom) {
            var _a;
            onBeforeHide === null || onBeforeHide === void 0 ? void 0 : onBeforeHide(dom);
            (_a = popupTransition === null || popupTransition === void 0 ? void 0 : popupTransition.onExit) === null || _a === void 0 ? void 0 : _a.call(popupTransition, dom);
          },
          onExited: function onExited(dom) {
            var _a;
            onAfterHide === null || onAfterHide === void 0 ? void 0 : onAfterHide(dom);
            (_a = popupTransition === null || popupTransition === void 0 ? void 0 : popupTransition.onExit) === null || _a === void 0 ? void 0 : _a.call(popupTransition, dom);
          }
        }),
        onMouseEnter: function onMouseEnter(e) {
          var _a;
          _this4.clearDelayTimer();
          (_a = popupProps === null || popupProps === void 0 ? void 0 : popupProps.onMouseEnter) === null || _a === void 0 ? void 0 : _a.call(popupProps, e);
        },
        onMouseLeave: function onMouseLeave(e) {
          var _a;
          if (_this4.isMouseLeaveToHide()) _this4.onMouseLeave();
          (_a = popupProps === null || popupProps === void 0 ? void 0 : popupProps.onMouseLeave) === null || _a === void 0 ? void 0 : _a.call(popupProps, e);
        },
        maskTransition: popupMaskTransition,
        maskProps: Object.assign(Object.assign({}, popupMaskProps), {
          onClick: function onClick(e) {
            var _a;
            if (maskClosable) _this4.hide();
            (_a = popupMaskProps === null || popupMaskProps === void 0 ? void 0 : popupMaskProps.onClick) === null || _a === void 0 ? void 0 : _a.call(popupMaskProps, e);
          },
          onMouseEnter: function onMouseEnter(e) {
            var _a;
            _this4.clearDelayTimer();
            (_a = popupMaskProps === null || popupMaskProps === void 0 ? void 0 : popupMaskProps.onMouseEnter) === null || _a === void 0 ? void 0 : _a.call(popupMaskProps, e);
          }
        })
      }), typeof popup === 'function' ? popup(this) : popup);
    }
    // 重新克隆新的child节点（绑定事件）
  }, {
    key: "genNewChildProps",
    value: function genNewChildProps(child) {
      var _this5 = this;
      var _this$props6 = this.props,
        checkDefaultPrevented = _this$props6.checkDefaultPrevented,
        disabled = _this$props6.disabled;
      var newChildProps = {};
      if (disabled) return newChildProps;
      // 右击鼠标事件
      if (this.isContextMenuToShow()) {
        newChildProps.onContextMenu = function (e) {
          if (child.props.onContextMenu) {
            child.props.onContextMenu(e);
          }
          if (checkDefaultPrevented && e.defaultPrevented) return;
          _this5.clearDelayTimer();
          _this5.onContextMenu(e);
        };
      }
      // 鼠标按下事件
      if (this.isMouseDownToShow() || this.isMouseDownToHide()) {
        newChildProps.onMouseDown = function (e) {
          if (child.props.onMouseDown) {
            child.props.onMouseDown(e);
          }
          if (checkDefaultPrevented && e.defaultPrevented) return;
          _this5.clearDelayTimer();
          _this5.onTriggerMouseDown();
        };
      }
      // 点击事件
      if (this.isClickToHide() || this.isClickToShow()) {
        newChildProps.onClick = function (e) {
          if (child.props.onClick) {
            child.props.onClick(e);
          }
          if (checkDefaultPrevented && e.defaultPrevented) return;
          _this5.clearDelayTimer();
          _this5.onTriggerClick();
        };
      }
      // 鼠标移入事件
      if (this.isMouseEnterToShow()) {
        newChildProps.onMouseEnter = function (e) {
          if (child.props.onMouseEnter) {
            child.props.onMouseEnter(e);
          }
          if (checkDefaultPrevented && e.defaultPrevented) return;
          _this5.clearDelayTimer();
          _this5.onMouseEnter();
        };
      }
      // 鼠标移出事件
      if (this.isMouseLeaveToHide()) {
        newChildProps.onMouseLeave = function (e) {
          if (child.props.onMouseLeave) {
            child.props.onMouseLeave(e);
          }
          if (checkDefaultPrevented && e.defaultPrevented) return;
          _this5.clearDelayTimer();
          _this5.onMouseLeave();
        };
      }
      // 聚焦事件
      if (this.isFocusToShow()) {
        newChildProps.onFocus = function (e) {
          if (child.props.onFocus) {
            child.props.onFocus(e);
          }
          if (checkDefaultPrevented && e.defaultPrevented) return;
          _this5.clearDelayTimer();
          _this5.onFocus();
        };
      }
      // 失焦事件
      if (this.isBlurToHide()) {
        newChildProps.onBlur = function (e) {
          if (child.props.onBlur) {
            child.props.onBlur(e);
          }
          if (checkDefaultPrevented && e.defaultPrevented) return;
          _this5.clearDelayTimer();
          _this5.onBlur();
        };
      }
      return newChildProps;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
        prefixCls = _this$props7.prefixCls,
        usePortal = _this$props7.usePortal,
        children = _this$props7.children;
      var child = _react.default.Children.only(children);
      var trigger = /*#__PURE__*/_react.default.cloneElement(child, this.genNewChildProps(child));
      var popup = this.getPopupComponent();
      if (usePortal) popup = /*#__PURE__*/_react.default.createElement(_portal.default, {
        container: this.state.mounted
      }, popup);
      return /*#__PURE__*/_react.default.createElement("span", {
        ref: this.triggerRef,
        className: "".concat(prefixCls, "-wrapper")
      }, trigger, popup);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      return {
        popupVisible: nextProps.disabled ? false : nextProps.popupVisible === undefined ? state.popupVisible : nextProps.popupVisible
      };
    }
  }]);
  return Trigger;
}(_react.default.Component);
Trigger.defaultProps = {
  prefixCls: 'mooli-trigger',
  placement: 'bottomLeft',
  offset: 0,
  defaultPopupVisible: false,
  action: ['click'],
  showAction: [],
  hideAction: [],
  outsideHideEventName: ['mousedown', 'click'],
  delay: 0,
  getDocument: function getDocument() {
    return window.document;
  },
  container: typeof document !== 'undefined' ? document.body : null,
  aequilate: false,
  mask: false,
  maskClosable: true,
  destroyPopupOnHide: true,
  popupProps: {},
  popupStyle: {},
  popupMaskStyle: {},
  checkDefaultPrevented: false,
  usePortal: true
};
var _default = exports.default = Trigger;