import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Toast from '../toast';
import Uploader, { UploaderProps } from '../uploader';
import { fetch, RequestOption } from '../widgets/fetch';
import { compress, compressOptions } from './lib/compress';
import { createClassName, getUniqueId } from '../utils';

export enum State {
  READY = 'ready',
  SUCCESS = 'done',
  FAIL = 'failed',
  UPLOADING = 'uploading',
}

const TOTAL_PERCENT = 100;

export interface BUploaderProps extends UploaderProps {
  action: string;
  name: string;
  method?: string;
  withCredentials?: boolean;
  data?: object;
  headers?: object;
  autoUpload?: boolean;
  compress?: compressOptions;
  uploadStartMessage?: string;
  uploadingMessage?: string;
  uploadFailMessage?: string;
  uploadSuccessMessage?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onChange?: Function;
  onRemove?: Function;
  customRequest?: Function;
}

export interface BUploaderStates {
  fileList: any[];
  uploading: boolean;
}

export default class BUploader extends React.PureComponent<
  BUploaderProps,
  BUploaderStates
> {
  static displayName: 'BUploader';
  static propTypes = {
    action: PropTypes.string,
    name: PropTypes.string,
    method: PropTypes.string,
    withCredentials: PropTypes.bool,
    data: PropTypes.object,
    headers: PropTypes.object,
    autoUpload: PropTypes.bool,
    uploadStartMessage: PropTypes.string,
    uploadingMessage: PropTypes.string,
    uploadFailMessage: PropTypes.string,
    uploadSuccessMessage: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object, // 自定义样式
    children: PropTypes.node,
    onChange: PropTypes.func,
    onRemove: PropTypes.func,
    customRequest: PropTypes.func,
  };
  static defaultProps = {
    name: 'file',
    action: '',
    method: 'post',
    data: {},
    headers: {},
    withCredentials: false,
    autoUpload: true,
    uploadStartMessage: '上传中...',
    uploadingMessage: '上传中...',
    uploadFailMessage: '上传失败',
    uploadSuccessMessage: '上传成功',
  };
  constructor(props: BUploaderProps) {
    super(props);
    this.state = {
      fileList: props.fileList || [],
      uploading: false,
    };
  }
  private changeFileState = (file: any, params: any) => {
    Object.keys(params).forEach((key) => {
      file[key] = params[key];
    });
    file.name = file.file.name;
    file.uid = getUniqueId();
    return file;
  };
  private setFileState = (file: any) => {
    let curFile: any = [...this.state.fileList];
    let isAdd = curFile.every((f: any) => f.uid !== file.uid);
    if (isAdd) curFile.push(file);
    return this.setState({
      fileList: curFile as any,
    });
  };
  // 上传之前
  private handleBeforeRead = (file: any) => {
    return new Promise(async (resolve, reject) => {
      const files = Array.isArray(file) ? file : [file];
      const compressFiles: any = [];
      for (let i = 0; i < files.length; i++) {
        let f = files[i];
        if (this.props.accept && f.type !== this.props.accept) {
          Toast(`请上传 ${this.props.accept} 格式图片`);
          reject();
          break;
        }
        if (this.props.compress) {
          const { maxSize } = this.props.compress;
          let compressedFile: any;
          if (maxSize && maxSize >= f.size) {
            console.log(`压缩值 maxSize 不能大于原图片`);
            compressedFile = f;
          } else {
            compressedFile = await compress(f, this.props.compress);
          }
          compressFiles.push(compressedFile);
        }
      }
      resolve(compressFiles.length ? compressFiles : files);
    });
  };
  private triggerChange = ({ file, response, error, eventType }: any) => {
    const { onChange } = this.props;
    if (typeof onChange === 'function') {
      onChange({
        response,
        error,
        eventType,
        file,
        fileList: this.state.fileList,
      });
    }
  };
  private post = (file: { file: any; percent: number }) => {
    const {
      name,
      action,
      method,
      data,
      headers,
      withCredentials,
      customRequest,
      uploadStartMessage,
      uploadingMessage,
      uploadFailMessage,
      uploadSuccessMessage,
    } = this.props;
    const defaultOptions = {
      action,
      headers,
      method,
      withCredentials,
      data,
      file: file.file,
      filename: name,
    };
    const options: RequestOption = {
      ...defaultOptions,
      onLoadStart: () => {
        this.changeFileState(file, {
          status: State.UPLOADING,
          message: uploadStartMessage,
        });
        this.setFileState(file);
      },
      onProgress: (event: ProgressEvent) => {
        if (event.total > 0) {
          file.percent = (event.loaded / event.total) * TOTAL_PERCENT;
        }
        this.changeFileState(file, {
          status: State.UPLOADING,
          message: uploadingMessage,
        });
        this.setFileState(file);
        this.triggerChange({ file, eventType: 'onProgress' });
      },
      onSuccess: (response: ProgressEvent) => {
        this.changeFileState(file, {
          status: State.SUCCESS,
          message: uploadSuccessMessage,
          response,
        });
        this.setFileState(file);
        this.triggerChange({ file, response, eventType: 'onSuccess' });
      },
      onError: (error: Error | ProgressEvent<EventTarget>) => {
        this.changeFileState(file, {
          status: State.FAIL,
          message: uploadFailMessage,
          error,
        });
        this.setFileState(file);
        this.triggerChange({ file, error, eventType: 'onError' });
      },
    };
    // fetch 请求
    const useCustomAjax = customRequest instanceof Function;
    if (!useCustomAjax) return fetch(options);

    if (customRequest) {
      customRequest(defaultOptions)
        .then(options.onSuccess)
        .catch(options.onError);
    }
  };
  // 上传之后
  private handleAfterRead = (file: { file: any; percent: number }[]) => {
    file.forEach(this.post);
  };
  private handleOversize = () => {
    const { maxSize } = this.props;
    Toast(`文件大小不能超过 ${maxSize}kb`);
  };
  private handleDelete = (_file: any, { index }: any) => {
    const { fileList } = this.state;
    const curfileList: any = fileList.slice(0);
    curfileList.splice(index, 1);
    this.setState({ fileList: curfileList });
  };
  private handleClosePreview = () => {};

  render() {
    const {
      action,
      method,
      data,
      headers,
      withCredentials,
      autoUpload,
      fileList,
      customRequest,
      uploadStartMessage,
      uploadingMessage,
      uploadFailMessage,
      uploadSuccessMessage,
      onChange,
      onRemove,
      onAfterRead,
      onBeforeRead,
      onBeforeDelete,
      onOversize,
      onClosePreview,
      className,
      ...rest
    } = this.props;

    const wrapperClassName = createClassName('buploader');
    const className2Use: string = classnames(wrapperClassName, className);

    return (
      <Uploader
        className={className2Use}
        fileList={this.state.fileList}
        onAfterRead={this.handleAfterRead}
        onBeforeRead={this.handleBeforeRead}
        onOversize={this.handleOversize}
        onBeforeDelete={this.props.onRemove}
        onDelete={this.handleDelete}
        onClosePreview={this.handleClosePreview}
        {...rest}
      />
    );
  }
}
