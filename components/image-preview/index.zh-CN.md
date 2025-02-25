# ImagePreview 图片预览

### 介绍

图片放大预览，支持函数调用和组件调用两种方式。

### 组件调用

通过组件调用 ImagePreview 时，可以通过下面的方式进行注册。

```jsx
import { Cell, ImagePreview } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  const images = [
    'https://img01.yzcdn.cn/vant/apple-1.jpg',
    'https://img01.yzcdn.cn/vant/apple-2.jpg',
    'https://img01.yzcdn.cn/vant/apple-3.jpg',
    'https://img01.yzcdn.cn/vant/apple-4.jpg',
  ];
  return (
    <div className="demo-popup">
      <Cell arrow onClick={() => setVisible(true)}>
        组件调用
      </Cell>
      <ImagePreview
        visible={visible}
        images={images}
        onClose={() => setVisible(false)}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 函数调用

ImagePreview 是一个函数，调用函数后会直接在页面中展示图片预览界面。ImagePreview 支持传入配置对象，并通过 `initial` 选项指定图片的初始位置（索引值）。

```jsx
import { Cell, ImagePreview, Toast } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  const images = [
    'https://img01.yzcdn.cn/vant/apple-1.jpg',
    'https://img01.yzcdn.cn/vant/apple-2.jpg',
    'https://img01.yzcdn.cn/vant/apple-3.jpg',
    'https://img01.yzcdn.cn/vant/apple-4.jpg',
  ];
  return (
    <div className="demo-popup">
      <Cell
        arrow
        onClick={() => {
          ImagePreview.create({
            images,
          });
        }}
      >
        基础用法
      </Cell>
      <Cell
        arrow
        onClick={() => {
          ImagePreview.create({
            closeable: true,
            showIndicators: true,
            showIndex: false,
            maskClosable: false,
            images,
          });
        }}
      >
        展示关闭按钮
      </Cell>
      <Cell
        arrow
        onClick={() => {
          ImagePreview.create({
            initial: 2,
            images,
          });
        }}
      >
        指定初始位置
      </Cell>
      <Cell
        arrow
        onClick={() => {
          ImagePreview.create({
            images,
            onChange(index) {
              Toast(`当前索引下标值：${index}`);
            },
          });
        }}
      >
        监听切换事件
      </Cell>
      <Cell
        arrow
        onClick={() => {
          ImagePreview.create({
            images,
            onClose() {
              Toast('关闭');
            },
          });
        }}
      >
        监听关闭事件
      </Cell>
      <Cell
        arrow
        onClick={() => {
          const igInstance = ImagePreview.create({
            images,
          });
          setTimeout(() => igInstance.close(), 3000);
        }}
      >
        异步 close 关闭
      </Cell>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示弹出层 | _boolean_ | `false` |
| images | 需要预览的图片 URL 数组 | _string[]_ | `[]` |
| initial | 图片预览起始位置索引 | _number \| string_ | `0` |
| swipeDuration | 动画时长，单位为`ms` | _number \| string_ | `300` |
| showIndex | 是否显示页码 | _boolean_ | `true` |
| showIndicators | 是否显示轮播指示器 | _boolean_ | `false` |
| loop | 是否开启循环播放 | _boolean_ | `true` |
| lock | 是否锁定背景滚动 | _boolean_ | `true` |
| destroy | 隐藏销毁组件 | _boolean_ | `false` |
| className | 自定义类名 | _any_ | - |
| closeable | 是否显示关闭图标 | _boolean_ | `false` |
| closeIcon | 关闭图标名称或图片链接 | _string_ | `clear` |
| closeIconPosition | 关闭图标位置，可选值为`top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |
| maskClosable | 点击蒙层是否关闭 | _boolean_ | `true` |

### Events

通过组件调用 `ImagePreview` 时，支持以下事件：

| 事件     | 说明               | 回调参数              |
| -------- | ------------------ | --------------------- |
| onClose  | 关闭时触发         | -                     |
| onChange | 切换当前图片时触发 | index: 当前图片的索引 |

### onChange 回调参数

| 参数名 | 说明             | 类型     |
| ------ | ---------------- | -------- |
| index  | 当前图片的索引值 | _number_ |
