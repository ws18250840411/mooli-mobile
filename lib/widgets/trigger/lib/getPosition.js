"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPosition;
var _getClientRect = _interopRequireDefault(require("./getClientRect"));
var _getPlacement = _interopRequireDefault(require("./getPlacement"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function getPosition(targetDom, popupDom, options) {
  function getOffsets(offsets, width, height) {
    var rpercent = /%$/;
    return [parseFloat(offsets[0]) * (rpercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (rpercent.test(offsets[1]) ? height / 100 : 1)];
  }
  var atOffset,
    curPosition = {},
    curPlacement = {};
  var placement = options.placement,
    offset = options.offset;
  var offsets = {};
  var targetClientRect = (0, _getClientRect.default)(targetDom);
  var placementObj = (0, _getPlacement.default)(placement, offset);
  curPosition = Object.assign({}, targetClientRect === null || targetClientRect === void 0 ? void 0 : targetClientRect.offset);
  var rhorizontal = /left|center|right/;
  var rvertical = /top|center|bottom/;
  var roffset = /[\+\-]\d+(\.[\d]+)?%?/;
  // 处理水平和垂直位置值丢失问题
  placementObj && Object.keys(placementObj).forEach(function (key) {
    //@ts-ignore
    var pos = (placementObj[key] || "").split(" "),
      horizontalOffset,
      verticalOffset;
    if (pos.length === 1) {
      pos = rhorizontal.test(pos[0]) ? pos.concat(["center"]) : rvertical.test(pos[0]) ? ["center"].concat(pos) : ["center", "center"];
    }
    pos[0] = rhorizontal.test(pos[0]) ? pos[0] : "center";
    pos[1] = rvertical.test(pos[1]) ? pos[1] : "center";
    horizontalOffset = roffset.exec(pos[0]);
    verticalOffset = roffset.exec(pos[1]);
    //@ts-ignore
    offsets[key] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0];
    curPlacement[key] = [/^\w+/.exec(pos[0])[0], /^\w+/.exec(pos[1])[0]];
  });
  if (curPlacement && curPlacement.at[0] === "right") {
    curPosition.left += targetClientRect === null || targetClientRect === void 0 ? void 0 : targetClientRect.width;
  } else if (curPlacement && curPlacement.at[0] === "center") {
    curPosition.left += (targetClientRect === null || targetClientRect === void 0 ? void 0 : targetClientRect.width) / 2;
  }
  if (curPlacement && curPlacement.at[1] === "bottom") {
    curPosition.top += targetClientRect === null || targetClientRect === void 0 ? void 0 : targetClientRect.height;
  } else if (curPlacement && curPlacement.at[1] === "center") {
    curPosition.top += (targetClientRect === null || targetClientRect === void 0 ? void 0 : targetClientRect.height) / 2;
  }
  atOffset = getOffsets(offsets.at, targetClientRect === null || targetClientRect === void 0 ? void 0 : targetClientRect.width, targetClientRect === null || targetClientRect === void 0 ? void 0 : targetClientRect.height);
  curPosition.left += atOffset[0];
  curPosition.top += atOffset[1];
  var popupClientRect = (0, _getClientRect.default)(popupDom);
  var myOffset = getOffsets(offsets.my, popupClientRect === null || popupClientRect === void 0 ? void 0 : popupClientRect.width, popupClientRect === null || popupClientRect === void 0 ? void 0 : popupClientRect.height);
  if (curPlacement && curPlacement.my[0] === "right") {
    curPosition.left -= popupClientRect === null || popupClientRect === void 0 ? void 0 : popupClientRect.width;
  } else if (curPlacement && curPlacement.my[0] === "center") {
    curPosition.left -= (popupClientRect === null || popupClientRect === void 0 ? void 0 : popupClientRect.width) / 2;
  }
  if (curPlacement && curPlacement.my[1] === "bottom") {
    curPosition.top -= popupClientRect === null || popupClientRect === void 0 ? void 0 : popupClientRect.height;
  } else if (curPlacement && curPlacement.my[1] === "center") {
    curPosition.top -= (popupClientRect === null || popupClientRect === void 0 ? void 0 : popupClientRect.height) / 2;
  }
  curPosition.left += myOffset[0];
  curPosition.top += myOffset[1];
  return {
    positon: curPosition,
    feedback: curPlacement
  };
}