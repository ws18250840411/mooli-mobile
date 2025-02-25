# Radio 单选框

### 介绍

用于在多个选项中选择单个结果。

## 代码演示

### 基础用法

通过 `value` 绑定值当前选中项的 name 或者 `true | false`。

```jsx
import { Checkbox } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(true);
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-checkbox-group">
      <Checkbox value={check} onChange={onChange}>
        复选框
      </Checkbox>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 禁用状态

通过设置 `disabled` 属性可以禁用复选框。

```jsx
import { Checkbox } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(['1']);
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-checkbox-group">
      <Checkbox.Group value={check} onChange={onChange}>
        <Checkbox name="1" disabled>
          复选框
        </Checkbox>
        <Checkbox name="2" disabled>
          复选框
        </Checkbox>
      </Checkbox.Group>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义形状

将 `shape` 属性设置为 `square`，复选框的形状会变成方形。

```jsx
import { Checkbox } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(true);
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-checkbox-group">
      <Checkbox value={check} shape="square" onChange={onChange}>
        自定义形状
      </Checkbox>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义颜色

通过 `checkedColor` 属性设置选中状态的图标颜色。

```jsx
import { Checkbox } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(true);
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-checkbox-group">
      <Checkbox value={check} checkedColor="#ee0a24" onChange={onChange}>
        自定义颜色
      </Checkbox>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义大小

通过 `iconSize` 属性可以自定义图标的大小。

```jsx
import { Checkbox } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(true);
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-checkbox-group">
      <Checkbox value={check} iconSize="24px" onChange={onChange}>
        自定义大小
      </Checkbox>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义图标

通过 `iconSize` 属性可以自定义图标的大小。

```jsx
import { Checkbox } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(true);
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
    <div className="demo-checkbox-group">
      <Checkbox value={check} icon={iconRender} onChange={onChange}>
        自定义图标
      </Checkbox>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 禁用文本点击

设置 `labelDisabled` 属性后，点击图标以外的内容不会触发复选框切换。

```jsx
import { Checkbox } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(true);
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-checkbox-group">
      <Checkbox value={check} labelDisabled iconSize="24px" onChange={onChange}>
        自定义大小
      </Checkbox>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 复选框组

复选框可以与复选框组一起使用，复选框组通过 `value` 数组绑定复选框的勾选状态。

```jsx
import { Checkbox } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(['a']);
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-checkbox-group">
      <Checkbox.Group value={check} onChange={onChange}>
        <Checkbox name="a">复选框 a</Checkbox>
        <Checkbox name="b">复选框 b</Checkbox>
      </Checkbox.Group>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 水平排列

将 `direction` 属性设置为 `horizontal` 后，复选框组会变成水平排列。

```jsx
import { Checkbox } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(['a']);
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-checkbox-group">
      <Checkbox.Group value={check} direction="horizontal" onChange={onChange}>
        <Checkbox name="a">复选框 a</Checkbox>
        <Checkbox name="b">复选框 b</Checkbox>
      </Checkbox.Group>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 限制最大可选数

通过 `max` 属性可以限制复选框组的最大可选数。

```jsx
import { Checkbox } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(['a']);
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-checkbox-group">
      <Checkbox.Group value={check} max="2" onChange={onChange}>
        <Checkbox name="a">复选框 a</Checkbox>
        <Checkbox name="b">复选框 b</Checkbox>
        <Checkbox name="c">复选框 c</Checkbox>
      </Checkbox.Group>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 全选与反选

通过 `Checkbox.Group` 的受控值 `value` 可以实现全选与反选。

```jsx
import { Checkbox, Button } from 'mooli-mobile';

const Demo = () => {
  const checkboxArrs = ['a', 'b', 'c'];
  const [check, setCheck] = React.useState(['a']);
  const onChange = (value) => {
    setCheck(value);
  };
  const toggleAll = (checkAll) => {
    if (checkAll) {
      setCheck(checkboxArrs);
    } else {
      const newCheck = checkboxArrs.filter((e) => check.indexOf(e) === -1);
      setCheck(newCheck);
    }
  };
  return (
    <div className="demo-checkbox-group">
      <Checkbox.Group value={check} onChange={onChange}>
        {checkboxArrs.map((item) => (
          <Checkbox key={item} name={item}>
            复选框 {item}
          </Checkbox>
        ))}
      </Checkbox.Group>
      <div className="demo-checkbox-buttons">
        <Button type="primary" onClick={() => toggleAll(true)}>
          全选
        </Button>
        <Button type="info" onClick={() => toggleAll(false)}>
          反选
        </Button>
      </div>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Checkbox Props

| 参数          | 说明                      | 类型               | 默认值    |
| ------------- | ------------------------- | ------------------ | --------- |
| value         | 是否为选中状态            | _boolean_          | `false`   |
| name          | 标识符                    | _any_              | -         |
| shape         | 形状，可选值为 `square`   | _string_           | `round`   |
| disabled      | 是否禁用复选框            | _boolean_          | `false`   |
| labelDisabled | 是否禁用复选框文本点击    | _boolean_          | `false`   |
| labelPosition | 文本位置，可选值为 `left` | _string_           | `right`   |
| iconSize      | 图标大小，默认单位为 `px` | _number \| string_ | `20px`    |
| checkedColor  | 选中状态颜色              | _string_           | `#1989fa` |
| bindGroup     | 是否与复选框组绑定        | _boolean_          | `true`    |

### Checkbox.Group Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 所有选中项的标识符 | _any[]_ | - |
| disabled | 是否禁用所有复选框 | _boolean_ | `false` |
| max | 最大可选数，`0`为无限制 | _number \| string_ | `0` |
| direction | 排列方向，可选值为 `horizontal` | _string_ | `vertical` |
| iconSize | 所有复选框的图标大小，默认单位为 `px` | _number \| string_ | `20px` |
| checkedColor | 所有复选框的选中状态颜色 | _string_ | `#1989fa` |

### Checkbox Events

| 事件名   | 说明                     | 回调参数           |
| -------- | ------------------------ | ------------------ |
| onChange | 当绑定值变化时触发的事件 | _checked: boolean_ |
| onClick  | 点击复选框时触发         | _event: Event_     |

### Checkbox.Group Events

| 事件名   | 说明                     | 回调参数       |
| -------- | ------------------------ | -------------- |
| onChange | 当绑定值变化时触发的事件 | _names: any[]_ |

### Checkbox Slots

| 名称    | 说明       | 参数               |
| ------- | ---------- | ------------------ |
| default | 自定义文本 | -                  |
| icon    | 自定义图标 | _checked: boolean_ |
