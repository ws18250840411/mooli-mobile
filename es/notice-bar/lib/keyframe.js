function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
export var Keyframes = /*#__PURE__*/function () {
  function Keyframes(name) {
    _classCallCheck(this, Keyframes);
    this.name = name;
    this.head = document.getElementsByTagName('head')[0];
    this.aggregate = {};
  }
  _createClass(Keyframes, [{
    key: "add",
    value: function add(content) {
      if (!this.name) return;
      // @ts-ignore
      if (!this.aggregate[this.name]) {
        var style = document.createElement('style');
        style.id = this.name;
        style.innerHTML = "@keyframes ".concat(this.name, " {").concat(content, "}");
        this.head.appendChild(style);
        // @ts-ignore
        this.aggregate[this.name] = style;
      } else {
        // @ts-ignore
        this.aggregate[this.name].innerHTML = "@keyframes ".concat(this.name, " {").concat(content, "}");
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      var keyframe = document.getElementById(this.name);
      !!keyframe && document.getElementsByTagName('head')[0].removeChild(keyframe);
    }
  }]);
  return Keyframes;
}();