# Image 图片

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

## 代码演示

### 基础用法

基础用法与原生 `img` 标签一致，可以设置 `src`、`width`、`height`、`alt` 等原生属性。

```jsx
import { Image } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-image">
      <Image
        width="100"
        height="100"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 填充模式

通过 `fit` 属性可以设置图片填充模式，可选值见下方表格。

```jsx
import { Image, Row, Col } from 'mooli-mobile';

const Demo = () => {
  const fits = ['cover', 'fill', 'none', 'contain', 'scale-down'];
  return (
    <div className="demo-image">
      <Row gutter="20">
        {fits.map((item) => {
          return (
            <Col key={item} span="12">
              <Image
                width="8rem"
                height="8rem"
                fit={item}
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <div className="text">{item}</div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 圆形图片

通过 `round` 属性可以设置图片变圆，注意当图片宽高不相等且 `fit` 为 `contain` 或 `scale-down` 时，将无法填充一个完整的圆形。

```jsx
import { Image, Row, Col } from 'mooli-mobile';

const Demo = () => {
  const fits = ['cover', 'fill', 'none', 'contain', 'scale-down'];
  return (
    <div className="demo-image">
      <Row gutter="20">
        {fits.map((item) => {
          return (
            <Col key={item} span="12">
              <Image
                round
                width="8rem"
                height="8rem"
                fit={item}
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
              <div className="text">{item}</div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 加载中提示

`Image` 组件提供了默认的加载中提示，支持通过 `loadingIndicator` 插槽自定义内容。

```jsx
import { Image, Row, Col, Loading } from 'mooli-mobile';

const Demo = () => {
  const renderLoadingIndicator = () => {
    return <Loading type="spinner" size="20" />;
  };
  return (
    <div className="demo-image">
      <Row gutter="20">
        <Col span="10">
          <Image width="105" height="105" />
          <div className="text">默认提示</div>
        </Col>
        <Col span="10">
          <Image
            width="105"
            height="105"
            loadingIndicator={renderLoadingIndicator()}
          />
          <div className="text">自定义提示</div>
        </Col>
      </Row>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 加载失败提示

`Image` 组件提供了默认的加载失败提示，支持通过 `error` 插槽自定义内容。

```jsx
import { Image, Row, Col, Loading } from 'mooli-mobile';

const Demo = () => {
  const renderErrorIndicator = () => {
    return <span>加载失败</span>;
  };
  return (
    <div className="demo-image">
      <Row gutter="20">
        <Col span="10">
          <Image
            width="105"
            height="105"
            src="https://img.yzcdn.cn/mooli/cat.jpeg"
          />
          <div className="text">默认提示</div>
        </Col>
        <Col span="10">
          <Image
            width="105"
            height="105"
            src="https://img.yzcdn.cn/mooli/cat.jpeg"
            errorIndicator={renderErrorIndicator()}
          />
          <div className="text">自定义提示</div>
        </Col>
      </Row>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | _string_ | - |
| fit | 图片填充模式 | _string_ | `fill` |
| alt | 替代文本 | _string_ | - |
| width | 宽度，默认单位为 `px` | _number \| string_ | - |
| height | 高度，默认单位为 `px` | _number \| string_ | - |
| radius | 圆角大小，默认单位为 `px` | _number \| string_ | `0` |
| round | 是否显示为圆形 | _boolean_ | `false` |
| showError | 是否展示图片加载失败提示 | _boolean_ | `true` |
| showLoading | 是否展示图片加载中提示 | _boolean_ | `true` |
| errorIcon | 失败时提示的[图标名称](#/components/icon/zh-CN)或图片链接 | _string_ | `photo-fail` |
| errorIndicator | 自定义错误指示符 | _string_ | `--` |
| loadingIcon | 加载时提示的[图标名称](#/components/icon/zh-CN)或图片链接 | _string_ | `photo` |
| loadingIndicator | 自定义加载指示符 | _string_ | `--` |
| iconSize | 加载图标和失败图标的大小 | _number \| string_ | `32px` |
| iconPrefix | 图标自定义类名 | _string_ | `--` |

### 图片填充模式 

| 名称       | 含义                                                   |
| ---------- | ------------------------------------------------------ |
| contain    | 保持宽高缩放图片，使图片的长边能完全显示出来           |
| cover      | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill       | 拉伸图片，使图片填满元素                               |
| none       | 保持图片原有尺寸                                       |
| scale-down | 取 `none` 或 `contain` 中较小的一个                    |

### Events

| 事件名  | 说明               | 回调参数            |
| ------- | ------------------ | ------------------- |
| onClick | 点击图片时触发     | _event: MouseEvent_ |
| onLoad  | 图片加载完毕时触发 | -                   |
| onError | 图片加载失败时触发 | -                   |

### Slots

| 名称    | 说明                 |
| ------- | -------------------- |
| default | 自定义图片下方的内容 |
