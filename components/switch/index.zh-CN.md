# Switch 开关

### 介绍

用于在打开和关闭状态之间进行切换。

## 代码演示

### 基础用法

通过 `value` 绑定开关的选中状态，`true` 表示开，`false` 表示关。

```jsx
import { Switch } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(true);
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-radio-group">
      <Switch value={check} onChange={onChange} />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 禁用状态

通过 `disabled` 属性来禁用开关，禁用状态下开关不可点击。

```jsx
import { Switch } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(true);
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-radio-group">
      <Switch value={check} disabled onChange={onChange} />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 加载状态

通过 `loading` 属性设置开关为加载状态，加载状态下开关不可点击。

```jsx
import { Switch } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(true);
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-radio-group">
      <Switch value={check} loading onChange={onChange} />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义大小

通过 `size` 属性自定义开关的大小。

```jsx
import { Switch } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(true);
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-radio-group">
      <Switch value={check} size="24px" onChange={onChange} />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义颜色

`activeColor` 属性表示打开时的背景色，`inactiveColor` 表示关闭时的背景色。

```jsx
import { Switch } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(true);
  const onChange = (value) => {
    setCheck(value);
  };
  return (
    <div className="demo-radio-group">
      <Switch
        value={check}
        activeColor="#ee0a24"
        inactiveColor="#dcdee0"
        onChange={onChange}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 异步控制

需要异步控制开关时，可以使用 `value` 属性和 `input` 事件代替 `v-model`，并在 `input` 事件回调函数中手动处理开关状态。

```jsx
import { Switch, Dialog } from 'mooli-mobile';

const Demo = () => {
  const [check, setCheck] = React.useState(true);
  const onChange = (value) => {
    Dialog.confirm({
      title: '提醒',
      message: '是否切换开关？',
    }).then(() => {
      setCheck(value);
    });
  };
  return (
    <div className="demo-radio-group">
      <Switch value={check} size="24px" onChange={onChange} />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数          | 说明                     | 类型               | 默认值    |
| ------------- | ------------------------ | ------------------ | --------- |
| value         | 开关选中状态             | _any_              | `false`   |
| loading       | 是否为加载状态           | _boolean_          | `false`   |
| disabled      | 是否为禁用状态           | _boolean_          | `false`   |
| size          | 开关尺寸，默认单位为`px` | _number \| string_ | `30px`    |
| activeColor   | 打开时的背景色           | _string_           | `#1989fa` |
| inactiveColor | 关闭时的背景色           | _string_           | `white`   |
| activeValue   | 打开时对应的值           | _any_              | `true`    |
| inactiveValue | 关闭时对应的值           | _any_              | `false`   |

### Events

| 事件名   | 说明               | 回调参数       |
| -------- | ------------------ | -------------- |
| onChange | 开关状态切换时触发 | _value: any_   |
| onClick  | 点击时触发         | _event: Event_ |
