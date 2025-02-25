# NoticeBar 通知栏

### 介绍

用于循环播放展示一组消息通知。

## 代码演示

### 基础用法

通过 `text` 属性设置通知栏的内容，通过 `leftIcon` 属性设置通知栏左侧的图标。`cssTransition` 属性设置通知栏采用纯 css3 实现动画效果（注：纯 css 实现会有延迟间隔）。

```jsx
import { NoticeBar } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-notice-bar">
      <NoticeBar
        leftIcon="volume-o"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
      <NoticeBar
        cssTransition
        leftIcon="volume-o"
        text="所有的程序员都是编剧，所有的计算机都是烂演员。"
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，通过 `scrollable` 属性可以控制该行为。

```jsx
import { NoticeBar } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-notice-bar">
      <NoticeBar text="注释代码很像清洁你的厕所——你不想干，但如果你做了，这绝对会给你和你的客人带来更愉悦的体验。" />
      <NoticeBar
        scrollable={false}
        text="注释代码很像清洁你的厕所——你不想干，但如果你做了，这绝对会给你和你的客人带来更愉悦的体验。"
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 多行展示

文字较长时，可以通过设置 `wrapable` 属性来开启多行展示。

```jsx
import { NoticeBar } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-notice-bar">
      <NoticeBar
        wrapable
        scrollable={false}
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 通知栏模式

通知栏支持 `closeable` 和 `link` 两种模式。

```jsx
import { NoticeBar } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-notice-bar">
      <NoticeBar
        mode="closeable"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
      <NoticeBar
        mode="link"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义样式

通过 `color` 属性设置文本颜色，通过 `background` 属性设置背景色。

```jsx
import { NoticeBar } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-notice-bar">
      <NoticeBar
        color="#1989fa"
        background="#ecf9ff"
        leftIcon="info-o"
        rightIcon="fail"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 垂直滚动

通过 `vertical` 属性设置可以实现垂直滚动的效果。

```jsx
import { NoticeBar } from 'mooli-mobile';

const Demo = () => {
  const noticebarList = ['内容 1', '内容 2', '内容 3', '内容 4', '内容 5'];
  return (
    <div className="demo-notice-bar">
      <NoticeBar leftIcon="volume-o" vertical>
        {noticebarList.map((item) => (
          <NoticeBar.Item key={item} className="demo-notice-bar-swipe">
            {item}
          </NoticeBar.Item>
        ))}
      </NoticeBar>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 通知栏模式，可选值为 `closeable` `link` | _string_ | `''` |
| cssTransition | 纯 css3 keyframe 实现滚动动画 | _boolean_ | `false` |
| text | 通知文本内容 | _string_ | `''` |
| color | 通知文本颜色 | _string_ | `#f60` |
| vertical | 是否为纵向滚动 | _boolean_ | `false` |
| background | 滚动条背景 | _string_ | `#fff7cc` |
| leftIcon | 左侧[图标名称](#/components/icon/zh-CN)或图片链接 | _string_ | - |
| rightIcon | 右侧[图标名称](#/components/icon/zh-CN)或图片链接 | _string_ | - |
| delay | 动画延迟时间 (s) | _number \| string_ | `1` |
| speed | 滚动速率 (px/s) | _number \| string_ | `60` |
| scrollable | 是否开启滚动播放，内容长度溢出时默认开启 | _boolean_ | - |
| wrapable | 是否开启文本换行，只在禁用滚动时生效 | _boolean_ | `false` |

### Events

| 事件名   | 说明                         | 回调参数       |
| -------- | ---------------------------- | -------------- |
| onClick  | 点击通知栏时触发             | _event: Event_ |
| onClose  | 关闭通知栏时触发             | _event: Event_ |
| onReplay | 每当滚动栏重新开始滚动时触发 | -              |

### Slots

| 名称      | 内容           |
| --------- | -------------- |
| default   | 通知文本内容   |
| leftIcon  | 自定义左侧图标 |
| rightIcon | 自定义右侧图标 |
