# Sticky 粘性布局

### 介绍

Sticky 组件与 CSS 中`position: sticky`属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

## 代码演示

### 基础用法

将内容包裹在 `Sticky` 组件内即可。

```jsx
import { Sticky, Button } from 'mooli-mobile';

const Demo = () => {
  const onScroll = (scrollTop, isFixed) => {
    console.log(scrollTop);
  };
  return (
    <div className="demo-sticky">
      <Sticky onScroll={onScroll}>
        <Button type="primary">基础用法</Button>
      </Sticky>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 吸顶距离

通过 `offsetTop` 属性可以设置组件在吸顶时与顶部的距离。

```jsx
import { Sticky, Button } from 'mooli-mobile';

const Demo = () => {
  const onChange = (isFixed) => {
    console.log(`isFixed: ${isFixed}`);
  };
  return (
    <div className="demo-sticky">
      <Sticky offsetTop="50" onChange={onChange}>
        <Button style={{ marginLeft: 98 }} type="primary">
          基础用法
        </Button>
      </Sticky>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 指定容器

通过 `container` 属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部。

```jsx
import { Sticky, Button } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-sticky">
      <div id="container" style={{ height: 150, backgroundColor: '#f5f5f5' }}>
        <Sticky container="container">
          <Button style={{ marginLeft: 192 }} type="primary">
            基础用法
          </Button>
        </Sticky>
      </div>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offsetTop | 吸顶时与顶部的距离，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `0` |
| zIndex | 吸顶时的 z-index | _number \| string_ | `99` |
| container | 容器对应的 HTML 节点 | _Element_ | - |

### Events

| 事件名   | 说明                 | 回调参数                                  |
| -------- | -------------------- | ----------------------------------------- |
| onChange | 当吸顶状态改变时触发 | _isFixed: boolean_                        |
| onScroll | 滚动时触发           | _{ scrollTop: number, isFixed: boolean }_ |
