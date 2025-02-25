import getClientRect from './getClientRect';
import getPlacement from './getPlacement';

export interface PositionOptions {
  at?: string,
  my?: string,
}
export default function getPosition(targetDom: HTMLElement, popupDom: HTMLElement,options: any) {
  function getOffsets(offsets: any[], width: number, height: number) {
    const rpercent = /%$/;
    return [
      parseFloat(offsets[0]) * (rpercent.test(offsets[0]) ? width / 100 : 1),
      parseFloat(offsets[1]) * (rpercent.test(offsets[1]) ? height / 100 : 1),
    ];
  }

  let atOffset, curPosition = {} as any,curPlacement={} as any;
  const { placement, offset } = options;
  const offsets:{at?: string, my?: string} = {};
  const targetClientRect = getClientRect(targetDom);
  const placementObj = getPlacement(placement!, offset);
  curPosition = Object.assign({}, targetClientRect?.offset);

  const rhorizontal = /left|center|right/;
  const rvertical = /top|center|bottom/;
  const roffset = /[\+\-]\d+(\.[\d]+)?%?/;
  // 处理水平和垂直位置值丢失问题
  placementObj && Object.keys(placementObj).forEach(key => {
    //@ts-ignore
    let pos = (placementObj[key] || "").split(" "),horizontalOffset,verticalOffset;
    if (pos.length === 1) {
			pos = rhorizontal.test(pos[0])
				? pos.concat(["center"])
				: rvertical.test(pos[0])
				? ["center"].concat(pos)
				: ["center", "center"];
    }
    pos[0] = rhorizontal.test(pos[0]) ? pos[0] : "center";
    pos[1] = rvertical.test(pos[1]) ? pos[1] : "center";
    horizontalOffset = roffset.exec(pos[0]);
    verticalOffset = roffset.exec(pos[1]);
    //@ts-ignore
		offsets[key] = [
			horizontalOffset ? horizontalOffset[0] : 0,
			verticalOffset ? verticalOffset[0] : 0,
    ];
    curPlacement[key] = [/^\w+/.exec(pos[0])![0], /^\w+/.exec(pos[1])![0]];
  })

  if (curPlacement && curPlacement.at![0] === "right") {
		curPosition.left += targetClientRect?.width;
	} else if (curPlacement && curPlacement.at![0] === "center") {
		curPosition.left += targetClientRect?.width / 2;
	}
	if (curPlacement && curPlacement.at![1] === "bottom") {
		curPosition.top += targetClientRect?.height;
	} else if (curPlacement && curPlacement.at![1] === "center") {
		curPosition.top += targetClientRect?.height / 2;
  }
  atOffset = getOffsets(offsets.at as any, targetClientRect?.width, targetClientRect?.height);
	curPosition.left += atOffset[0];
  curPosition.top += atOffset[1];

  const popupClientRect = getClientRect(popupDom);
  const myOffset = getOffsets(offsets.my as any, popupClientRect?.width, popupClientRect?.height);
  
  if (curPlacement && curPlacement.my![0] === "right") {
    curPosition.left -= popupClientRect?.width;
  } else if (curPlacement && curPlacement.my![0] === "center") {
    curPosition.left -= popupClientRect?.width / 2;
  }

  if (curPlacement && curPlacement.my![1] === "bottom") {
    curPosition.top -= popupClientRect?.height;
  } else if (curPlacement && curPlacement.my![1] === "center") {
    curPosition.top -= popupClientRect?.height / 2;
  }
  curPosition.left += myOffset[0];
  curPosition.top += myOffset[1];

  return {positon: curPosition, feedback: curPlacement}
}

