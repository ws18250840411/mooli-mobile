# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

## 代码演示

### 基础用法

通过 `visible` 控制弹出层是否展示。

```jsx
import { Popup, Cell } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="demo-popup">
      <Cell arrow onClick={() => setVisible(!visible)}>
        展示弹出层
      </Cell>
      <Popup
        visible={visible}
        duration={0.5}
        round
        onClickMask={() => setVisible(false)}
        onOpened={()=>{
          console.log('打开 popup 弹出层后触发')
        }}
        onClosed={()=>{
          console.log('关闭 popup 弹出层后触发')
        }}
      >
        <div className="wrapper">
          <div className="block"></div>
        </div>
      </Popup>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 弹出位置

通过 `position` 属性设置弹出位置，默认居中弹出，可以设置为 `top`、`bottom`、`left`、`right`、`center`。

```jsx
import { Popup, Cell } from 'mooli-mobile';
const visibles = {
  top: false,
  left: false,
  right: false,
  bottom: false,
};
const Demo = () => {
  const [visible, setVisible] = React.useState(visibles);
  const positions = [
    {
      title: '顶部弹出',
      value: 'top',
    },
    {
      title: '左侧弹出',
      value: 'left',
    },
    {
      title: '右侧弹出',
      value: 'right',
    },
    {
      title: '底部弹出',
      value: 'bottom',
    },
  ];

  return (
    <div className="demo-popup">
      {positions.map((item) => {
        return (
          <React.Fragment key={item.value}>
            <Cell
              arrow
              onClick={() => {
                let curVisibles = { ...visibles };
                curVisibles[item.value] = true;
                setVisible({ ...curVisibles });
              }}
            >
              {item.title}
            </Cell>
            <Popup
              visible={visible[item.value]}
              position={item.value}
              onClickMask={() => setVisible(false)}
            >
              <div className="wrapper">
                <div className="block"></div>
              </div>
            </Popup>
          </React.Fragment>
        );
      })}
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 关闭图标

设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `closeIcon` 属性自定义图标，使用 `closeIconPosition` 属性可以自定义图标位置。

```jsx
import { Popup, Cell } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  const [closeIcon, setCloseIcon] = React.useState();
  const [closeIconPosition, setCloseIconPosition] = React.useState();
  const close = () => setVisible(false);
  return (
    <div className="demo-popup">
      <Cell
        arrow
        onClick={() => {
          setVisible(!visible);
          setCloseIcon();
          setCloseIconPosition();
        }}
      >
        关闭图标
      </Cell>
      <Cell
        arrow
        onClick={() => {
          setVisible(!visible);
          setCloseIcon('close');
          setCloseIconPosition();
        }}
      >
        自定义图标
      </Cell>
      <Cell
        arrow
        onClick={() => {
          setVisible(!visible);
          setCloseIcon();
          setCloseIconPosition('top-left');
        }}
      >
        图标位置
      </Cell>
      <Popup
        visible={visible}
        position="bottom"
        closeable
        closeIcon={closeIcon}
        closeIconPosition={closeIconPosition}
        onClickIcon={() => setVisible(false)}
        onClickMask={() => setVisible(false)}
      >
        <div className="wrapper">
          <div className="block"></div>
        </div>
      </Popup>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 圆角弹窗

设置 `round` 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```jsx
import { Popup, Cell } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="demo-popup">
      <Cell arrow onClick={() => setVisible(!visible)}>
        圆角弹窗
      </Cell>
      <Popup
        visible={visible}
        round
        position="bottom"
        onClickMask={() => setVisible(false)}
      >
        <div className="wrapper">
          <div className="block"></div>
        </div>
      </Popup>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义事件

通过 `transition` 或者 `maskTransition` 属性可以灵活自定义 `popup` 面板和 `mask` 蒙层动画函数，实现更丰富的动画效果。此外还可以通过 `props` 或则 `maskProps` 属性定义 `popup` 面板和 `mask` 蒙层所有事件函数。

```jsx
import { Popup, Cell } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="demo-popup">
      <Cell arrow onClick={() => setVisible(!visible)}>
        自定义事件
      </Cell>
      <Popup
        visible={visible}
        round
        position="bottom"
        onClickMask={() => setVisible(false)}
        onClick={() => {
          console.log('popup面板点击事件');
        }}
        maskTransition={{
          onEnter: () => {
            console.log('mask蒙层动画开始后执行');
          },
          onExited: () => {
            console.log('mask蒙层动画结束后执行');
          },
        }}
        maskProps={{
          onDoubleClick: () => {
            console.log('mask蒙层双击事件');
          },
        }}
      >
        <div className="wrapper">
          <div className="block"></div>
        </div>
      </Popup>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示弹出层 | _boolean_ | `false` |
| destroy | 隐藏销毁组件 | _boolean_ | `false` |
| prefixCls | 样式前缀 | _string_ | - |
| position | 弹出位置，可选值为 `top` `bottom` `right` `left` | _string_ | `center` |
| mask | 是否显示遮罩层 | _boolean_ | `true` |
| disableMask | 禁用 mask | _boolean_ | `false` |
| duration | 动画时长，单位秒 | _number \| string_ | `0.3` |
| round | 是否显示圆角 | _boolean_ | `false` |
| zIndex | z-index 层级值 | _boolean_ | `10` |
| fixed | 使用 fixed 定位 popup | _boolean_ | `true` |
| lock | 是否锁定背景滚动 | _boolean_ | `true` |
| lazy | 是否在显示弹层时才渲染节点 | _boolean_ | `true` |
| closeable | 是否显示关闭图标 | _boolean_ | `false` |
| closeIcon | 关闭[图标名称](#/components/icon/zh-CN)或图片链接 | _string_ | `cross` |
| closeIconPosition | 关闭图标位置，可选值为 `top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |
| transition | popup 动画 | _string_ | - |
| component | 指定 popup 挂载的节点 | _string \| Element_ | - |
| rootComponent | 指定根 root 挂载的节点 | _string \| Element_ | - |
| rootClassName | 自定义 root 类名 | _string \| Array \| object_ | - |
| rootStyle | 自定义 root 样式 | _object_ | - |
| rootProps | root 元素属性 | _object_ | - |
| maskComponent | 指定 mask 挂载的节点 | _string \| Element_ | - |
| maskTransition | mask 动画（如需在动画周期内触发，请定义相关动画函数） | _string_ | - |
| maskClassName | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| maskStyle | 自定义遮罩层样式 | _object_ | - |
| maskProps | mask 元素属性（如需监听更多事件，可以在该属性内定义） | _object_ | - |

### Events

| 事件名      | 说明                    | 回调参数            |
| ----------- | ----------------------- | ------------------- |
| onClick     | 点击 popup 弹出层时触发 | _event: MouseEvent_ |
| onClickMask | 点击遮罩层时触发        | _event: MouseEvent_ |
| onClickIcon | 点击关闭图标时触发      | _event: MouseEvent_ |
| onOpened | 打开 popup 弹出层后触发      | _ |
| onClosed | 关闭 popup 弹出层后触发      | _ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 弹窗内容 |
