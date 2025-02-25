# Dialog 弹出框

### 介绍

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。弹出框组件支持函数调用和组件调用两种方式。

## 代码演示

### 组件调用

用于提示一些消息，只包含一个确认按钮。

```jsx
import { Dialog, Cell } from 'mooli-mobile';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="demo-popup">
      <Cell
        arrow
        onClick={() => {
          setVisible(!visible);
        }}
      >
        基本弹窗
      </Cell>
      <Dialog
        visible={visible}
        title="标题"
        destroy={false}
        onCancel={() => setVisible(false)}
      >
        弹窗内容
      </Dialog>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 函数调用

消息提示用于提示一些消息，只包含一个确认按钮。消息确认用于确认消息，包含取消和确认按钮。

```jsx
import { Dialog, Cell } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-popup">
      <Cell
        arrow
        onClick={() => {
          Dialog.alert({
            title: '标题',
            message: '弹窗内容',
          });
        }}
      >
        提示弹窗
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Dialog.alert({
            message: '弹窗内容',
          });
        }}
      >
        提示弹窗（无标题）
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Dialog.confirm({
            title: '标题',
            message: '弹窗内容',
          }).then(() => {
            console.log('promise then');
          });
        }}
      >
        链式调用
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Dialog.confirm({
            title: '标题',
            message: '弹窗内容',
          });
          setTimeout(() => {
            Dialog.close();
          }, 2000);
        }}
      >
        调用close关闭
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Dialog.confirm({
            vertical: true,
            title: '标题',
            message: '弹窗内容',
          });
        }}
      >
        按钮竖向弹窗
      </Cell>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 异步关闭

通过 `beforeClose` 属性可以传入一个回调函数，在弹窗关闭前进行特定操作。

```jsx
import { Dialog, Cell } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-popup">
      <Cell
        arrow
        onClick={() => {
          Dialog.confirm({
            title: '标题',
            message: '弹窗内容',
            beforeClose: (action, done) => {
              if (action === 'onConfirm') {
                setTimeout(done, 2000);
              } else {
                done();
              }
            },
            onConfirm: () => {
              console.log('点击关闭啦');
            },
          });
        }}
      >
        确认弹窗
      </Cell>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 操作按钮后是否关闭

通过 `closeOnAction` 属性控制操作按钮后是否关闭弹窗。

```jsx
import { Dialog, Cell } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-popup">
      <Cell
        arrow
        onClick={() => {
          Dialog.confirm({
            title: '标题',
            message: '弹窗内容',
            closeOnAction: false,
            onConfirm: () => {
              console.log('点击关闭啦');
            },
          });
        }}
      >
        确认弹窗
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
| Dialog | 展示弹窗 | _options: DialogOptions_ | `Promise<void>` |
| Dialog.alert | 展示消息提示弹窗 | _options: DialogOptions_ | `Promise<void>` |
| Dialog.confirm | 展示消息确认弹窗 | _options: DialogOptions_ | `Promise<void>` |
| Dialog.setDefaultOptions | 修改默认配置，对所有 Dialog 生效 | _options: DialogOptions_ | `void` |
| Dialog.resetDefaultOptions | 重置默认配置，对所有 Dialog 生效 | - | `void` |
| Dialog.close | 关闭弹窗 | - | `void` |

### Props

通过组件调用 `Dialog` 时，支持以下 Props：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示弹窗 | _boolean_ | - |
| title | 标题 | _string_ | - |
| width | 弹窗宽度，默认单位为 `px` | _number \| string_ | `320px` |
| message | 文本内容，支持通过 `\n` 换行 | _string \| () => JSX.ELement_ | - |
| showConfirmButton | 是否展示确认按钮 | _boolean_ | `true` |
| showCancelButton | 是否展示取消按钮 | _boolean_ | `true` |
| confirmButtonText | 确认按钮文案 | _string_ | `确认` |
| confirmButtonColor | 确认按钮颜色 | _string_ | `#ee0a24` |
| cancelButtonText | 取消按钮文案 | _string_ | `取消` |
| cancelButtonColor | 取消按钮颜色 | _string_ | `black` |
| destroy | 隐藏销毁组件 | _boolean_ | `false` |
| mask | 是否展示遮罩层 | _boolean_ | `true` |
| lazy | 是否在显示弹层时才渲染节点 | _boolean_ | `true` |
| lock | 是否锁定背景滚动 | _boolean_ | `true` |
| beforeClose | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(action) => boolean \| Promise_ | - |
| transition | popup 动画 | _string_ | - |
| component | 指定 popup 挂载的节点 | _string \| Element_ | - |
| rootComponent | 指定根 root 挂载的节点 | _string \| Element_ | - |
| rootClassName | 自定义 root 类名 | _string \| Array \| object_ | - |
| rootStyle | 自定义 root 样式 | _object_ | - |
| rootProps | root 元素属性 | _object_ | - |
| maskComponent | 指定 mask 挂载的节点 | _string \| Element_ | - |
| maskTransition | mask 动画（如需在动画周期内触发，请定义相关动画函数） | _string_ | - |
| maskClassName | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| maskStyle | 自定义遮罩层样式 | _object_ | - |
| maskProps | mask 元素属性（如需监听更多事件，可以在该属性内定义） | _object_ | - |

### Events

通过组件调用 `Dialog` 时，支持以下事件：

| 事件      | 说明                     | 回调参数 |
| --------- | ------------------------ | -------- |
| onConfirm | 点击确认按钮时触发       | -        |
| onCancel  | 点击取消按钮时触发       | -        |
| onOpen    | 打开弹窗时触发           | -        |
| onClose   | 关闭弹窗时触发           | -        |
| onOpened  | 打开弹窗且动画结束后触发 | -        |
| onClosed  | 关闭弹窗且动画结束后触发 | -        |

### Slots

通过组件调用 `Dialog` 时，支持以下插槽：

| 名称    | 说明               |
| ------- | ------------------ |
| default | 自定义内容         |
| title   | 自定义标题         |
| footer  | 自定义底部按钮区域 |
