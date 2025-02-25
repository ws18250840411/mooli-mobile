# Form 表单

### 介绍

用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型。

## 代码演示

### 基础用法

在表单中，使用 Form.Item 的 `rules` 属性定义校验规则。

```jsx
import { Form, Field, Button } from 'mooli-mobile';

const Demo = () => {
  const form = React.useRef();
  const [value, setValue] = React.useState('');
  const [checkAccountAll, setCheckAccountAll] = React.useState(false);

  const onSubmit = (values) => {
    console.log('submit', values);
  };
  const onValuesChange = (values, pass) => {
    console.log(values);
    console.log('实时触发表单验证', pass);
    setCheckAccountAll(pass);
  };

  return (
    <div className="demo-form">
      <Form onSubmit={onSubmit} onValuesChange={onValuesChange} ref={form}>
        <Form.Item
          name="username"
          rules={[{ required: true, trigger: 'change', message: '请填写用户名' }]}
        >
          <Field label="用户名" placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, trigger: 'change', message: '请填写密码' }]}
        >
          <Field type="password" label="密码" placeholder="请输入密码" />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[{ 
            optional: true,
            trigger: 'change', 
            message: '请填写电话号码', 
            validator: (val: any) => {
              return /^(0|8)\d{7,12}/.test(val)
            }, 
          }]}
        >
          <Field type="number" label="电话号码" placeholder="请输入电话号码（可选）" />
        </Form.Item>
        <Button
          className="demo-form-button"
          round
          block
          disabled={!checkAccountAll}
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

### 校验触发方式

在表单中，使用 Form.Item 的 `trigger` 属性定义校验方式，可选择有：`change`输入时触发、`blur`失焦时触发、`submit`提交时触发，默认值为`blur`。也可在 Form 组件上通过 `validateTrigger` 属性上定义所有输入框默认触发类型，会被单个子组件触发类型覆盖。

```jsx
import { Form, Field, Button } from 'mooli-mobile';

const Demo = () => {
  const onSubmit = (values) => {
    console.log('submit', values);
  };

  return (
    <div className="demo-form">
      <Form onSubmit={onSubmit}>
        <Form.Item
          name="value1"
          rules={[
            {
              required: true,
              message: '请输入test',
              trigger: ['change','blur'],
              validator(val) {
                return val === 'test';
              },
            },
          ]}
        >
          <Field label="文本" placeholder="内容变化时校验" />
        </Form.Item>
        <Form.Item
          name="value2"
          rules={[
            {
              required: true,
              message: '请输入test',
              trigger: 'blur',
              validator(val) {
                return val === 'test';
              },
            },
          ]}
        >
          <Field label="文本" placeholder="失焦时校验" />
        </Form.Item>
        <Form.Item
          name="value3"
          rules={[
            {
              required: true,
              message: '请输入test',
              trigger: 'submit',
              validator(val) {
                return val === 'test';
              },
            },
          ]}
        >
          <Field label="文本" placeholder="提交时校验" />
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

### 校验规则

通过 `rules` 定义表单校验规则；设置 `validateFirst` 是否从第一个开始校验。

```jsx
import { Form, Field, Button, Toast } from 'mooli-mobile';

const Demo = () => {
  const onSubmit = (values) => {
    console.log('submit', values);
  };

  const onFailed = (errors) => {
    console.log('failed', errors);
  };

  return (
    <div className="demo-form">
      <Form validateFirst onSubmit={onSubmit} onFailed={onFailed}>
        <Form.Item
          name="value1"
          required
          rules={[
            {
              required: true,
              message: '请输入六位数字',
              pattern: /\d{6}/,
              trigger: 'submit',
            },
          ]}
        >
          <Field label="标题" placeholder="正则校验" />
        </Form.Item>
        <Form.Item
          name="value2"
          rules={[
            {
              required: true,
              message: '请输入test',
              trigger: 'submit',
              validator(val) {
                return val === 'test';
              },
            },
          ]}
        >
          <Field type="password" label={<span>标题<em style={{color: 'red'}}>*</em></span>} placeholder="函数校验" />
        </Form.Item>
        <Form.Item
          name="value3"
          rules={[
            {
              required: true,
              message: '请输入test',
              trigger: 'submit',
              validator(val) {
                return new Promise((resolve) => {
                  Toast.loading('验证中...');
                  setTimeout(() => {
                    Toast.clear();
                    resolve(val === 'test');
                  }, 1000);
                });
              },
            },
          ]}
        >
          <Field type="password" label="标题" placeholder="异步函数校验" />
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

### 动态表单

在表单中，使用 Form 的 `onValuesChange` 方法可以实时监听表单验证结果。

```jsx
import { Form, Field, Button, Checkbox } from 'mooli-mobile';

const Demo = () => {
  const form = React.useRef();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [check, setCheck] = React.useState(true);
  const [checkAccountAll, setCheckAccountAll] = React.useState(false);

  const onSubmit = (values) => {
    console.log('submit', values);
  };

  const onValuesChange = (values, pass) => {
    console.log('实时触发表单验证', values);
    setCheckAccountAll(pass);
  };

  React.useEffect(()=>{
    setUsername('wws')
  },[])

  return (
    <div className="demo-form">
      <Form onSubmit={onSubmit} onValuesChange={onValuesChange} ref={form}>
        <div>
          <Form.Item
            name="username"
            initialValue={username}
            rules={[{ required: true, trigger: 'change', message: '' }]}
          >
            <Field label="姓名" placeholder="" />
          </Form.Item>
        </div>
        {check && (
          <Form.Item
            name="hobby"
            initialValue={password}
            rules={[{ required: true, trigger: 'change', message: '' }]}
          >
            <Field label="爱好" placeholder="" />
          </Form.Item>
        )}
        <Checkbox value={check} onChange={(value)=> {
          setCheck(value);
        }}>
          是否有爱好
        </Checkbox>
        <Button
          className="demo-form-button"
          round
          block
          disabled={!checkAccountAll}
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

## API

### Form Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| validateTrigger | 表单校验触发时机，可选值为 `change`、`submit`、`blur`，详见下表 | _string_ | `blur` |
| validateFirst | 是否在某一项校验不通过时停止校验 | _boolean_ | `false` |
| scrollToError | 是否在提交表单且校验不通过时滚动至错误的表单项 | _boolean_ | `false` |
| className | 附加类名 | _string_ | `--` |
| style | 附加样式 | _objcet_ | `--` |

### Form.Item Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 字段名 | _number \| string_ | `-` |
| initialValue | 设置子元素默认值 | _number \| string_ | `-` |
| labelWidth | 表单项 label 宽度，默认单位为`px` | _number \| string_ | `6.2em` |
| labelAlign |  表单项 label 对齐方式，可选值为 `center` `right` | _string_ | `left` |
| inputAlign | 输入框对齐方式，可选值为 `center` `right` | _string_ | `left` |
| colon | 是否在 label 后面添加冒号 | _boolean_ | `false` |
| disabled | 是否禁用表单中的所有输入框 | _boolean_ | `false` |
| readonly | 是否将表单中的所有输入框设置为只读 | _boolean_ | `false` |
| error | 是否在校验不通过时标红输入框 | _boolean_ | `true` |
| errorMessage | 是否在校验不通过时在输入框下方展示错误提示 | _boolean_ | `true` |
| errorMessageAlign | 错误提示文案对齐方式，可选值为 `center` `right` | _string_ | `left` |

### Rule 数据结构

使用 Field 的`rules`属性可以定义校验规则，可选属性如下:

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| required | 是否为必选字段 | _boolean_ |
| optional | 是否为非必选字段，设置非必填会触发正常表单校验 | _boolean_ |
| message | 错误提示文案 | _string \| (value, rule) => string_ |
| validator | 通过函数进行校验 | _(value, rule) => boolean \| Promise_ |
| pattern | 通过正则表达式进行校验 | _RegExp_ |
| trigger | 本项规则的触发时机，可选值为 `change`、`blur`、`submit` | _string_ |
| formatter | 格式化函数，将表单项的值转换后进行校验 | _(value, rule) => any_ |

### validateTrigger  可选值

通过 `validateTrigger` 属性可以自定义表单校验的触发时机。

| 值     | 描述                                 |
| ------ | ------------------------------------ |
| submit | 仅在提交表单时触发校验               |
| blur   | 在提交表单和输入框失焦时触发校验     |
| change | 在提交表单和输入框内容变化时触发校验 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onSubmit | 提交表单且验证通过后触发 | _values: object_ |
| onFailed | 提交表单且验证不通过后触发 | _errorInfo: { values: object, errors: object[] }_ |
| onValuesChange |  字段值更新时触发回调事件 | _values: {name: string, value: string, isValidate: boolean}[]_ |

### 方法

通过 ref 可以获取到 Form 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| submit | 提交表单，与点击提交按钮的效果等价 | - | - |
| validate | 验证表单，支持传入 `name` 来验证单个或部分表单项 | _name?: string \| string[]_ | _Promise_ |
| resetValidation | 重置表单项的验证提示，支持传入 `name` 来重置单个或部分表单项 | _name?: string \| string[]_ | - |
| scrollToField | 滚动到对应表单项的位置，默认滚动到顶部，第二个参数传 false 可滚动至底部 | _name: string, alignToTop: boolean_ | - |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 表单内容 |
