# PasswordInput 密码输入框

### 介绍

带网格的输入框组件，可以用于输入密码、短信验证码等场景，通常与[数字键盘](#/components/number-keyboard/zh-CN)组件配合使用。

## 代码演示

### 基础用法

搭配数字键盘组件来实现密码输入功能。

```jsx
import { PasswordInput, NumberKeyboard } from 'mooli-mobile';

const Demo = () => {
  const [ value, setValue ] = React.useState('123');
  const [visible, setVisible] = React.useState(false);
  console.log(value)
  return (
    <div className="demo-password-input">
      <PasswordInput value={value} focused={visible} onFocus={()=> setVisible(true)} ></PasswordInput>
      <NumberKeyboard 
        value={value}
        show={visible} 
        onBlur={()=> setVisible(false)}
        onChange={(v) => setValue(v.slice(0,6))}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义长度

通过 `length` 属性来设置密码长度。

```jsx
import { PasswordInput, NumberKeyboard } from 'mooli-mobile';

const Demo = () => {
  const [ value, setValue ] = React.useState('123');
  const [visible, setVisible] = React.useState(false);
  console.log(value)
  return (
    <div className="demo-password-input">
      <PasswordInput length="4" value={value} focused={visible} onFocus={()=> setVisible(true)} ></PasswordInput>
      <NumberKeyboard 
        value={value}
        show={visible} 
        onBlur={()=> setVisible(false)}
        onChange={(v) => setValue(v.slice(0,4))}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 格子间距

通过 `gutter` 属性来设置格子之间的间距。

```jsx
import { PasswordInput, NumberKeyboard } from 'mooli-mobile';

const Demo = () => {
  const [ value, setValue ] = React.useState('123');
  const [visible, setVisible] = React.useState(false);

  React.useEffect(()=>{
    if(visible){
      window.scrollTo(0, 70);
    }
  },[visible])
  console.log(value)
  return (
    <div className="demo-password-input">
      <PasswordInput value={value} focused={visible} gutter="10" onFocus={()=> setVisible(true)} ></PasswordInput>
      <NumberKeyboard 
        value={value}
        show={visible} 
        onBlur={()=> setVisible(false)}
        onChange={(v) => setValue(v.slice(0,6))}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 明文展示

将 `mask` 设置为 `false` 可以明文展示输入的内容，适用于短信验证码等场景。

```jsx
import { PasswordInput, NumberKeyboard } from 'mooli-mobile';

const Demo = () => {
  const [ value, setValue ] = React.useState('123');
  const [visible, setVisible] = React.useState(false);
  React.useEffect(()=>{
    if(visible){
      window.scrollTo(0, 190);
    }
  },[visible])
  console.log(value)
  return (
    <div className="demo-password-input">
      <PasswordInput mask={false} focused={visible} value={value} onFocus={()=> setVisible(true)} ></PasswordInput>
      <NumberKeyboard 
        value={value}
        show={visible} 
        onBlur={()=> setVisible(false)}
        onChange={(v) => setValue(v.slice(0,6))}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 提示信息

通过 `info` 属性设置提示信息，通过 `error-info` 属性设置错误提示，例如当输入六位时提示密码错误。

```jsx
import { PasswordInput, NumberKeyboard } from 'mooli-mobile';

const Demo = () => {
  const [ value, setValue ] = React.useState('123');
  const [errorInfo, setErrorInfo] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  React.useEffect(()=>{
    if(visible){
      window.scrollTo(0, 330);
    }
  },[visible])
  console.log(value)
  return (
    <div className="demo-password-input">
      <PasswordInput 
        value={value} 
        focused={visible}
        onFocus={()=> setVisible(true)} 
        info="密码为 6 位数字"
        errorInfo={errorInfo}
      ></PasswordInput>
      <NumberKeyboard 
        value={value}
        show={visible} 
        onBlur={()=> setVisible(false)}
        onChange={(v) => {
          if(v.length === 6 && v !== '123456'){
            setErrorInfo('密码错误')
          } else {
            setErrorInfo('')
          }
          setValue(v.slice(0,6))
        }}
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
| value | 密码值 | _string_ | `''` |
| info | 输入框下方文字提示 | _string_ | - |
| errorInfo | 输入框下方错误提示 | _string_ | - |
| length | 密码最大长度 | _number \| string_ | `6` |
| gutter | 输入框格子之间的间距，如 `20px` `2em`，默认单位为`px` | _number \| string_ | `0` |
| mask | 是否隐藏密码内容 | _boolean_ | `true` |
| focused | 是否已聚焦，聚焦时会显示光标 | _boolean_ | `false` |

### Events

| 事件名 | 说明             | 回调参数 |
| ------ | ---------------- | -------- |
| onFocus  | 输入框聚焦时触发 | -        |
