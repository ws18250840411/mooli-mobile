# Search 搜索

### 介绍

用于搜索场景的输入框组件。

## 代码演示

### 基础用法

`value` 用于控制搜索框中的文字，`background` 可以自定义搜索框外部背景色。

```jsx
import { Search } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className="demo-list">
      <Search value={value} clearable onChange={(v)=> setValue(v)} placeholder="请输入搜索关键词" />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 事件监听

Search 组件提供了 `search` 和 `cancel` 事件，`search` 事件在点击键盘上的搜索/回车按钮后触发，`cancel` 事件在点击搜索框右侧取消按钮时触发。

```jsx
import { Search } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className="demo-list">
      <Search 
        clearable
        showAction
        value={value} 
        onChange={(v)=> setValue(v)} 
        onSearch={(v)=> console.log(`搜索值：${v}`)} 
        onInput={(e)=> console.log(`输入值：${e.target.value}`)} 
        onFocus={()=> console.log('聚焦')} 
        onBlur={()=> console.log('失焦')} 
        onClear={()=> console.log('清除')} 
        onCancel={()=> console.log('取消')} 
        placeholder="请输入搜索关键词" 
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 禁用搜索框

通过 `disabled` 属性禁用搜索框。

```jsx
import { Search } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className="demo-list">
      <Search value={value} disabled  placeholder="请输入搜索关键词" />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义背景色

通过 `background` 属性可以设置搜索框外部的背景色，通过 `shape` 属性设置搜索框的形状，可选值为 `round`。

```jsx
import { Search } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className="demo-list">
      <Search 
        value={value} 
        shape="round"
        background="#4fc08d"  
        placeholder="请输入搜索关键词" 
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义按钮

使用 `action` 插槽可以自定义右侧按钮的内容。使用插槽后，`cancel` 事件将不再触发。

```jsx
import { Search } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className="demo-list">
      <Search 
        value={value} 
        clearable 
        showAction
        action={<span>搜索</span>}
        label={<span>地址</span>}
        onChange={(v)=> setValue(v)} 
        placeholder="请输入搜索关键词" 
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
| label | 搜索框左侧文本 | _string_ | - |
| shape | 搜索框形状，可选值为 `round` | _string_ | `square` |
| background | 搜索框外部背景色 | _string_ | `#f2f2f2` |
| maxlength | 输入的最大字符数 | _number \| string_ | - |
| placeholder | 占位提示文字 | _string_ | - |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | _boolean_ | `true` |
| showAction | 是否在搜索框右侧显示取消按钮 | _boolean_ | `false` |
| action | 取消按钮文字 | _string_ | `取消` |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| readonly | 是否将输入框设为只读 | _boolean_ | `false` |
| error | 是否将输入内容标红 | _boolean_ | `false` |
| leftIcon | 输入框左侧[图标名称](#/components/icon/zh-CN)或图片链接 | _string_ | `search` |
| rightIcon | 输入框右侧[图标名称](#/components/icon/zh-CN)或图片链接 | _string_ | - |

### Events

| 事件名 | 说明                 | 回调参数                       |
| ------ | -------------------- | ------------------------------ |
| onSearch | 确定搜索时触发       | _value: string (当前输入的值)_ |
| onInput  | 输入框内容变化时触发 | _value: string (当前输入的值)_ |
| onFocus  | 输入框获得焦点时触发 | _event: Event_                 |
| onBlur   | 输入框失去焦点时触发 | _event: Event_                 |
| onClear  | 点击清除按钮后触发   | _event: Event_                 |
| onCancel | 点击取消按钮时触发   | -                              |
