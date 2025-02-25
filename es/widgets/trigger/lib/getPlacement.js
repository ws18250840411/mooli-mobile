function getOffset(h, v, offset) {
  var offsetLeft = offset[0];
  var offsetTop = offset[1];
  if (v === "top") {
    offsetTop *= -1;
  }
  if (h === "left") {
    offsetLeft *= -1;
  }
  if (offsetLeft) {
    h += offsetLeft > 0 ? "+" + offsetLeft : offsetLeft;
  }
  if (offsetTop) {
    v += offsetTop > 0 ? "+" + offsetTop : offsetTop;
  }
  return [h, v].join(" ");
}
var placements = {
  left: function left(offset) {
    return {
      at: getOffset("left", "center", offset),
      my: "right center"
    };
  },
  top: function top(offset) {
    return {
      at: getOffset("center", "top", offset),
      my: "center bottom"
    };
  },
  right: function right(offset) {
    return {
      at: getOffset("right", "center", offset),
      my: "left center"
    };
  },
  bottom: function bottom(offset) {
    return {
      at: getOffset("center", "bottom", offset),
      my: "center top"
    };
  },
  topLeft: function topLeft(offset) {
    return {
      at: getOffset("left", "top", offset),
      my: "left bottom"
    };
  },
  topRight: function topRight(offset) {
    return {
      at: getOffset("right", "top", offset),
      my: "right bottom"
    };
  },
  leftTop: function leftTop(offset) {
    return {
      at: getOffset("left", "top", offset),
      my: "right top"
    };
  },
  leftBottom: function leftBottom(offset) {
    return {
      at: getOffset("left", "bottom", offset),
      my: "right bottom"
    };
  },
  rightTop: function rightTop(offset) {
    return {
      at: getOffset("right", "top", offset),
      my: "left top"
    };
  },
  rightBottom: function rightBottom(offset) {
    return {
      at: getOffset("right", "bottom", offset),
      my: "left bottom"
    };
  },
  bottomLeft: function bottomLeft(offset) {
    return {
      at: getOffset("left", "bottom", offset),
      my: "left top"
    };
  },
  bottomRight: function bottomRight(offset) {
    return {
      at: getOffset("right", "bottom", offset),
      my: "right top"
    };
  }
};
export default function getPlacement(placement, offset) {
  if (typeof offset === "number") {
    offset = /^left|right/.test(placement) ? [offset, 0] : [0, offset];
  }
  return placements[placement] ? placements[placement](offset || [0, 0]) : null;
}