# BInput 输入框

### 介绍

表单中的输入框组件

## 代码演示

### 基础用法

可以通过 `value` 绑定输入框的值，通过 `label` 设置左侧文本。

```jsx
import { BInput } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  return (
    <BInput 
      clearable 
      label="文本" 
      value={value} 
      onChange={(v)=>setValue(v)} 
      className="demo-name"
    />
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 边框（动画）

设置属性 `border` 显示边框。

```jsx
import { BInput } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  return (
    <BInput 
      border 
      label="文本" 
      value={value} 
      onChange={(v)=>setValue(v)} 
      className="demo-name" 
    />
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 禁用动画

设置属性 `animate` 禁用动画。

```jsx
import { BInput } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('无动画');
  return (
    <BInput 
      border 
      animate={false} 
      label="文本" 
      value={value} 
      onChange={(v)=>setValue(v)} 
      className="demo-name"
    />
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 禁用

设置属性 `disabled` 禁用，不可输入。

```jsx
import { BInput } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('8210000456');
  return (
    <BInput 
      border 
      disabled 
      label="文本" 
      value={value} 
      onChange={(v)=>setValue(v)} 
      className="demo-name" 
    />
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 显示图标

通过 `leftIcon` 和 `rightIcon` 配置输入框两侧的图标。

```jsx
import { BInput, Icon } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  return (
    <BInput 
      border 
      animate={false} 
      label="手机号" 
      value={value} 
      leftIcon="smile-o" 
      rightIcon="warning-o" 
      onChange={(v)=>setValue(v)}  
      className="demo-name" 
    />
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 获取验证码

设置属性 `arrow` 显示箭头。

```jsx
import { BInput,Button } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  return (
    <BInput 
      border 
      label="手机号" 
      value={value} 
      prefix="+62"
      onChange={(v)=>setValue(v)}  
      className="demo-name"
    >
      <Button 
        plain 
        type="primary" 
        onClick={()=> console.log('获取验证码')}
      >
        获取验证码
      </Button>
    </BInput>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 表单提交

在表单中，使用 Form.Item 的 `rules` 属性定义校验规则。

```jsx
import { Form, BInput, Button } from 'mooli-mobile';

const Demo = () => {
  const form = React.useRef();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [value, setValue] = React.useState('');
  const [req, setReq] = React.useState(true);
  const onSubmit = (values) => {
    console.log('submit', values);
  };

  return (
    <div className="binput-form">
      <Form onSubmit={onSubmit} ref={form}>
        <Form.Item
          name="username"
          initialValue="wws"
          required
          rules={[{ required: true, message: '请填写用户名' }]}
        >
          <BInput border label="用户名" placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: req, message: '请填写密码' }]}
        >
          <BInput border type="password" label="密码" placeholder="请输入密码" />
        </Form.Item>
        <Button
          className="demo-form-button"
          round
          block
          type="info"
          htmlType="submit"
        >
          提交
        </Button>
      </Form>
    </div>
  );
};
ReactDOM.render(<Demo />, mountNode);
```
