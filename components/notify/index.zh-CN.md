# Notify 消息提示

### 介绍

在页面顶部展示消息提示，支持函数调用和组件调用两种方式。

## 代码演示

### 组件调用

通过组件调用 Notify 时，可以通过下面的方式进行注册：

```jsx
import { Notify, Cell } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="demo-popup">
      <Cell
        arrow
        onClick={() => {
          setVisible(!visible);
          setTimeout(() => {
            setVisible(false);
          }, 2000);
        }}
      >
        基本弹窗
      </Cell>
      <Notify visible={visible} type="success">
        通知内容
      </Notify>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 函数调用

支持 `info`、`success`、`warning`、`danger` 四种通知类型，默认为 `danger`。

```jsx
import { Notify, Cell } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-popup">
      <Cell
        arrow
        onClick={() => {
          Notify.info({ message: '通知内容' });
        }}
      >
        主要通知
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Notify.success({ message: '成功通知' });
        }}
      >
        成功通知
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Notify.danger({ message: '危险通知' });
        }}
      >
        危险通知
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Notify.warning({ message: '警告通知' });
        }}
      >
        警告通知
      </Cell>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义通知

自定义消息通知的颜色和展示时长。

```jsx
import { Notify, Cell } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-popup">
      <Cell
        arrow
        onClick={() => {
          Notify.info({
            message: '自定义颜色',
            color: '#ad0000',
            background: '#ffe1e1',
          });
        }}
      >
        自定义颜色
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Notify.success({ message: '自定义时长', duration: 1000 });
        }}
      >
        自定义时长
      </Cell>
      <Cell
        arrow
        onClick={() => {
          let n = Notify.success({ message: '自定义时长', duration: 0 });
          setTimeout(() => n.close(), 3000);
        }}
      >
        clsoe 关闭
      </Cell>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| Notify | 展示提示 | `options` | notify 实例 |
| Notify.info | 主要通知 | - | `void` |
| Notify.success | 成功通知 | - | `void` |
| Notify.warning | 危险通知 | - | `void` |
| Notify.danger | 警告通知 | - | `void` |
| Notify.close | 关闭提示 | - | `void` |
| Notify.setDefaultOptions | 修改默认配置，对所有 Notify 生效 | `options` |
| Notify.resetDefaultOptions | 重置默认配置，对所有 Notify 生效 | - | `void` |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `info` `success` `warning` | _string_ | `danger` |
| message | 展示文案，支持通过`\n`换行 | _string_ | - |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | _number \| string_ | `3000` |
| color | 字体颜色 | _string_ | `white` |
| background | 背景颜色 | _string_ | - |
| className | 自定义类名 | _any_ | - |
