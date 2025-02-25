# Popover 气泡弹出框

### 介绍

弹出式的气泡菜单。

## 代码演示

### 基础用法

基本使用场景。

```jsx
import { Button, Popover } from 'mooli-mobile';

const Demo = () => {
  const list = [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }];
  const renderContent = () => {
    return (
      <ul className="popover-demo-list">
        {list.map((item, index) => (
          <li className="popover-demo-item mooli-hairline--bottom" key={index}>
            {item.text}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="demo-popover">
      <Popover content={renderContent()}>
        <Button type="primary">浅色风格</Button>
      </Popover>
      <Popover content={renderContent()} theme="dark">
        <Button type="info">深色风格</Button>
      </Popover>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 弹出位置

通过 `placement` 属性来控制气泡的弹出位置。

```jsx
import { Button, Popover } from 'mooli-mobile';

const Demo = () => {
  const renderContent = (content) => {
    return <div className="annular-demo-content ">{content}</div>;
  };
  return (
    <div className="demo-popover">
      <div className="annular-demo-list">
        <Popover
          content={renderContent('bottomLeft')}
          placement={'bottomLeft'}
          color="#eb2f96"
        >
          <Button size="mini">BL</Button>
        </Popover>
        <Popover
          content={renderContent('bottom')}
          placement={'bottom'}
          color="#13c2c2"
        >
          <Button size="mini">Bottom</Button>
        </Popover>
        <Popover
          content={renderContent('bottomRight')}
          placement={'bottomRight'}
          color="#722ed1"
        >
          <Button size="mini">BR</Button>
        </Popover>
      </div>
      <div className="annular-demo-list">
        <Popover
          content={renderContent('rightTop')}
          placement={'rightTop'}
          color="#2f54eb"
        >
          <Button size="mini">RT</Button>
        </Popover>
        <Popover
          content={renderContent('right')}
          placement={'right'}
          color="#eb2f96"
        >
          <Button size="mini">Right</Button>
        </Popover>
        <Popover
          content={renderContent('rightBottom')}
          placement={'rightBottom'}
          color="#fa541c"
        >
          <Button size="mini">RB</Button>
        </Popover>
      </div>
      <div className="annular-demo-list">
        <Popover
          content={renderContent('leftTop')}
          placement={'leftTop'}
          color="#faad14"
        >
          <Button size="mini">LT</Button>
        </Popover>
        <Popover
          content={renderContent('left')}
          placement={'left'}
          color="#a0d911"
        >
          <Button size="mini">Left</Button>
        </Popover>
        <Popover
          content={renderContent('leftBottom')}
          placement={'leftBottom'}
          color="#2db7f5"
        >
          <Button size="mini">LB</Button>
        </Popover>
      </div>
      <div className="annular-demo-list">
        <Popover
          content={renderContent('topLeft')}
          placement={'topLeft'}
          color="#87d068"
        >
          <Button size="mini">TL</Button>
        </Popover>
        <Popover content={renderContent('top')} placement={'top'} color="#f50">
          <Button size="mini">Top</Button>
        </Popover>
        <Popover
          content={renderContent('topRight')}
          placement={'topRight'}
          color="#108ee9"
        >
          <Button size="mini">TR</Button>
        </Popover>
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
| visible | 用于手动控制浮层显隐 | _boolean_ | `false` |
| content | 弹出框内容 | _string_ | `--` |
| placement | 弹出位置 | _string_ | `bottom` |
| theme | 主题风格，可选值为 `dark` | _string_ | `light` |
| color | 背景颜色 | _string_ | `--` |
| trigger | 触发方式，可选值为 `hover` `focus` `contextMenu` `mouseDown` | _string_ | `click` |
| destroy | 关闭是否销毁 | _boolean_ | `false` |
| duration | 动画时长，单位秒 | _number \| string_ | `0.3` |
| offset | 出现位置的偏移量 | _[number, number]_ | `0` |
| visibleArrow | 是否显示箭头 | _boolean_ | `true` |
| arrowSize | 箭头大小 | _number_ | `6` |
| delay | 显示/隐藏延迟时间 | _number_ | `100` |
| disabled | 是否禁用 | _boolean_ | `false` |
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

| 事件名          | 说明             | 回调参数            |
| --------------- | ---------------- | ------------------- |
| onBeforeShow    | 显示之前触发事件 | _event: MouseEvent_ |
| onAfterShow     | 显示之后触发事件 | _event: MouseEvent_ |
| onBeforeHide    | 隐藏之前触发事件 | _event: MouseEvent_ |
| onAfterHide     | 隐藏之后触发事件 | _event: MouseEvent_ |
| onVisibleChange | 显示隐藏触发事件 | _event: MouseEvent_ |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义菜单内容 |
