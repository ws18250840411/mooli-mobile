function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
/* eslint-disable no-undef */
import * as React from 'react';
function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}
var Camera = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Camera, _React$PureComponent);
  var _super = _createSuper(Camera);
  function Camera(props) {
    var _this;
    _classCallCheck(this, Camera);
    _this = _super.call(this, props);
    _this.canvas = null;
    _this.ctx = null;
    _this.unmounted = false;
    _this.state = {
      hasUserMedia: false
    };
    return _this;
  }
  _createClass(Camera, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var state = this.state,
        props = this.props;
      if (!hasGetUserMedia()) {
        props.onUserMediaError('getUserMedia not supported');
        return;
      }
      if (!state.hasUserMedia) {
        this.requestUserMedia();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps) {
      var props = this.props;
      if (!hasGetUserMedia()) {
        props.onUserMediaError('getUserMedia not supported');
        return;
      }
      var audioConstraintsChanged = JSON.stringify(nextProps.audioConstraints) !== JSON.stringify(props.audioConstraints);
      var videoConstraintsChanged = JSON.stringify(nextProps.videoConstraints) !== JSON.stringify(props.videoConstraints);
      var shotWidthChanged = nextProps.shotWidth !== props.shotWidth;
      var shotHeightChanged = nextProps.shotHeight !== props.shotHeight;
      if (videoConstraintsChanged || shotWidthChanged || shotHeightChanged) {
        this.canvas = null;
        this.ctx = null;
      }
      if (audioConstraintsChanged || videoConstraintsChanged) {
        // this.stopAndCleanup();
        this.requestUserMedia();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
      this.stopAndCleanup();
    }
  }, {
    key: "stopAndCleanup",
    value: function stopAndCleanup() {
      var state = this.state;
      if (state.hasUserMedia) {
        Camera.stopMediaStream(this.stream);
        if (state.src) {
          window.URL.revokeObjectURL(state.src);
        }
      }
    }
  }, {
    key: "getScreenshot",
    value: function getScreenshot(screenshotDimensions) {
      var state = this.state,
        props = this.props;
      if (!state.hasUserMedia) return null;
      var canvas = this.getCanvas(screenshotDimensions);
      return canvas && canvas.toDataURL(props.shotFormat, props.shotQuality);
    }
  }, {
    key: "getCanvas",
    value: function getCanvas(screenshotDimensions) {
      var state = this.state,
        props = this.props;
      if (!this.video) {
        return null;
      }
      if (!state.hasUserMedia || !this.video.videoHeight) return null;
      if (!this.ctx) {
        var canvasWidth = this.video.videoWidth;
        var canvasHeight = this.video.videoHeight;
        if (!this.props.shotSourceSize) {
          var aspectRatio = canvasWidth / canvasHeight;
          canvasWidth = props.shotWidth || this.video.clientWidth;
          canvasHeight = canvasWidth / aspectRatio;
          if (props.shotHeight && canvasHeight < props.shotHeight) {
            canvasHeight = props.shotHeight;
            canvasWidth = canvasHeight * aspectRatio;
          }
        }
        this.canvas = document.createElement('canvas');
        this.canvas.width = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvasWidth;
        this.canvas.height = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvasHeight;
        this.ctx = this.canvas.getContext('2d');
      }
      var ctx = this.ctx,
        canvas = this.canvas;
      if (ctx && canvas) {
        if (props.mirrored) {
          ctx.translate(canvas.width, 0);
          ctx.scale(-1, 1);
        }
        ctx.imageSmoothingEnabled = props.imageSmoothing;
        ctx.drawImage(this.video, 0, 0, (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvas.width, (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvas.height);
        if (props.mirrored) {
          ctx.scale(-1, 1);
          ctx.translate(-canvas.width, 0);
        }
      }
      return canvas;
    }
  }, {
    key: "requestUserMedia",
    value: function requestUserMedia() {
      var _this2 = this;
      var props = this.props;
      var sourceSelected = function sourceSelected(audioConstraints, videoConstraints) {
        var constraints = {
          video: typeof videoConstraints !== 'undefined' ? videoConstraints : true
        };
        if (props.audio) {
          constraints.audio = typeof audioConstraints !== 'undefined' ? audioConstraints : true;
        }
        navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
          if (_this2.unmounted) {
            Camera.stopMediaStream(stream);
          } else {
            _this2.handleUserMedia(null, stream);
          }
        }).catch(function (e) {
          _this2.handleUserMedia(e);
        });
      };
      if ('mediaDevices' in navigator) {
        sourceSelected(props.audioConstraints, props.videoConstraints);
      } else {
        var optionalSource = function optionalSource(id) {
          return (
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            {
              optional: [{
                sourceId: id
              }]
            }
          );
        };
        var constraintToSourceId = function constraintToSourceId(constraint) {
          var deviceId = constraint.deviceId;
          if (typeof deviceId === 'string') {
            return deviceId;
          }
          if (Array.isArray(deviceId) && deviceId.length > 0) {
            return deviceId[0];
          }
          if (_typeof(deviceId) === 'object' && deviceId.ideal) {
            return deviceId.ideal;
          }
          return null;
        };
        // @ts-ignore
        MediaStreamTrack.getSources(function (sources) {
          var audioSource = null;
          var videoSource = null;
          sources.forEach(function (source) {
            if (source.kind === 'audio') {
              audioSource = source.id;
            } else if (source.kind === 'video') {
              videoSource = source.id;
            }
          });
          var audioSourceId = constraintToSourceId(props.audioConstraints);
          if (audioSourceId) {
            audioSource = audioSourceId;
          }
          var videoSourceId = constraintToSourceId(props.videoConstraints);
          if (videoSourceId) {
            videoSource = videoSourceId;
          }
          sourceSelected(optionalSource(audioSource), optionalSource(videoSource));
        });
      }
    }
  }, {
    key: "handleUserMedia",
    value: function handleUserMedia(err, stream) {
      var props = this.props;
      if (err || !stream) {
        this.setState({
          hasUserMedia: false
        });
        props.onUserMediaError(err);
        return;
      }
      this.stream = stream;
      try {
        if (this.video) {
          this.video.srcObject = stream;
        }
        this.setState({
          hasUserMedia: true
        });
      } catch (error) {
        this.setState({
          hasUserMedia: true,
          // @ts-ignore
          src: window.URL.createObjectURL(stream)
        });
      }
      props.onUserMedia(stream);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var state = this.state,
        props = this.props;
      var audio = props.audio,
        shotSourceSize = props.shotSourceSize,
        onUserMedia = props.onUserMedia,
        onUserMediaError = props.onUserMediaError,
        shotFormat = props.shotFormat,
        shotQuality = props.shotQuality,
        shotWidth = props.shotWidth,
        shotHeight = props.shotHeight,
        audioConstraints = props.audioConstraints,
        videoConstraints = props.videoConstraints,
        imageSmoothing = props.imageSmoothing,
        mirrored = props.mirrored,
        _props$style = props.style,
        style = _props$style === void 0 ? {} : _props$style,
        rest = __rest(props, ["audio", "shotSourceSize", "onUserMedia", "onUserMediaError", "shotFormat", "shotQuality", "shotWidth", "shotHeight", "audioConstraints", "videoConstraints", "imageSmoothing", "mirrored", "style"]);
      var videoStyle = mirrored ? Object.assign(Object.assign({}, style), {
        transform: "".concat(style.transform || '', " scaleX(-1)")
      }) : style;
      return /*#__PURE__*/React.createElement("video", Object.assign({
        ref: function ref(_ref) {
          _this3.video = _ref;
        },
        autoPlay: true,
        playsInline: true,
        src: state.src,
        muted: !audio,
        style: videoStyle
      }, rest));
    }
  }], [{
    key: "stopMediaStream",
    value: function stopMediaStream(stream) {
      if (stream) {
        if (stream.getVideoTracks && stream.getAudioTracks) {
          stream.getVideoTracks().forEach(function (track) {
            stream.removeTrack(track);
            track.stop();
          });
          stream.getAudioTracks().forEach(function (track) {
            stream.removeTrack(track);
            track.stop();
          });
        } else {
          stream.stop();
        }
      }
    }
  }]);
  return Camera;
}(React.PureComponent);
export { Camera as default };
Camera.defaultProps = {
  audio: false,
  shotSourceSize: false,
  imageSmoothing: true,
  mirrored: false,
  onUserMedia: function onUserMedia() {
    return undefined;
  },
  onUserMediaError: function onUserMediaError() {
    return undefined;
  },
  shotFormat: 'image/webp',
  shotQuality: 0.92
};