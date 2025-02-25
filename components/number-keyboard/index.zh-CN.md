# NumberKeyboard 数字键盘

### 介绍

虚拟数字键盘，可以配合[密码输入框组件](#/components/password-input/zh-CN)或自定义的输入框组件使用。

## 代码演示

### 默认样式

数字键盘提供了 `input`、`delete`、`blur` 事件，分别对应输入内容、删除内容和失去焦点的动作。

```jsx
import { Cell, NumberKeyboard, Toast } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="demo-number-keyboard">
      <Cell arrow onClick={() => setVisible(true)}>
        弹出默认键盘
      </Cell>
      <NumberKeyboard 
        show={visible} 
        onInput={(v)=> Toast(`输入值：${v}`)}
        onDelete={(v)=> Toast(`删除`)}
        onBlur={()=> setVisible(false)}
       />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 带右侧栏的键盘

将 theme 属性设置为 `custom` 来展示键盘的右侧栏，常用于输入金额的场景。

```jsx
import { Cell, NumberKeyboard, Toast } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="demo-number-keyboard">
      <Cell arrow onClick={() => setVisible(true)}>
        弹出带右侧栏的键盘
      </Cell>
      <NumberKeyboard 
        theme="custom" 
        show={visible} 
        extraKey="."
        closeButtonText="完成"
        onInput={(v)=> Toast(`输入值：${v}`)}
        onBlur={()=> setVisible(false)}
       />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 身份证号键盘

通过 `extraKey` 属性可以设置左下角按键内容，比如需要输入身份证号时，可以将 `extraKey` 设置为 `X`。

```jsx
import { Cell, NumberKeyboard, Toast } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="demo-number-keyboard">
      <Cell arrow onClick={() => setVisible(true)}>
        弹出身份证号键盘
      </Cell>
      <NumberKeyboard 
        show={visible} 
        extraKey="X"
        closeButtonText="确定"
        onInput={(v)=> Toast(`输入值：${v}`)}
        onBlur={()=> setVisible(false)}
       />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 键盘标题

通过 `title` 属性可以设置键盘标题。

```jsx
import { Cell, NumberKeyboard, Toast } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="demo-number-keyboard">
      <Cell arrow onClick={() => setVisible(true)}>
        弹出带标题的键盘
      </Cell>
      <NumberKeyboard 
        show={visible} 
        title="键盘标题"
        extraKey="*"
        closeButtonText="完成"
        onInput={(v)=> Toast(`输入值：${v}`)}
        onBlur={()=> setVisible(false)}
       />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 删除键

通过 `deleteButtonText` 属性可以自定义键盘的删除键。

```jsx
import { Cell, Icon, NumberKeyboard, Toast } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="demo-number-keyboard">
      <Cell arrow onClick={() => setVisible(true)}>
        弹出删除键的键盘
      </Cell>
      <NumberKeyboard 
        show={visible} 
        deleteButtonText={<Icon name="close" size="32" />}
        closeButtonText="完成"
        onInput={(v)=> Toast(`输入值：${v}`)}
        onBlur={()=> setVisible(false)}
        onDelete={(v)=> Toast(`删除`)}
       />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 左侧标题

通过 `titleLeft` 属性可以自定义键盘的左侧标题内容。

```jsx
import { Cell, Icon, NumberKeyboard, Toast } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(()=>{
    if(visible){
      window.scrollTo(0, 50);
    }
  },[visible])
  return (
    <div className="demo-number-keyboard">
      <Cell arrow onClick={() => setVisible(true)}>
        弹出左侧标题的键盘
      </Cell>
      <NumberKeyboard 
        show={visible} 
        titleLeft="取消"
        closeButtonText="完成"
        onInput={(v)=> Toast(`输入值：${v}`)}
        onBlur={()=> setVisible(false)}
        onDelete={(v)=> Toast(`删除`)}
        onTitleLeftClick={()=> {
          setVisible(false);
          Toast(`点击左侧标题`);
        }}
       />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 配置多个按键

当 theme 为 `custom` 时，支持以数组的形式配置两个 `extra-key`。

```jsx
import { Cell, NumberKeyboard, Toast } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(()=>{
    if(visible){
      window.scrollTo(0, 60);
    }
  },[visible])
  return (
    <div className="demo-number-keyboard">
      <Cell arrow onClick={() => setVisible(true)}>
        弹出配置多个按键的键盘
      </Cell>
      <NumberKeyboard 
        show={visible} 
        theme="custom"
        extraKey={['00', '.']}
        closeButtonText="确定"
        onInput={(v)=> Toast(`输入值：${v}`)}
        onBlur={()=> setVisible(false)}
       />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 随机数字键盘

通过 `random-key-order` 属性可以随机排序数字键盘，常用于安全等级较高的场景。

```jsx
import { Cell, NumberKeyboard, Toast } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(()=>{
    if(visible){
      window.scrollTo(0, 100);
    }
  },[visible])
  return (
    <div className="demo-number-keyboard">
      <Cell arrow onClick={() => setVisible(true)}>
        弹出配置随机数字的键盘
      </Cell>
      <NumberKeyboard 
        randomKeyOrder
        show={visible} 
        onInput={(v)=> Toast(`输入值：${v}`)}
        onDelete={(v)=> Toast(`删除`)}
        onBlur={()=> setVisible(false)}
       />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 数据绑定

可以通过 `value` 绑定键盘当前输入值。

```jsx
import { Cell, NumberKeyboard, Field, Toast } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  React.useEffect(()=>{
    if(visible){
      window.scrollTo(0, 140);
    }
  },[visible])
  return (
    <div className="demo-number-keyboard">
      <Field
        readOnly
        value={value}
        label="双向绑定"
        onClick={() => setVisible(true)}
      />
      <NumberKeyboard 
        value={value}
        show={visible} 
        onBlur={()=> setVisible(false)}
        onChange={(v) => setValue(v)}
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
| value | 当前输入值 | _string_ | - |
| show | 是否显示键盘 | _boolean_ | - |
| title | 键盘标题 | _string_ | - |
| theme | 样式风格，可选值为 `custom` | _string_ | `default` |
| maxlength | 输入值最大长度 | _number \| string_ | - |
| zIndex | 键盘 z-index 层级 | _number \| string_ | `100` |
| extraKey  | 底部额外按键的内容 | _string \| string[]_ | `''` |
| closeButtonText | 关闭按钮文字，空则不展示 | _string_ | - |
| deleteButtonText | 删除按钮文字，空则展示删除图标 | _string_ | - |
| showDeleteButtonIcon | 是否展示删除图标 | _boolean_ | `true` |
| hideOnClickOutside | 点击外部时是否收起键盘 | _boolean_ | `true` |
| blurOnClose  | 是否在点击关闭按钮时触发 blur 事件 | _boolean_ | `true` |
| safeAreaInsetBottom | 是否开启[底部安全区适配] | _boolean_ | `true` |
| randomKeyOrder | 是否将通过随机顺序展示按键 | _boolean_ | `false` |

### Events

| 事件名 | 说明                           | 回调参数      |
| ------ | ------------------------------ | ------------- |
| onInput  | 点击按键时触发                 | key: 按键内容 |
| onChange  | 值发生变化时触发             | key: 按键内容   |
| onDelete | 点击删除键时触发               | -             |
| onClose  | 点击关闭按钮时触发             | -             |
| onBlur   | 点击关闭按钮或非键盘区域时触发 | -             |
| onShow   | 键盘完全弹出时触发             | -             |
| onHide   | 键盘完全收起时触发             | -             |

### Slots

| 名称       | 说明                 |
| ---------- | -------------------- |
| deleteButtonText     | 自定义删除按键内容   |
| extraKey  | 自定义左下角按键内容 |
| titleLeft | 自定义标题栏左侧内容 |
