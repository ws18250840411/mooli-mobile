# Uploader 文件上传

### 介绍

用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。若无需定制化，可直接参照使用业务组件中的 BUploader 上传组件。

## 代码演示

### 基础用法

文件上传完毕后会触发 `onAfterRead` 回调函数，获取到对应的 `file` 对象。

```jsx
import { Uploader } from 'mooli-mobile';

const Demo = () => {
  const onAfterRead = (file, detail) => {
    // 此时可以自行将文件上传至服务器
    console.log(file);
    console.log(detail);
  };
  return (
    <div className="demo-uploader">
      <Uploader onAfterRead={onAfterRead} />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 文件预览

通过 `fileList` 可以绑定已经上传的文件列表，并展示文件列表的预览图。

```jsx
import { Uploader } from 'mooli-mobile';

const Demo = () => {
  const fileLists = [
    { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
    // Uploader 根据文件后缀来判断是否为图片文件
    // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
    { url: 'https://cloud-image', isImage: true },
  ];

  const [fileList, setFileList] = React.useState(fileLists);

  const onAfterRead = (file) => {
    setFileList([...fileList, file]);
  };

  const onDelete = (file, { index }) => {
    const curFileList = fileList.slice(0);
    curFileList.splice(index, 1);
    setFileList(curFileList);
  };

  return (
    <div className="demo-uploader">
      <Uploader
        fileList={fileList}
        onAfterRead={onAfterRead}
        onDelete={onDelete}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 上传状态

通过 `status` 属性可以标识上传状态，`uploading` 表示上传中，`failed` 表示上传失败，`done` 表示上传完成。

```jsx
import { Uploader } from 'mooli-mobile';

const Demo = () => {
  const fileLists = [
    {
      url: 'https://img01.yzcdn.cn/vant/leaf.jpg',
      status: 'uploading',
      message: '上传中...',
    },
    {
      url: 'https://img01.yzcdn.cn/vant/tree.jpg',
      status: 'failed',
      message: '上传失败',
    },
  ];

  const [fileList, setFileList] = React.useState(fileLists);

  const onAfterRead = (file) => {
    setFileList([
      ...fileList,
      {
        ...file,
        status: 'uploading',
        message: '上传中...',
      },
    ]);

    setTimeout(() => {
      setFileList([
        ...fileList,
        {
          ...file,
          status: 'failed',
          message: '上传失败',
        },
      ]);
    }, 1000);
  };

  const onDelete = (file, { index }) => {
    const curFileList = fileList.slice(0);
    curFileList.splice(index, 1);
    setFileList(curFileList);
  };

  return (
    <div className="demo-uploader">
      <Uploader
        fileList={fileList}
        onAfterRead={onAfterRead}
        onDelete={onDelete}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 限制上传数量

设置 `multiple` 开启图片多选，通过 `maxCount` 属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域。

```jsx
import { Uploader } from 'mooli-mobile';

const Demo = () => {
  const fileLists = [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }];

  const [fileList, setFileList] = React.useState(fileLists);

  const onAfterRead = (file) => {
    if (Array.isArray(file)) {
      setFileList([...fileList, ...file]);
    } else {
      setFileList([...fileList, file]);
    }
  };

  const onDelete = (file, { index }) => {
    const curFileList = fileList.slice(0);
    curFileList.splice(index, 1);
    setFileList(curFileList);
  };

  return (
    <div className="demo-uploader">
      <Uploader
        multiple
        fileList={fileList}
        onAfterRead={onAfterRead}
        onDelete={onDelete}
        maxCount={3}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 限制上传大小

通过 `maxSize` 属性可以限制上传文件的大小，超过大小的文件会被自动过滤，这些文件信息可以通过 `onOversize` 事件获取。

```jsx
import { Uploader, Toast } from 'mooli-mobile';

const Demo = () => {
  const onOversize = (file) => {
    // 此时可以自行将文件上传至服务器
    console.log(file);
    Toast('文件大小不能超过 5kb');
  };
  return (
    <div className="demo-uploader">
      <Uploader maxSize={5 * 1240} onOversize={onOversize} />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义上传样式

通过默认插槽可以自定义上传区域的样式。

```jsx
import { Uploader, Button } from 'mooli-mobile';

const Demo = () => {
  const fileLists = [];

  const [fileList, setFileList] = React.useState(fileLists);

  const onAfterRead = (file) => {
    setFileList([...fileList, file]);
  };

  const onDelete = (file, { index }) => {
    const curFileList = fileList.slice(0);
    curFileList.splice(index, 1);
    setFileList(curFileList);
  };

  return (
    <div className="demo-uploader">
      <Uploader
        fileList={fileList}
        onAfterRead={onAfterRead}
        onDelete={onDelete}
        maxCount={1}
      >
        <Button icon="plus" type="primary">
          上传文件
        </Button>
      </Uploader>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义预览样式

通过 `previewCover` 可以自定义覆盖在预览区域上方的内容。

```jsx
import { Uploader } from 'mooli-mobile';

const Demo = () => {
  const fileLists = [
    { url: 'https://img01.yzcdn.cn/vant/leaf.jpg', file: { name: '图片名称' } },
  ];

  const [fileList, setFileList] = React.useState(fileLists);

  const previewCover = ({ file }) => {
    return <div className="demo-preview-cover mooli-ellipsis">{file.name}</div>;
  };

  const onAfterRead = (file) => {
    setFileList([...fileList, file]);
  };

  const onDelete = (file, { index }) => {
    const curFileList = fileList.slice(0);
    curFileList.splice(index, 1);
    setFileList(curFileList);
  };

  return (
    <div className="demo-uploader">
      <Uploader
        fileList={fileList}
        previewCover={previewCover}
        onAfterRead={onAfterRead}
        onDelete={onDelete}
        maxCount={2}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 上传前置处理

通过传入 `onBeforeRead` 函数可以在上传前进行校验和处理，返回 `true` 表示校验通过，返回 `false` 表示校验失败。支持返回 `Promise` 对 file 对象进行自定义处理，例如压缩图片。

```jsx
import { Uploader, Toast } from 'mooli-mobile';

const Demo = () => {
  // 返回布尔值
  const onBeforeRead = (file, detail) => {
    console.log(file);
    // 此时可以自行将文件上传至服务器
    if (file.type !== 'image/jpeg') {
      Toast('请上传 jpg 格式图片');
      return false;
    }
    return true;
  };
  // 返回 Promise
  const asyncBeforeRead = (file) => {
    return new Promise((resolve, reject) => {
      if (file.type !== 'image/jpeg') {
        Toast('请上传 jpg 格式图片');
        reject();
      } else {
        let img = new File(['foo'], 'bar.jpg', {
          type: 'image/jpeg',
        });
        resolve(img);
      }
    });
  };
  return (
    <div className="demo-uploader">
      <Uploader onBeforeRead={onBeforeRead} maxCount={1} />
      <Uploader onBeforeRead={asyncBeforeRead} maxCount={1} />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 禁用文件上传

通过 `disabled` 属性禁用文件上传。

```jsx
import { Uploader } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-uploader">
      <Uploader disabled />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义上传图标

通过 `uploadIcon` 或者 `uploadIconName` 属性自定义上传图标。

```jsx
import { Uploader, Icon } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-uploader">
      <Uploader uploadIcon={<Icon name="live" />} />
      <Uploader uploadIconName="live" />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义单个图片预览

在 `fileLists` 数组中设置单个预览图片属性，支持 `imageFit` `deletable` `previewSize` `beforeDelete`。

```jsx
import { Uploader } from 'mooli-mobile';

const Demo = () => {
  const fileLists = [
    { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
    {
      url: 'https://img01.yzcdn.cn/vant/sand.jpg',
      deletable: true,
      beforeDelete: () => {
        Toast('自定义单个预览图片的事件和样式');
      },
    },
    {
      url: 'https://img01.yzcdn.cn/vant/tree.jpg',
      deletable: true,
      imageFit: 'contain',
      previewSize: 120,
    },
  ];

  const [fileList, setFileList] = React.useState(fileLists);

  const onAfterRead = (file) => {
    if (Array.isArray(file)) {
      setFileList([...fileList, ...file]);
    } else {
      setFileList([...fileList, file]);
    }
  };

  const onDelete = (file, { index }) => {
    const curFileList = fileList.slice(0);
    curFileList.splice(index, 1);
    setFileList(curFileList);
  };

  return (
    <div className="demo-uploader">
      <Uploader
        multiple
        deletable={false}
        fileList={fileList}
        onAfterRead={onAfterRead}
        onDelete={onDelete}
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
| name | 标识符，可以在回调函数的第二项参数中获取 | _number \| string_ | - |
| previewSize | 预览图和上传区域的尺寸，默认单位为 `px` | _number \| string_ | `80px` |
| previewImage | 是否在上传完成后展示预览图 | _boolean_ | `true` |
| previewFullImage | 是否在点击预览图后展示全屏图片预览 | _boolean_ | `true` |
| previewOptions | 全屏图片预览的配置项，可选值见 [ImagePreview](#/components/image-preview/zh-CN) | _object_ | - |
| multiple | 是否开启图片多选，部分安卓机型不支持 | _boolean_ | `false` |
| disabled | 是否禁用文件上传 | _boolean_ | `false` |
| deletable | 是否展示删除按钮 | _boolean_ | `true` |
| showUpload | 是否展示上传区域 | _boolean_ | `true` |
| maxSize | 文件大小限制，单位为 `byte` | _number \| string_ | - |
| maxCount | 文件上传数量限制 | _number \| string_ | - |
| resultType | 文件读取结果类型，可选值为 `file` `text` | _string_ | `dataUrl` |
| uploadText | 上传区域文字提示 | _string_ | - |
| imageFit | 预览图裁剪模式，可选值见 [Image](#/components/image/zh-CN) 组件 | _string_ | `cover` |
| uploadIconName | 上传区域[图标名称](#/components/icon/zh-CN)或图片链接 | _string_ | `photograph` |
| className | 附加类名 | _string_ | `--` |
| style | 附加样式 | _objcet_ | `--` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onBeforeRead | 文件读取前的回调函数，返回 `false` 可终止文件读取，<br>支持返回 `Promise` | - |
| onAfterRead | 文件读取完成后的回调函数 | - |
| onOversize | 文件大小超过限制时触发 | - |
| onClickPreview | 点击预览图时触发 | - |
| onClosePreview | 关闭全屏图片预览时触发 | - |
| onBeforeDelete | 文件删除前的回调函数，返回 `false` 可终止文件读取，<br>支持返回 `Promise` | - |
| onDelete | 删除文件预览时触发 | - |

### Slots

| 名称         | 说明                           | 参数                 |
| ------------ | ------------------------------ | -------------------- |
| default      | 自定义上传区域                 | -                    |
| previewCover | 自定义覆盖在预览区域上方的内容 | _item: FileListItem_ |

### 回调参数

onBeforeRead、onAfterRead、onBeforeDelete 执行时会传递以下回调参数：

| 参数名 | 说明                              | 类型     |
| ------ | --------------------------------- | -------- |
| file   | file 对象                         | _object_ |
| detail | 额外信息，包含 name 和 index 字段 | _object_ |
