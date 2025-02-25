# Field 输入框

### 介绍

表单中的输入框组件。

## 代码演示

### 基础用法

可以通过 `value` 绑定输入框的值，通过 `placeholder` 设置占位提示文字。

```jsx
import { Field } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className="demo-field">
      <Field
        value={value}
        label="文本"
        placeholder="请输入用户名"
        onChange={(v) => setValue(v)}
      />
    </div>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

### 自定义类型

根据 `type` 属性定义不同类型的输入框，默认值为 `text`。

```jsx
import { Field } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  const [value4, setValue4] = React.useState('');
  return (
    <div className="demo-field">
      <Field
        value={value}
        label="文本"
        placeholder="请输入用户名"
        onChange={(v) => setValue(v)}
      />
      <Field
        value={value1}
        type="tel"
        label="手机号"
        placeholder="请输入手机号"
        onChange={(v) => setValue1(v)}
      />
      <Field
        value={value2}
        type="digit"
        label="整数"
        placeholder="请输入整数"
        onChange={(v) => setValue2(v)}
      />
      <Field
        value={value3}
        type="number"
        label="数字"
        placeholder="请输入数字（支持小数）"
        onChange={(v) => setValue3(v)}
      />
      <Field
        value={value4}
        type="password"
        label="密码"
        placeholder="请输入密码"
        onChange={(v) => setValue4(v)}
      />
    </div>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

### 禁用输入框

通过 `readOnly` 将输入框设置为只读状态，通过 `disabled` 将输入框设置为禁用状态。

```jsx
import { Field } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('输入框只读');
  const [value1, setValue1] = React.useState('输入框已禁用');
  return (
    <div className="demo-field">
      <Field
        value={value}
        label="文本"
        readOnly
        placeholder="请输入用户名"
        onChange={(v) => setValue(v)}
      />
      <Field
        value={value1}
        label="文本"
        disabled
        placeholder="请输入用户名"
        onChange={(v) => setValue1(v)}
      />
    </div>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

### 显示图标

通过 `leftIcon` 和 `rightIcon` 配置输入框两侧的图标，通过设置 `clearable` 在输入过程中展示清除图标。

```jsx
import { Field } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  const [value1, setValue1] = React.useState('');
  return (
    <div className="demo-field">
      <Field
        value={value}
        label="文本"
        placeholder="显示左右图标"
        leftIcon="smile-o"
        rightIcon="warning-o"
        onChange={(v) => setValue(v)}
      />
      <Field
        clearable
        value={value1}
        label="文本"
        placeholder="显示删除图标"
        leftIcon="music-o"
        onChange={(v) => setValue1(v)}
      />
    </div>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

### 错误提示

设置 `required` 属性表示这是一个必填项，可以配合 `error` 或 `errorMessage` 属性显示对应的错误提示。

```jsx
import { Field } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  const [value1, setValue1] = React.useState('');
  return (
    <div className="demo-field">
      <Field
        error
        required
        value={value}
        label="用户名"
        placeholder="请输入用户名"
        onChange={(v) => setValue(v)}
      />
      <Field
        required
        value={value1}
        label="手机号"
        placeholder="请输入手机号"
        errorMessage="手机号格式错误"
        onChange={(v) => setValue1(v)}
      />
    </div>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

### 插入按钮

通过 children 插槽可以在输入框尾部插入按钮。

```jsx
import { Field, Button } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className="demo-field">
      <Field
        clearable
        value={value}
        label="短信验证码"
        placeholder="请输入"
        onChange={(v) => setValue(v)}
      >
        <Button size="small" type="primary">
          发送验证码
        </Button>
      </Field>
    </div>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

### 格式化输入内容

通过 `formatter` 属性可以对输入的内容进行格式化，通过 `formatTrigger` 属性可以指定执行格式化的时机，默认在输入时进行格式化。

```jsx
import { Field, Button } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  const [value1, setValue1] = React.useState('');
  const formatter = (value) => {
    // 过滤输入的数字
    return value.replace(/\d/g, '');
  };
  return (
    <div className="demo-field">
      <Field
        value={value}
        label="文本"
        placeholder="在输入时执行格式化"
        formatter={formatter}
        onChange={(v) => setValue(v)}
      />
      <Field
        value={value1}
        label="文本"
        placeholder="在失焦时执行格式化"
        formatter={formatter}
        formatTrigger="onBlur"
        onChange={(v) => setValue1(v)}
      />
    </div>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

### 高度自适应

对于 textarea，可以通过 `autoSize` 属性设置高度自适应。

```jsx
import { Field, Button } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className="demo-field">
      <Field
        value={value}
        type="textarea"
        rows="1"
        autoSize
        label="留言"
        placeholder="请输入留言"
        onChange={(v) => setValue(v)}
      />
    </div>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

### 显示字数统计

设置 `maxLength` 和 `limit` 属性后会在底部显示字数统计。

```jsx
import { Field, Button } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className="demo-field">
      <Field
        value={value}
        type="textarea"
        rows="2"
        maxLength="50"
        limit
        autoSize
        label="留言"
        placeholder="请输入留言"
        onChange={(v) => setValue(v)}
      />
    </div>
  );
};
ReactDOM.render(<Demo />, mountNode);
```

### 文本对齐方式

通过 `inputAlign` 属性可以设置输入框内容的对齐方式，可选值为 `center`、`right`。

```jsx
import { Field } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className="demo-field">
      <Field
        value={value}
        label="文本"
        placeholder="内容"
        labelAlign="left"
        inputAlign="left"
        onChange={(v) => setValue(v)}
      />
      <Field
        value={value}
        label="文本"
        placeholder="内容"
        labelAlign="center"
        inputAlign="center"
        onChange={(v) => setValue(v)}
      />
      <Field
        value={value}
        label="文本"
        placeholder="内容"
        labelAlign="right"
        inputAlign="right"
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
| value | 当前输入的值 | _number \| string_ | - |
| label | 输入框左侧文本 | _string_ | - |
| name | 名称，提交表单的标识符 | _string_ | - |
| type | 输入框类型, 可选值为 `tel` `digit`<br>`number` `textarea` `password` 等 | _string_ | `text` |
| size | 大小，可选值为 `large` | _string_ | - |
| maxlength | 输入的最大字符数 | _number \| string_ | - |
| placeholder | 输入框占位提示文字 | _string_ | - |
| border | 是否显示内边框 | _boolean_ | `true` |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| readOnly | 是否只读 | _boolean_ | `false` |
| colon | 是否在 label 后面添加冒号 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | _boolean_ | `false` |
| clickable | 是否开启点击反馈 | _boolean_ | `false` |
| limit | 是否显示字数统计，需要设置`maxlength`属性 | _boolean_ | `false` |
| error | 是否将输入内容标红 | _boolean_ | `false` |
| errorMessage | 底部错误提示文案，为空时不展示 | _string_ | - |
| formatter | 输入内容格式化函数 | _Function_ | - |
| formatTrigger | 格式化函数触发的时机，可选值为 `onBlur` | _string_ | `onChange` |
| arrowDirection | 箭头方向，可选值为 `left` `up` `down` | _string_ | `right` |
| labelClass | 左侧文本额外类名 | _any_ | - |
| labelWidth | 左侧文本宽度，默认单位为`px` | _number \| string_ | `6.2em` |
| labelAlign | 左侧文本对齐方式，可选值为 `center` `right` | _string_ | `left` |
| inputAlign | 输入框对齐方式，可选值为 `center` `right` | _string_ | `left` |
| errorMessageAlign | 错误提示文案对齐方式，可选值为 `center` `right` | _string_ | `left` |
| autoSize | 是否自适应内容高度，只对 textarea 有效，<br>可传入对象,如 { maxHeight: 100, minHeight: 50 }，<br>单位为`px` | _boolean \| object_ | `false` |
| leftIcon | 左侧[图标名称]或图片链接 | _string_ | - |
| rightIcon | 右侧[图标名称]或图片链接 | _string_ | - |
| className | 附加类名 | _string_ | `--` |
| style | 附加样式 | _objcet_ | `--` |

### Events

除下列事件外，Field 默认支持 Input 标签所有的原生事件

| 事件             | 说明                 | 回调参数                       |
| ---------------- | -------------------- | ------------------------------ |
| onChange         | 输入框内容变化时触发 | _value: string (当前输入的值)_ |
| onFocus          | 输入框获得焦点时触发 | _event: Event_                 |
| onBlur           | 输入框失去焦点时触发 | _event: Event_                 |
| onClear          | 点击清除按钮时触发   | _event: Event_                 |
| onClick          | 点击 Field 时触发    | _event: Event_                 |
| onClickInput     | 点击输入区域时触发   | _event: Event_                 |
| onClickLeftIcon  | 点击左侧图标时触发   | _event: Event_                 |
| onClickRightIcon | 点击右侧图标时触发   | _event: Event_                 |

### Slots

| 名称   | 说明                 |
| ------ | -------------------- |
| button | 自定义输入框尾部按钮 |
