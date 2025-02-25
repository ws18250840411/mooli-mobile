const isBrowser = typeof window !== 'undefined';
// @ts-ignore
const OffscreenCanvas = isBrowser && window.OffscreenCanvas;

export function getDataUrlFromFile(file: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = (e) => reject(e)
    reader.readAsDataURL(file)
  })
}

export function getNewCanvasAndCtx (width: number, height: number) {
  let canvas: HTMLCanvasElement
  let ctx: any
  if (OffscreenCanvas) {
    // @ts-ignore
    canvas = new OffscreenCanvas(width, height)
  } else {
    canvas = document.createElement('canvas')
  }
  ctx = canvas.getContext('2d')
  canvas.width = width
  canvas.height = height
  return [canvas, ctx]
}

export function getFilefromDataUrl (dataUrl: any, filename: any, lastModified = Date.now()) {
  return new Promise((resolve) => {
    const arr = dataUrl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    const file = new Blob([u8arr], { type: mime }) as any
    file.name = filename
    file.lastModified = lastModified
    resolve(file)
  })
}


export function loadImage (src: any) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = (e) => reject(e)
    img.src = src
  })
}

export function drawImageInCanvas (img: any) {
  const [canvas, ctx] = getNewCanvasAndCtx(img.width, img.height)
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  return canvas
}

export async function drawFileInCanvas(file: File) {
  let img: any
  try {
    img = await createImageBitmap(file)
  } catch (e) {
    const dataUrl = await getDataUrlFromFile(file)
    img = await loadImage(dataUrl)
  }
  const canvas = drawImageInCanvas(img)
  return [img, canvas]
}

export async function canvasToFile (canvas: any, fileType: string, fileName: string, fileLastModified: any, quality = 1) {
  let file: any
  // @ts-ignore
  if (canvas instanceof OffscreenCanvas) {
    file = await canvas.convertToBlob({ type: fileType, quality })
    file.name = fileName
    file.lastModified = fileLastModified
  } else {
    const dataUrl = canvas.toDataURL(fileType, quality)
    file = await getFilefromDataUrl(dataUrl, fileName, fileLastModified)
  }
  return file
}

export function cleanupCanvasMemory (canvas: { width: number; height: number }) {
  canvas.width = 0
  canvas.height = 0
}

export function adjustCanvasWidthOrHeight (canvas: any, maxWidthOrHeight: any) {
  const width = canvas.width
  const height = canvas.height

  const needToHandle = isFinite(maxWidthOrHeight) && (width > maxWidthOrHeight || height > maxWidthOrHeight)

  let newCanvas = canvas
  let ctx: any

  if (needToHandle) {
    [newCanvas, ctx] = getNewCanvasAndCtx(width, height)
    if (width > height) {
      newCanvas.width = maxWidthOrHeight
      newCanvas.height = (height / width) * maxWidthOrHeight
    } else {
      newCanvas.width = (width / height) * maxWidthOrHeight
      newCanvas.height = maxWidthOrHeight
    }
    ctx.drawImage(canvas, 0, 0, newCanvas.width, newCanvas.height)
    cleanupCanvasMemory(canvas)
  }

  return newCanvas
}

