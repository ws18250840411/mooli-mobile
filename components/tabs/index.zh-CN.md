# Tab 标签页

### 基础用法

通过 `value` 绑定当前激活标签对应的索引值，默认情况下启用第一个标签。当绑定`value` 才是受控组件，默认为不受控。

```jsx
import { Tabs } from 'mooli-mobile';
const { TabPane } = Tabs;

const Demo = () => {
  const [value, setValue] = React.useState(1);
  return (
    <div className="demo-tabs">
      <Tabs value={value} onChange={(index) => setValue(index)}>
        <TabPane title="标签 1">内容 1</TabPane>
        <TabPane title="标签 2">内容 2</TabPane>
        <TabPane title="标签 3">内容 3</TabPane>
        <TabPane title="标签 4">内容 4</TabPane>
      </Tabs>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 标签栏滚动

标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。

```jsx
import { Tabs } from 'mooli-mobile';
const { TabPane } = Tabs;

const Demo = () => {
  return (
    <div className="demo-tabs">
      <Tabs defaultValue="5">
        <TabPane title="标签 1">内容 1</TabPane>
        <TabPane title="标签 2">内容 2</TabPane>
        <TabPane title="标签 3">内容 3</TabPane>
        <TabPane title="标签 4">内容 4</TabPane>
        <TabPane title="标签 5">内容 5</TabPane>
        <TabPane title="标签 6">内容 6</TabPane>
        <TabPane title="标签 7">内容 7</TabPane>
        <TabPane title="标签 8">内容 8</TabPane>
      </Tabs>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 禁用标签

设置 `disabled` 属性即可禁用标签，如果需要监听禁用标签的点击事件，可以在 `Tabs` 上监听`disabled` 事件。

```jsx
import { Tabs } from 'mooli-mobile';
const { TabPane } = Tabs;

const Demo = () => {
  const handleDisabled = (index) => {
    console.log(`disable index: ${index}`);
  };
  return (
    <div className="demo-tabs">
      <Tabs defaultValue="2" onDisabled={handleDisabled}>
        <TabPane title="标签 1">内容 1</TabPane>
        <TabPane title="标签 2" disabled>
          内容 2
        </TabPane>
        <TabPane title="标签 3">内容 3</TabPane>
        <TabPane title="标签 4">内容 4</TabPane>
      </Tabs>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 样式风格

`Tabs` 支持两种样式风格：`line` 和`card`，默认为 `line` 样式，可以通过 `type` 属性切换样式风格。

```jsx
import { Tabs } from 'mooli-mobile';
const { TabPane } = Tabs;

const Demo = () => {
  return (
    <div className="demo-tabs">
      <Tabs type="card">
        <TabPane title="标签 1">内容 1</TabPane>
        <TabPane title="标签 2">内容 2</TabPane>
        <TabPane title="标签 3">内容 3</TabPane>
        <TabPane title="标签 4">内容 4</TabPane>
      </Tabs>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 点击事件

可以在 `Tabs` 上绑定 `click` 事件，事件传参为标签对应的标识符和标题。

```jsx
import { Tabs, Toast } from 'mooli-mobile';
const { TabPane } = Tabs;

const Demo = () => {
  const handleClick = (index) => {
    Toast(`当前下标值为：${index}`);
  };
  return (
    <div className="demo-tabs">
      <Tabs onClick={handleClick}>
        <TabPane title="标签 1">内容 1</TabPane>
        <TabPane title="标签 2">内容 2</TabPane>
      </Tabs>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 粘性布局

通过 `sticky` 属性可以开启粘性布局，粘性布局下，标签页滚动到顶部时会自动吸顶。

```jsx
import { Tabs, Toast } from 'mooli-mobile';
const { TabPane } = Tabs;

const Demo = () => {
  return (
    <div className="demo-tabs">
      <Tabs sticky>
        <TabPane title="标签 1">内容 1</TabPane>
        <TabPane title="标签 2">内容 2</TabPane>
        <TabPane title="标签 3">内容 3</TabPane>
        <TabPane title="标签 4">内容 4</TabPane>
      </Tabs>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义标签

通过 `title` 插槽可以自定义标签内容。

```jsx
import { Tabs, Icon } from 'mooli-mobile';
const { TabPane } = Tabs;

const Demo = () => {
  return (
    <div className="demo-tabs">
      <Tabs>
        <TabPane
          title={
            <span className="demo-tabpane-title">
              <Icon name="chat-o" />
              选项 1
            </span>
          }
        >
          内容 1
        </TabPane>
        <TabPane
          title={
            <span className="demo-tabpane-title">
              <Icon name="user-o" />
              选项 2
            </span>
          }
        >
          内容 2
        </TabPane>
      </Tabs>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 切换动画

通过 `animated` 属性可以开启切换标签内容时的转场动画。

```jsx
import { Tabs } from 'mooli-mobile';
const { TabPane } = Tabs;

const Demo = () => {
  return (
    <div className="demo-tabs">
      <Tabs animated swipeable>
        <TabPane title="标签 1">内容 1</TabPane>
        <TabPane title="标签 2">内容 2</TabPane>
        <TabPane title="标签 3">内容 3</TabPane>
        <TabPane title="标签 4">内容 4</TabPane>
        <TabPane title="标签 5">内容 5</TabPane>
        <TabPane title="标签 6">内容 6</TabPane>
      </Tabs>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 垂直用法

设置 `disabled` 属性，当标签高度超出的父类容器高度时，标签栏可以在垂直方向上滚动，切换时会自动将当前标签居中。

```jsx
import { Tabs } from 'mooli-mobile';
const { TabPane } = Tabs;

const Demo = () => {
  return (
    <div className="demo-tabs" style={{ height: 220 }}>
      <Tabs direction="vertical" color="#faad14" animated swipeable border>
        <TabPane title="标签 1">内容 1</TabPane>
        <TabPane title="标签 2">内容 2</TabPane>
        <TabPane title="标签 3">内容 3</TabPane>
        <TabPane title="标签 4">内容 4</TabPane>
        <TabPane title="标签 5">内容 5</TabPane>
        <TabPane title="标签 6">内容 6</TabPane>
        <TabPane title="标签 7">内容 7</TabPane>
        <TabPane title="标签 8">内容 8</TabPane>
      </Tabs>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 绑定当前选中标签的标识符 | _number \| string_ | `0` |
| defaultValue | 选中的默认值 | _number \| string_ | `0` |
| type | 样式风格类型，可选值为 `card` | _string_ | `line` |
| color | 标签主题色 | _string_ | `#ee0a24` |
| background | 标签栏背景色 | _string_ | `white` |
| duration | 动画时间，单位秒 | _number \| string_ | `0.3` |
| lineWidth | 底部条宽度，默认单位 `px` | _number \| string_ | `40px` |
| lineHeight | 底部条高度，默认单位 `px` | _number \| string_ | `3px` |
| lineColor | 底部条主题色 | _string_ | `#ee0a24` |
| animated | 是否开启切换标签内容时的转场动画 | _boolean_ | `false` |
| border | 是否显示标签栏外边框，仅在 `type="line"` 时有效 | _boolean_ | `false` |
| ellipsis | 是否省略过长的标题文字 | _boolean_ | `true` |
| sticky | 是否使用粘性定位布局 | _boolean_ | `false` |
| swipeable | 是否开启手势滑动切换 | _boolean_ | `false` |
| offsetTop | 粘性定位布局下与顶部的最小距离，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `0` |
| titleActiveColor | 标题选中态颜色 | _string_ | - |
| titleInactiveColor | 标题默认态颜色 | _string_ | - |

### Tab Props

| 参数       | 说明                       | 类型               | 默认值       |
| ---------- | -------------------------- | ------------------ | ------------ |
| title      | 标题                       | _string_           | -            |
| disabled   | 是否禁用标签               | _boolean_          | `false`      |
| dot        | 是否在标题右上角显示小红点 | _boolean_          | `false`      |
| info       | 图标右上角徽标的内容       | _number \| string_ | -            |
| name       | 标签名称，作为匹配的标识符 | _number \| string_ | 标签的索引值 |
| titleStyle | 自定义标题样式             | _any_              | -            |
| titleClass | 自定义标题类名             | _any_              | -            |

### Tabs Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onClick | 点击标签时触发 | name：标识符，title：标题 |
| onChange | 当前激活的标签改变时触发 | name：标识符，title：标题 |
| onDisabled | 点击被禁用的标签时触发 | name：标识符，title：标题 |
| onSticktScroll | 滚动时触发，仅在 sticky 模式下生效 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |

### Tab Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 标签页内容 |
| title   | 自定义标题 |
