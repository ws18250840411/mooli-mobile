"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileReader = fileReader;
exports.isImageFile = isImageFile;
exports.isImageUrl = isImageUrl;
exports.isOversize = isOversize;
exports.toArray = toArray;
var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
function isImageUrl(url) {
  return IMAGE_REGEXP.test(url);
}
function isImageFile(item) {
  if (item.isImage) {
    return true;
  }
  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0;
  }
  if (item.url) {
    return isImageUrl(item.url);
  }
  if (item.content) {
    return item.content.indexOf('data:image') === 0;
  }
  return false;
}
function toArray(item) {
  if (Array.isArray(item)) {
    return item;
  }
  return [item];
}
function isOversize(files, maxSize) {
  return toArray(files).some(function (file) {
    return file.size > maxSize;
  });
}
function fileReader(file, resultType) {
  return new Promise(function (resolve) {
    if (resultType === 'file') {
      resolve(null);
      return;
    }
    var reader = new FileReader();
    reader.onload = function (event) {
      resolve(event.target.result);
    };
    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}