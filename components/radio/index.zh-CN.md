# Radio 单选框

### 介绍

用于在多个选项中选择单个结果。

## 代码演示

### 基础用法

通过 `value` 绑定值当前选中项的 name。

```jsx
import { Radio, Icon } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(false);
  const onChange = () => {
    setCheck(true);
  };

  return (
    <div className="demo-radio-group">
      <Radio value={check} onChange={onChange}>
        单选框
      </Radio>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 组合使用

通过 `value` 绑定值当前选中项的 name。

```jsx
import { Radio, Icon } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState('1');
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-radio-group">
      <Radio.Group value={check} onChange={onChange}>
        <Radio name="1">单选框 1</Radio>
        <Radio name="2">单选框 2</Radio>
        <Radio name="3" disabled>
          单选框 3
        </Radio>
      </Radio.Group>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 水平排列

将 `direction` 属性设置为 `horizontal` 后，单选框组会变成水平排列。

```jsx
import { Radio, Icon } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState('1');
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-radio-group">
      <Radio.Group value={check} direction="horizontal" onChange={onChange}>
        <Radio name="1">单选框 1</Radio>
        <Radio name="2">单选框 2</Radio>
      </Radio.Group>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 禁用状态

通过 `disabled` 属性禁止选项切换，在 `Radio` 上设置 `disabled` 可以禁用单个选项。

```jsx
import { Radio, Icon } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState('1');
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-radio-group">
      <Radio.Group value={check} disabled onChange={onChange}>
        <Radio name="1">单选框 1</Radio>
        <Radio name="2">单选框 2</Radio>
      </Radio.Group>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义形状

将 `shape` 属性设置为 `square`，单选框的形状会变成方形。

```jsx
import { Radio, Icon } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState('1');
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-radio-group">
      <Radio.Group value={check} onChange={onChange}>
        <Radio name="1" shape="square">
          单选框 1
        </Radio>
        <Radio name="2" shape="square">
          单选框 2
        </Radio>
      </Radio.Group>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义颜色

通过 `checkedColor` 属性设置选中状态的图标颜色。

```jsx
import { Radio, Icon } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState('1');
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-radio-group">
      <Radio.Group value={check} onChange={onChange}>
        <Radio name="1" checkedColor="#ee0a24">
          单选框 1
        </Radio>
        <Radio name="2" checkedColor="#ee0a24">
          单选框 2
        </Radio>
      </Radio.Group>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义大小

通过 `iconSize` 属性可以自定义图标的大小。

```jsx
import { Radio, Icon } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState('1');
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-radio-group">
      <Radio.Group value={check} onChange={onChange}>
        <Radio name="1" iconSize="24px">
          单选框 1
        </Radio>
        <Radio name="2" iconSize="24px">
          单选框 2
        </Radio>
      </Radio.Group>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义图标

通过 `icon` 插槽自定义图标。

```jsx
import { Radio, Icon } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState('1');
  const onChange = (value) => {
    setCheck(value);
  };
  const iconRender = (checked) => {
    const imgSrc = checked
      ? 'https://img.yzcdn.cn/vant/user-active.png'
      : 'https://img.yzcdn.cn/vant/user-inactive.png';
    return <img src={imgSrc} />;
  };
  return (
    <div className="demo-radio-group">
      <Radio.Group value={check} onChange={onChange}>
        <Radio name="1" icon={iconRender}>
          单选框 1
        </Radio>
        <Radio name="2" icon={iconRender}>
          单选框 2
        </Radio>
      </Radio.Group>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 禁用文本点击

设置 `labelDisabled` 属性后，点击图标以外的内容不会触发单选框切换。

```jsx
import { Radio, Icon } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState('1');
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-radio-group">
      <Radio.Group value={check} onChange={onChange}>
        <Radio name="1" labelDisabled>
          单选框 1
        </Radio>
        <Radio name="2" labelDisabled>
          单选框 2
        </Radio>
      </Radio.Group>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 文本位置

设置 `labelPosition` 属性后，可调整文本位置。

```jsx
import { Radio, Icon } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState('1');
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-radio-group">
      <Radio.Group value={check} onChange={onChange}>
        <Radio name="1" labelPosition="left">
          单选框A
        </Radio>
        <Radio name="2" labelPosition="left">
          单选框B
        </Radio>
      </Radio.Group>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Radio Props

| 参数          | 说明                      | 类型               | 默认值    |
| ------------- | ------------------------- | ------------------ | --------- |
| name          | 标识符                    | _any_              | -         |
| shape         | 形状，可选值为 `square`   | _string_           | `round`   |
| disabled      | 是否为禁用状态            | _boolean_          | `false`   |
| labelDisabled | 是否禁用文本内容点击      | _boolean_          | `false`   |
| labelPosition | 文本位置，可选值为 `left` | _string_           | `right`   |
| iconSize      | 图标大小，默认单位为`px`  | _number \| string_ | `20px`    |
| checkedColor  | 选中状态颜色              | _string_           | `#1989fa` |

### Radio.Group Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中项的标识符 | _any_ | - |
| disabled | 是否禁用所有单选框 | _boolean_ | `false` |
| direction | 排列方向，可选值为`horizontal` | _string_ | `vertical` |
| iconSize | 所有单选框的图标大小，默认单位为`px` | _number \| string_ | `20px` |
| checkedColor | 所有单选框的选中状态颜色 | _string_ | `#1989fa` |

### Radio Events

| 事件名  | 说明             | 回调参数       |
| ------- | ---------------- | -------------- |
| onClick | 点击单选框时触发 | _event: Event_ |

### Radio.Group Events

| 事件名   | 说明                     | 回调参数       |
| -------- | ------------------------ | -------------- |
| onChange | 当绑定值变化时触发的事件 | _name: string_ |

### Radio Slots

| 名称    | 说明       | 参数               |
| ------- | ---------- | ------------------ |
| default | 自定义文本 | -                  |
| icon    | 自定义图标 | _checked: boolean_ |
