# Progress 进度条

### 介绍

用于展示操作的当前进度。

## 代码演示

### 基础用法

进度条默认为蓝色，使用 `percentage` 属性来设置当前进度。

```jsx
import { Progress } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-progress">
      <Progress percentage="50" />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 使用 CSS 过渡动画

设置 `cssTransition` 属性来开启 css3 动画。

```jsx
import { Progress } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-progress">
      <Progress cssTransition percentage="50" />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 线条粗细

通过 `stroke-width` 可以设置进度条的粗细。

```jsx
import { Progress } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-progress">
      <Progress percentage="50" strokeWidth="8" />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 置灰

设置 `inactive` 属性后进度条将置灰。

```jsx
import { Progress } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-progress">
      <Progress percentage="50" inactive />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 样式定制

可以使用 `pivotText` 属性自定义文字，`color` 属性自定义进度条颜色。

```jsx
import { Progress } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-progress">
      <Progress pivotText="橙色" color="#f2826a" percentage="25" />
      <Progress pivotText="红色" color="#ee0a24" percentage="50" />
      <Progress
        pivotText="紫色"
        pivotColor="#7232dd"
        color="linear-gradient(to right, #be99ff, #7232dd)"
        percentage="75"
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义文字

通过插槽`children`可自定义进度条文字提示。

```jsx
import { Progress } from 'mooli-mobile';

const Demo = () => {
  const cusText = (progress) => {
    return <span className="demo-progress-custext">剩余{progress}</span>;
  };
  return (
    <div className="demo-progress">
      <Progress
        percentage="50"
        strokeWidth="16"
        showPivot={false}
        className="demo-cusprogress"
      >
        {cusText}
      </Progress>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数        | 说明                       | 类型               | 默认值       |
| ----------- | -------------------------- | ------------------ | ------------ |
| percentage  | 进度百分比                 | _number \| string_ | `0`          |
| strokeWidth | 进度条粗细，默认单位为`px` | _number \| string_ | `4px`        |
| color       | 进度条颜色                 | _string_           | `#1989fa`    |
| trackColor  | 轨道颜色                   | _string_           | `#e5e5e5`    |
| pivotText   | 进度文字内容               | _string_           | 百分比       |
| pivotColor  | 进度文字背景色             | _string_           | 同进度条颜色 |
| textColor   | 进度文字颜色               | _string_           | `white`      |
| inactive    | 是否置灰                   | _boolean_          | `false`      |
| showPivot   | 是否显示进度文字           | _boolean_          | `true`       |

### Slots

| 名称    | 内容           |
| ------- | -------------- |
| default | 自定义文字内容 |
