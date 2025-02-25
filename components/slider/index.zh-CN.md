# Slider 滑块

### 介绍

滑动输入条，用于在给定的范围内选择一个值。

## 代码演示

### 基础用法

可以通过 `value` 绑定滑块的值，通过 `onChange` 改变滑块的进度变化。

```jsx
import { Slider, Toast } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState(50);
  const onChange = (value) => {
    setValue(value);
  };
  const onDragEnd = () => {
    Toast('当前值：' + value);
  };
  return (
    <div className="demo-slider">
      <Slider value={value} onChange={onChange} onDragEnd={onDragEnd} />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 双滑块

添加 `range` 属性就可以开启双滑块模式，确保 `value` 的值是一个数组。

```jsx
import { Slider, Toast } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState([20, 60]);
  const onChange = (value) => {
    setValue(value);
  };
  const onDragEnd = () => {
    Toast('当前值：' + value);
  };
  return (
    <div className="demo-slider">
      <Slider value={value} range onChange={onChange} onDragEnd={onDragEnd} />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 指定选择范围

通过 `min`、`max` 属性可以设置滑块的选择范围。

```jsx
import { Slider, Toast } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState(0);
  const onChange = (value) => {
    setValue(value);
  };
  const onDragEnd = () => {
    Toast('当前值：' + value);
  };
  return (
    <div className="demo-slider">
      <Slider
        value={value}
        min="-50"
        max="50"
        onChange={onChange}
        onDragEnd={onDragEnd}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 禁用

通过 `disabled` 属性可禁用滑块。

```jsx
import { Slider, Toast } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState(50);
  const onChange = (value) => {
    setValue(value);
  };
  const onDragEnd = () => {
    Toast('当前值：' + value);
  };
  return (
    <div className="demo-slider">
      <Slider
        value={value}
        disabled
        onChange={onChange}
        onDragEnd={onDragEnd}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 指定步长

通过 `step` 属性可设置滑块的步长（默认值：1）。

```jsx
import { Slider, Toast } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState(50);
  const onChange = (value) => {
    setValue(value);
  };
  const onDragEnd = () => {
    Toast('当前值：' + value);
  };
  return (
    <div className="demo-slider">
      <Slider
        value={value}
        step={5}
        onChange={onChange}
        onDragEnd={onDragEnd}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义样式

可通过 `barHeight`、`activeColor` 等属性自定义滑块的样式。

```jsx
import { Slider, Toast } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState(50);
  const onChange = (value) => {
    setValue(value);
  };
  const onDragEnd = () => {
    Toast('当前值：' + value);
  };
  return (
    <div className="demo-slider">
      <Slider
        value={value}
        onChange={onChange}
        onDragEnd={onDragEnd}
        barHeight="4px"
        activeColor="#ee0a24"
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义按钮

可通过 `button` 插槽定制化按钮。

```jsx
import { Slider, Toast } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState(50);
  const onChange = (value) => {
    setValue(value);
  };
  const onDragEnd = () => {
    Toast('当前值：' + value);
  };
  const renderButton = () => {
    return <div className="custom-button">{value}</div>;
  };
  return (
    <div className="demo-slider">
      <Slider
        value={value}
        onChange={onChange}
        onDragEnd={onDragEnd}
        button={renderButton()}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 垂直方向

设置 `vertical` 属性后，滑块会垂直展示，且高度为 100% 父元素高度。

```jsx
import { Slider, Toast } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState(50);
  const onChange = (value) => {
    setValue(value);
  };
  const onDragEnd = () => {
    Toast('当前值：' + value);
  };

  const [rangeValue, setRangeValue] = React.useState([20, 60]);
  const onChangeRange = (value) => {
    setRangeValue(value);
  };
  const onDragEndRange = () => {
    Toast('当前值：' + rangeValue);
  };
  return (
    <div className="demo-slider" style={{ height: 150 }}>
      <Slider
        value={value}
        vertical
        onChange={onChange}
        onDragEnd={onDragEnd}
        style={{ marginLeft: 30 }}
      />
      <Slider
        value={rangeValue}
        range
        vertical
        onChange={onChangeRange}
        onDragEnd={onDragEndRange}
        style={{ marginLeft: 100 }}
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
| value | 当前进度百分比 | _number \| array_ | `0` |
| max | 最大值 | _number \| string_ | `100` |
| min | 最小值 | _number \| string_ | `0` |
| step | 步长 | _number \| string_ | `1` |
| barHeight | 进度条高度，默认单位为`px` | _number \| string_ | `2px` |
| buttonSize | 滑块按钮大小，默认单位为`px` | _number \| string_ | `24px` |
| activeColor | 进度条激活态颜色 | _string_ | `#1989fa` |
| inactiveColor | 进度条非激活态颜色 | _string_ | `#e5e5e5` |
| range | 是否开启双滑块模式 | _boolean_ | `false` |
| disabled | 是否禁用滑块 | _boolean_ | `false` |
| vertical | 是否垂直展示 | _boolean_ | `false` |

### Events

| 事件名      | 说明                     | 回调参数        |
| ----------- | ------------------------ | --------------- |
| onChange    | 进度变化且结束拖动后触发 | value: 当前进度 |
| onDragStart | 开始拖动时触发           | -               |
| onDragEnd   | 结束拖动时触发           | -               |

### Slots

| 名称   | 说明           |
| ------ | -------------- |
| button | 自定义滑动按钮 |
