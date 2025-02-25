# BUploader 文件上传

### 介绍

为了快速实现上传功能，BUploader 组件采用极简配置方式，就可以实现图片上传等。同时可支持 Uploader 组件所有基础功能。如果您需要定制化上传需求， 那么 Uploader 组件更适合您。

## 代码演示

### 基础用法

文件上传过程会触发 `onChange` 回调函数，获取到对应的 `file` 对象 和 `detail` 详细信息。 通过 `onDelete` 回调函数，实现图片删除等操作。设置 `compress` 属性可开启图片压缩。

```jsx
import { BUploader } from 'mooli-mobile';

const Demo = () => {
  const fileList = [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }];
  const onChange = (params) => {
    console.log(params);
  };
  const onRemove = (file, { index }) => {
    console.log(file);
    console.log(index);
    const { status, response } = file;
    // 删除上传成功的图片
    if (status === 'done') {
      // const { id } = response.data.id; // 图片 id
      // ....
    }
    // fetch 请求
    // 返回布尔值 或者 Promise
    return true;
  };
  return (
    <div className="demo-uploader">
      <BUploader
        name="file"
        fileList={fileList}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={onChange}
        onRemove={onRemove}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 图片压缩

设置 `compress` 属性可开启图片压缩，可通过配置参数控制压缩。如：`maxSize` 控制图片压缩最大值；`maxWidthOrHeight` 控制压缩后的图片最大宽高；`fileType` 压缩文件类型等。

```jsx
import { BUploader } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-uploader">
      <BUploader
        multiple
        name="file"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        compress={{ maxSize: 16 * 1024 }}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fileList | 已上传的文件列表 | _FileListItem[]_ | - |
| accept | 允许上传的文件类型，[详细说明](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | _string_ | `image/*` |
| name | 发到后台的文件参数名 | _number \| string_ | - |
| action | 上传的地址 | _string_ | - |
| method | 上传请求的 http method | _string_ | `post` |
| headers | 设置上传的请求头部，IE10 以上有效 | _string_ | - |
| data | 上传所需额外参数或返回上传额外参数的方法 | _string_ | - |
| withCredentials | 上传请求时是否携带 cookie | _boolean_ | `false` |
| compress | 图片压缩 | _compressOptions_ | - |
| customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现 | _function_ | - |
| uploadStartMessage | 上传开始文字提示 | _string_ | - |
| uploadingMessage | 上传中文字提示 | _string_ | - |
| uploadFailMessage | 上传失败文字提示 | _string_ | - |
| uploadSuccessMessage | 上传成功文字提示 | _string_ | - |
| className | 附加类名 | _string_ | `--` |
| style | 附加样式 | _objcet_ | `--` |

### compressOptions

| 参数             | 说明               | 参数 |
| ---------------- | ------------------ | ---- |
| maxSize          | 压缩最大值         | -    |
| maxWidthOrHeight | 压缩最大宽度和高度 | -    |
| fileType         | 文件类型           | -    |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onChange | 文件变化的回调函数 | - |
| onRemove | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除 | - |

### 回调参数

onChange 执行时会传递以下回调参数：

| 参数名    | 说明                   | 类型       |
| --------- | ---------------------- | ---------- |
| eventType | 事件类型               | _function_ |
| file      | file 对象              | _object_   |
| response  | 服务端响应内容         | _object_   |
| error     | 发生网络错误，报错信息 | _object_   |
