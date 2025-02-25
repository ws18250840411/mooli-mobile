
import {
  drawFileInCanvas,
  adjustCanvasWidthOrHeight,
  getNewCanvasAndCtx,
  canvasToFile,
  cleanupCanvasMemory
} from './utils';

export interface compressOptions {
  maxSize?: number;
  maxIteration?: number;
  maxWidthOrHeight?: number;
  fileType?: string;
}
export async  function compress(file: File, options: compressOptions) {
  let remainingTrials = options.maxIteration || Number.MAX_VALUE;
  let maxSizeByte = options.maxSize;
  let maxWidthOrHeight = options.maxWidthOrHeight || undefined;
  let quality = 1;

  if (!maxSizeByte) {
    throw new Error('属性 maxSize 不能为空!')
  }

  // 创建canvas
  let [origCanvas] = await drawFileInCanvas(file);
  let maxWidthOrHeightFixedCanvas = origCanvas;
  // 根据传入的maxWidthOrHeight调整canvas大小
  if (maxWidthOrHeight) {
    maxWidthOrHeightFixedCanvas = adjustCanvasWidthOrHeight(origCanvas, maxWidthOrHeight)
  }
  // 绘制文件
  let tempFile = await canvasToFile(maxWidthOrHeightFixedCanvas, options.fileType || file.type, file.name, file.lastModified, quality)

  const origExceedMaxSize = tempFile.size > maxSizeByte
  const sizeBecomeLarger = tempFile.size > file.size
  if (!origExceedMaxSize && !sizeBecomeLarger) {
    return tempFile
  }

  const sourceSize = file.size
  const renderedSize = tempFile.size
  let currentSize = renderedSize
  let compressedFile
  let newCanvas, ctx
  let canvas = maxWidthOrHeightFixedCanvas;
  // 循环压缩

  while (remainingTrials-- && (currentSize > maxSizeByte || currentSize > sourceSize)) {
    const newWidth = origExceedMaxSize ? canvas.width * 0.95 : canvas.width;
    const newHeight = origExceedMaxSize ? canvas.height * 0.95 : canvas.height;
    [newCanvas, ctx] = getNewCanvasAndCtx(newWidth, newHeight);
    ctx.drawImage(canvas, 0, 0, newWidth, newHeight);

    if (file.type === 'image/jpeg') {
      quality *= 0.95
    }

    compressedFile = await canvasToFile(newCanvas, options.fileType || file.type, file.name, file.lastModified, quality)
    cleanupCanvasMemory(canvas)
    canvas = newCanvas
    currentSize = compressedFile.size
  }
  // 压缩完毕清除
  cleanupCanvasMemory(canvas)
  cleanupCanvasMemory(newCanvas)
  cleanupCanvasMemory(maxWidthOrHeightFixedCanvas)
  cleanupCanvasMemory(origCanvas)

  return compressedFile
}
