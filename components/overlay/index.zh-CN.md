# Overlay 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。大部分需求基本可以使用 Popup 组件完成，Overlay 组件更纯粹的用于处理简单的弹窗显示隐藏。

## 代码演示

### 基础用法

```jsx
import { Overlay, Button } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);
  return (
    <div className="demo-overlay">
      <Button type="info" onClick={() => setVisible(true)}>
        普通遮罩层按钮
      </Button>
      <Button type="info" onClick={() => setVisible1(true)}>
        嵌入内容
      </Button>
      <Overlay visible={visible} onClick={() => setVisible(false)} />
      <Overlay visible={visible1} onClick={() => setVisible1(false)}>
        <div className="wrapper">
          <div className="block"></div>
        </div>
      </Overlay>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 设置动画时长

通过 duration 设置显示隐藏动画时长，默认为 0.3s（单位秒 s）。

```jsx
import { Overlay, Button } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="demo-button">
      <Button type="info" onClick={() => setVisible(true)}>
        动画时长1s
      </Button>
      <Overlay
        visible={visible}
        duration={1}
        onClick={() => setVisible(false)}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 销毁

通过 destory 设置遮罩层是否销毁，默认不销毁。

```jsx
import { Overlay, Button } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="demo-button">
      <Button type="info" onClick={() => setVisible(true)}>
        销毁遮罩层
      </Button>
      <Overlay visible={visible} destory onClick={() => setVisible(false)} />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否展示遮罩层 | _boolean_ | `false` |
| zIndex | z-index 层级 | _number \| string_ | `1` |
| duration | 动画时长，单位秒 | _number \| string_ | `0.3` |
| destory | 是否销毁 | _boolean_ | `false` |
| lockScroll | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | _boolean_ | `true` |
| className | 附加类名 | _string_ | `--` |
| style | 附加样式 | _objcet_ | `--` |

### Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| click  | 点击时触发 | _event: Event_ |

### Slots

| 名称    | 说明                               |
| ------- | ---------------------------------- |
| default | 默认插槽，用于在遮罩层上方嵌入内容 |
