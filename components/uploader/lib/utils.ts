
const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
export function isImageUrl(url: string): boolean {
  return IMAGE_REGEXP.test(url);
}

export type FileListItem = {
  url?: string;
  file?: File;
  content?: string; // dataUrl
  isImage?: boolean;
  status?: '' | 'uploading' | 'done' | 'failed';
  message?: string;
};
export function isImageFile(item: FileListItem): boolean {
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

export function toArray<T>(item: T | T[]): T[] {
  if (Array.isArray(item)) {
    return item;
  }
  return [item];
}

export function isOversize(
  files: File | File[],
  maxSize: number | string
): boolean {
  return toArray(files).some((file) => file.size > maxSize);
}

export function fileReader(file: File, resultType: string) {
  return new Promise<FileReader['result']>((resolve) => {
    if (resultType === 'file') {
      resolve(null);
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      resolve((event.target as FileReader).result);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}
