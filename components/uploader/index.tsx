import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Loading from '../loading';
import Image, { ImageFit } from '../image';
import ImagePreview from '../image-preview';
import { createClassName, addUnit, isPromise, noop } from '../utils';
import { isImageFile, isOversize, fileReader } from './lib/utils';

export type ResultType = 'dataUrl' | 'text' | 'file';

export interface UploaderProps {
  name?: string;
  accept?: string;
  fileList?: any[];
  maxSize?: number;
  maxCount?: number;
  deletable?: boolean;
  showUpload?: boolean;
  previewImage?: boolean;
  previewFullImage?: boolean;
  imageFit?: ImageFit;
  resultType?: ResultType;
  uploadIcon?: React.ReactNode;
  uploadIconName?: string;
  disabled?: boolean;
  multiple?: boolean;
  uploadText?: string;
  previewCover?: Function;
  previewSize?: string;
  previewOptions?: object;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onBeforeRead?: Function;
  onAfterRead?: Function;
  onOversize?: Function;
  onBeforeDelete?: Function;
  onDelete?: Function;
  onClickPreview?: Function;
  onClosePreview?: Function;
}

const componentClassName = createClassName('uploader');
const getClassName = (name: string) =>
  createClassName(componentClassName, name);

export default class Uploader extends React.PureComponent<UploaderProps> {
  static propTypes = {
    name: PropTypes.string,
  };
  static defaultProps = {
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
    maxCount: Number.MAX_VALUE,
  };
  public inputRef: React.RefObject<HTMLInputElement>;
  public imagePreview: { close: () => void };
  constructor(props: UploaderProps) {
    super(props);
    this.inputRef = React.createRef();
  }
  get previewSizeWithUnit() {
    return addUnit(this.props.previewSize);
  }
  resetInput = () => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.value = '';
    }
  };
  getDetail(index = this.props.fileList && this.props.fileList.length) {
    return {
      name: this.props.name,
      index,
    };
  }
  deleteFile = (file: any, index: number | undefined) => {
    const { onDelete } = this.props;
    if (typeof onDelete === 'function') onDelete(file, this.getDetail(index));
  };
  afterRead = (files: any[], oversize: boolean) => {
    const { maxSize = Number.MAX_VALUE, onOversize, onAfterRead } = this.props;
    this.resetInput();
    let validFiles: any = files;
    if (oversize) {
      let oversizeFiles = files;
      if (Array.isArray(files)) {
        oversizeFiles = [];
        validFiles = [];
        files.forEach((item) => {
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
        onOversize(oversizeFiles, this.getDetail());
      }
    }
    const isValidFiles = Array.isArray(validFiles)
      ? Boolean(validFiles.length)
      : Boolean(validFiles);

    if (isValidFiles) {
      if (typeof onAfterRead === 'function') {
        onAfterRead(validFiles, this.getDetail());
      }
    }
  };
  readFile = (files: any) => {
    const {
      maxSize = Number.MAX_VALUE,
      maxCount = Number.MAX_VALUE,
      fileList = [],
      resultType = 'dataUrl',
    } = this.props;
    const oversize = isOversize(files, maxSize);
    if (Array.isArray(files)) {
      const curMaxCount = maxCount - fileList.length;
      if (files.length > curMaxCount) {
        files = files.slice(0, curMaxCount);
      }
      Promise.all(files.map((file: File) => fileReader(file, resultType))).then(
        (contents: any) => {
          const fileList = files.map((file: any, index: string | number) => {
            const result = { file, status: '', message: '' } as any;

            if (contents[index]) {
              result.content = contents[index];
            }
            return result;
          });
          this.afterRead(fileList, oversize);
        },
      );
    } else {
      fileReader(files, resultType).then((content) => {
        const result = { file: files, status: '', message: '' } as any;
        if (content) {
          result.content = content;
        }
        this.afterRead(result, oversize);
      });
    }
  };
  onChange = (event: { target: { files: any } }) => {
    const { disabled, onBeforeRead } = this.props;
    let { files } = event.target;
    if (disabled || !files.length) return;

    files = files.length === 1 ? files[0] : [].slice.call(files);

    if (onBeforeRead) {
      const response = onBeforeRead(files, this.getDetail());
      if (!response) {
        this.resetInput();
        return;
      }
      if (isPromise(response)) {
        response
          .then((data) => {
            if (data) {
              this.readFile(data);
            } else {
              this.readFile(files);
            }
          })
          .catch(this.resetInput);
        return;
      }
    }
    this.readFile(files);
  };
  onDelete = (
    file: { beforeDelete: Function | undefined },
    index: number | undefined,
  ) => {
    const { onBeforeDelete } = this.props;
    const beforeDelete = file.beforeDelete ?? onBeforeDelete;
    if (beforeDelete) {
      const response = beforeDelete(file, this.getDetail(index));

      if (!response) return;

      if (isPromise(response)) {
        response
          .then(() => {
            this.deleteFile(file, index);
          })
          .catch(noop);
        return;
      }
    }
    this.deleteFile(file, index);
  };
  onPreviewImage = (item: any) => {
    const {
      previewFullImage,
      previewOptions,
      fileList = [],
      onClosePreview,
    } = this.props;
    if (!previewFullImage) return;

    const imageFiles = fileList.filter((item) => isImageFile(item));
    const imageContents = imageFiles.map(
      (item: any) => item.content || item.url,
    ) as any;
    if (imageContents) {
      this.imagePreview = ImagePreview.create({
        images: imageContents,
        // @ts-ignore
        initial: imageFiles.indexOf(item),
        onClose: () => {
          if (typeof onClosePreview === 'function') onClosePreview();
        },
        ...previewOptions,
      });
    }
  };

  genPreviewItem = (item: any, index: number) => {
    const { deletable, previewSize, previewCover, imageFit, onClickPreview } =
      this.props;
    const deleteAble = item.deletable ?? deletable;
    const showDelete = item.status !== 'uploading' && deleteAble;

    const curPreviewSize: string = item.previewSize ?? previewSize;
    const curImageFit = item.imageFit ?? imageFit;

    const IsImageFile = isImageFile(item);

    const DeleteIcon = showDelete && (
      <div
        className={getClassName('preview-delete')}
        onClick={(event) => {
          event.stopPropagation();
          this.onDelete(item, index);
        }}
      >
        <Icon name="cross" className={getClassName('preview-delete-icon')} />
      </div>
    );

    const PreviewMask = () => {
      const { status, message } = item;
      if (status === 'uploading' || status === 'failed') {
        const MaskIcon =
          status === 'failed' ? (
            <Icon name="close" className={getClassName('mask-icon')} />
          ) : (
            <Loading className={getClassName('loading')} />
          );
        const showMessage = message && message !== '';

        return (
          <div className={getClassName('mask')}>
            {MaskIcon}
            {showMessage && (
              <div className={getClassName('mask-message')}>{message}</div>
            )}
          </div>
        );
      }
      return null;
    };

    const PreviewCoverContent =
      previewCover && previewCover({ ...item, index });

    const PreviewCover = PreviewCoverContent && (
      <div className={getClassName('preview-cover')}>{PreviewCoverContent}</div>
    );

    const Preview = IsImageFile ? (
      <Image
        fit={curImageFit}
        src={item.content || item.url}
        width={String(curPreviewSize)}
        height={String(curPreviewSize)}
        className={getClassName('preview-image')}
        onClick={() => {
          this.onPreviewImage(item);
        }}
      >
        {PreviewCover}
      </Image>
    ) : (
      <div
        className={getClassName('file')}
        style={{
          width: this.previewSizeWithUnit,
          height: this.previewSizeWithUnit,
        }}
      >
        <Icon className={getClassName('file-icon')} name="description" />
        <div className={getClassName('file-name') + ' mooli-ellipsis'}>
          {item.file ? item.file.name : item.url}
        </div>
        {PreviewCover}
      </div>
    );

    return (
      <div
        key={index}
        className={getClassName('preview')}
        onClick={() => {
          if (typeof onClickPreview === 'function') onClickPreview(item, index);
        }}
      >
        {Preview}
        {PreviewMask()}
        {DeleteIcon}
      </div>
    );
  };

  genPreviewList = () => {
    if (this.props.previewImage) {
      return (
        this.props.fileList && this.props.fileList.map(this.genPreviewItem)
      );
    }
    return null;
  };

  genUpload = () => {
    const {
      fileList = [],
      maxCount = Number.MAX_VALUE,
      showUpload,
      previewSize,
      accept,
      disabled,
      multiple,
      uploadIcon,
      uploadIconName,
      uploadText,
      children,
    } = this.props;

    if (fileList.length >= maxCount || !showUpload) {
      return;
    }

    let curStyle: React.CSSProperties = {};
    if (previewSize) {
      const size = this.previewSizeWithUnit;
      curStyle = {
        width: size,
        height: size,
      };
    }

    const Input = (
      <input
        ref={this.inputRef}
        type="file"
        multiple={multiple}
        accept={accept}
        className={getClassName('input')}
        disabled={disabled}
        onChange={this.onChange}
      />
    );
    if (children) {
      return (
        <div className={getClassName('input-wrapper')} key="input-wrapper">
          {children}
          {Input}
        </div>
      );
    }

    return (
      <div className={getClassName('upload')} style={curStyle}>
        {uploadIcon || (
          <Icon name={uploadIconName} className={getClassName('upload-icon')} />
        )}
        {uploadText && (
          <span className={getClassName('upload-text')}>{uploadText}</span>
        )}
        {Input}
      </div>
    );
  };

  render() {
    const { disabled, className } = this.props;
    const wrapperClassName = createClassName(componentClassName, 'wrapper');
    const className2Use: string = classnames(wrapperClassName, className, {
      [`${componentClassName}--disabled`]: disabled,
    });
    return (
      <div className={componentClassName}>
        <div className={className2Use}>
          {this.genPreviewList()}
          {this.genUpload()}
        </div>
      </div>
    );
  }
}
