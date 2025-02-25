"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _icon = _interopRequireDefault(require("../icon"));
var _loading = _interopRequireDefault(require("../loading"));
var _image = _interopRequireDefault(require("../image"));
var _imagePreview = _interopRequireDefault(require("../image-preview"));
var _utils = require("../utils");
var _utils2 = require("./lib/utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var componentClassName = (0, _utils.createClassName)('uploader');
var getClassName = function getClassName(name) {
  return (0, _utils.createClassName)(componentClassName, name);
};
var Uploader = exports.default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Uploader, _React$PureComponent);
  var _super = _createSuper(Uploader);
  function Uploader(props) {
    var _this;
    _classCallCheck(this, Uploader);
    _this = _super.call(this, props);
    _this.resetInput = function () {
      if (_this.inputRef && _this.inputRef.current) {
        _this.inputRef.current.value = '';
      }
    };
    _this.deleteFile = function (file, index) {
      var onDelete = _this.props.onDelete;
      if (typeof onDelete === 'function') onDelete(file, _this.getDetail(index));
    };
    _this.afterRead = function (files, oversize) {
      var _this$props = _this.props,
        _this$props$maxSize = _this$props.maxSize,
        maxSize = _this$props$maxSize === void 0 ? Number.MAX_VALUE : _this$props$maxSize,
        onOversize = _this$props.onOversize,
        onAfterRead = _this$props.onAfterRead;
      _this.resetInput();
      var validFiles = files;
      if (oversize) {
        var oversizeFiles = files;
        if (Array.isArray(files)) {
          oversizeFiles = [];
          validFiles = [];
          files.forEach(function (item) {
            if (item.file) {
              if (item.file.size > maxSize) {
                oversizeFiles.push(item);
              } else {
                validFiles.push(item);
              }
            }
          });
        } else {
          validFiles = null;
        }
        if (typeof onOversize === 'function') {
          onOversize(oversizeFiles, _this.getDetail());
        }
      }
      var isValidFiles = Array.isArray(validFiles) ? Boolean(validFiles.length) : Boolean(validFiles);
      if (isValidFiles) {
        if (typeof onAfterRead === 'function') {
          onAfterRead(validFiles, _this.getDetail());
        }
      }
    };
    _this.readFile = function (files) {
      var _this$props2 = _this.props,
        _this$props2$maxSize = _this$props2.maxSize,
        maxSize = _this$props2$maxSize === void 0 ? Number.MAX_VALUE : _this$props2$maxSize,
        _this$props2$maxCount = _this$props2.maxCount,
        maxCount = _this$props2$maxCount === void 0 ? Number.MAX_VALUE : _this$props2$maxCount,
        _this$props2$fileList = _this$props2.fileList,
        fileList = _this$props2$fileList === void 0 ? [] : _this$props2$fileList,
        _this$props2$resultTy = _this$props2.resultType,
        resultType = _this$props2$resultTy === void 0 ? 'dataUrl' : _this$props2$resultTy;
      var oversize = (0, _utils2.isOversize)(files, maxSize);
      if (Array.isArray(files)) {
        var curMaxCount = maxCount - fileList.length;
        if (files.length > curMaxCount) {
          files = files.slice(0, curMaxCount);
        }
        Promise.all(files.map(function (file) {
          return (0, _utils2.fileReader)(file, resultType);
        })).then(function (contents) {
          var fileList = files.map(function (file, index) {
            var result = {
              file: file,
              status: '',
              message: ''
            };
            if (contents[index]) {
              result.content = contents[index];
            }
            return result;
          });
          _this.afterRead(fileList, oversize);
        });
      } else {
        (0, _utils2.fileReader)(files, resultType).then(function (content) {
          var result = {
            file: files,
            status: '',
            message: ''
          };
          if (content) {
            result.content = content;
          }
          _this.afterRead(result, oversize);
        });
      }
    };
    _this.onChange = function (event) {
      var _this$props3 = _this.props,
        disabled = _this$props3.disabled,
        onBeforeRead = _this$props3.onBeforeRead;
      var files = event.target.files;
      if (disabled || !files.length) return;
      files = files.length === 1 ? files[0] : [].slice.call(files);
      if (onBeforeRead) {
        var response = onBeforeRead(files, _this.getDetail());
        if (!response) {
          _this.resetInput();
          return;
        }
        if ((0, _utils.isPromise)(response)) {
          response.then(function (data) {
            if (data) {
              _this.readFile(data);
            } else {
              _this.readFile(files);
            }
          }).catch(_this.resetInput);
          return;
        }
      }
      _this.readFile(files);
    };
    _this.onDelete = function (file, index) {
      var _a;
      var onBeforeDelete = _this.props.onBeforeDelete;
      var beforeDelete = (_a = file.beforeDelete) !== null && _a !== void 0 ? _a : onBeforeDelete;
      if (beforeDelete) {
        var response = beforeDelete(file, _this.getDetail(index));
        if (!response) return;
        if ((0, _utils.isPromise)(response)) {
          response.then(function () {
            _this.deleteFile(file, index);
          }).catch(_utils.noop);
          return;
        }
      }
      _this.deleteFile(file, index);
    };
    _this.onPreviewImage = function (item) {
      var _this$props4 = _this.props,
        previewFullImage = _this$props4.previewFullImage,
        previewOptions = _this$props4.previewOptions,
        _this$props4$fileList = _this$props4.fileList,
        fileList = _this$props4$fileList === void 0 ? [] : _this$props4$fileList,
        onClosePreview = _this$props4.onClosePreview;
      if (!previewFullImage) return;
      var imageFiles = fileList.filter(function (item) {
        return (0, _utils2.isImageFile)(item);
      });
      var imageContents = imageFiles.map(function (item) {
        return item.content || item.url;
      });
      if (imageContents) {
        _this.imagePreview = _imagePreview.default.create(Object.assign({
          images: imageContents,
          // @ts-ignore
          initial: imageFiles.indexOf(item),
          onClose: function onClose() {
            if (typeof onClosePreview === 'function') onClosePreview();
          }
        }, previewOptions));
      }
    };
    _this.genPreviewItem = function (item, index) {
      var _a, _b, _c;
      var _this$props5 = _this.props,
        deletable = _this$props5.deletable,
        previewSize = _this$props5.previewSize,
        previewCover = _this$props5.previewCover,
        imageFit = _this$props5.imageFit,
        onClickPreview = _this$props5.onClickPreview;
      var deleteAble = (_a = item.deletable) !== null && _a !== void 0 ? _a : deletable;
      var showDelete = item.status !== 'uploading' && deleteAble;
      var curPreviewSize = (_b = item.previewSize) !== null && _b !== void 0 ? _b : previewSize;
      var curImageFit = (_c = item.imageFit) !== null && _c !== void 0 ? _c : imageFit;
      var IsImageFile = (0, _utils2.isImageFile)(item);
      var DeleteIcon = showDelete && ( /*#__PURE__*/React.createElement("div", {
        className: getClassName('preview-delete'),
        onClick: function onClick(event) {
          event.stopPropagation();
          _this.onDelete(item, index);
        }
      }, /*#__PURE__*/React.createElement(_icon.default, {
        name: "cross",
        className: getClassName('preview-delete-icon')
      })));
      var PreviewMask = function PreviewMask() {
        var status = item.status,
          message = item.message;
        if (status === 'uploading' || status === 'failed') {
          var MaskIcon = status === 'failed' ? ( /*#__PURE__*/React.createElement(_icon.default, {
            name: "close",
            className: getClassName('mask-icon')
          })) : ( /*#__PURE__*/React.createElement(_loading.default, {
            className: getClassName('loading')
          }));
          var showMessage = message && message !== '';
          return /*#__PURE__*/React.createElement("div", {
            className: getClassName('mask')
          }, MaskIcon, showMessage && ( /*#__PURE__*/React.createElement("div", {
            className: getClassName('mask-message')
          }, message)));
        }
        return null;
      };
      var PreviewCoverContent = previewCover && previewCover(Object.assign(Object.assign({}, item), {
        index: index
      }));
      var PreviewCover = PreviewCoverContent && ( /*#__PURE__*/React.createElement("div", {
        className: getClassName('preview-cover')
      }, PreviewCoverContent));
      var Preview = IsImageFile ? ( /*#__PURE__*/React.createElement(_image.default, {
        fit: curImageFit,
        src: item.content || item.url,
        width: String(curPreviewSize),
        height: String(curPreviewSize),
        className: getClassName('preview-image'),
        onClick: function onClick() {
          _this.onPreviewImage(item);
        }
      }, PreviewCover)) : ( /*#__PURE__*/React.createElement("div", {
        className: getClassName('file'),
        style: {
          width: _this.previewSizeWithUnit,
          height: _this.previewSizeWithUnit
        }
      }, /*#__PURE__*/React.createElement(_icon.default, {
        className: getClassName('file-icon'),
        name: "description"
      }), /*#__PURE__*/React.createElement("div", {
        className: getClassName('file-name') + ' mooli-ellipsis'
      }, item.file ? item.file.name : item.url), PreviewCover));
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: getClassName('preview'),
        onClick: function onClick() {
          if (typeof onClickPreview === 'function') onClickPreview(item, index);
        }
      }, Preview, PreviewMask(), DeleteIcon);
    };
    _this.genPreviewList = function () {
      if (_this.props.previewImage) {
        return _this.props.fileList && _this.props.fileList.map(_this.genPreviewItem);
      }
      return null;
    };
    _this.genUpload = function () {
      var _this$props6 = _this.props,
        _this$props6$fileList = _this$props6.fileList,
        fileList = _this$props6$fileList === void 0 ? [] : _this$props6$fileList,
        _this$props6$maxCount = _this$props6.maxCount,
        maxCount = _this$props6$maxCount === void 0 ? Number.MAX_VALUE : _this$props6$maxCount,
        showUpload = _this$props6.showUpload,
        previewSize = _this$props6.previewSize,
        accept = _this$props6.accept,
        disabled = _this$props6.disabled,
        multiple = _this$props6.multiple,
        uploadIcon = _this$props6.uploadIcon,
        uploadIconName = _this$props6.uploadIconName,
        uploadText = _this$props6.uploadText,
        children = _this$props6.children;
      if (fileList.length >= maxCount || !showUpload) {
        return;
      }
      var curStyle = {};
      if (previewSize) {
        var size = _this.previewSizeWithUnit;
        curStyle = {
          width: size,
          height: size
        };
      }
      var Input = /*#__PURE__*/React.createElement("input", {
        ref: _this.inputRef,
        type: "file",
        multiple: multiple,
        accept: accept,
        className: getClassName('input'),
        disabled: disabled,
        onChange: _this.onChange
      });
      if (children) {
        return /*#__PURE__*/React.createElement("div", {
          className: getClassName('input-wrapper'),
          key: "input-wrapper"
        }, children, Input);
      }
      return /*#__PURE__*/React.createElement("div", {
        className: getClassName('upload'),
        style: curStyle
      }, uploadIcon || ( /*#__PURE__*/React.createElement(_icon.default, {
        name: uploadIconName,
        className: getClassName('upload-icon')
      })), uploadText && ( /*#__PURE__*/React.createElement("span", {
        className: getClassName('upload-text')
      }, uploadText)), Input);
    };
    _this.inputRef = /*#__PURE__*/React.createRef();
    return _this;
  }
  _createClass(Uploader, [{
    key: "previewSizeWithUnit",
    get: function get() {
      return (0, _utils.addUnit)(this.props.previewSize);
    }
  }, {
    key: "getDetail",
    value: function getDetail() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.fileList && this.props.fileList.length;
      return {
        name: this.props.name,
        index: index
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
        disabled = _this$props7.disabled,
        className = _this$props7.className;
      var wrapperClassName = (0, _utils.createClassName)(componentClassName, 'wrapper');
      var className2Use = (0, _classnames2.default)(wrapperClassName, className, _defineProperty({}, "".concat(componentClassName, "--disabled"), disabled));
      return /*#__PURE__*/React.createElement("div", {
        className: componentClassName
      }, /*#__PURE__*/React.createElement("div", {
        className: className2Use
      }, this.genPreviewList(), this.genUpload()));
    }
  }]);
  return Uploader;
}(React.PureComponent);
Uploader.propTypes = {
  name: _propTypes.default.string
};
Uploader.defaultProps = {
  name: '',
  accept: 'image/*',
  fileList: [],
  deletable: true,
  showUpload: true,
  previewImage: true,
  previewFullImage: true,
  imageFit: 'cover',
  resultType: 'dataUrl',
  uploadIconName: 'photograph',
  maxSize: Number.MAX_VALUE,
  maxCount: Number.MAX_VALUE
};