# ActionSheet 动作面板

### 介绍

底部弹起的模态面板，包含与当前情境相关的多个选项。

## 代码演示

### 基础用法

通过 `description` 可以在菜单顶部显示描述信息，通过选项的 `subname` 属性可以在选项文字的右侧展示描述信息；设置 `cancelText` 属性后，会在底部展示取消按钮，点击后关闭当前面板并触发 `onCancel` 事件；动作面板通过 `actions` 属性来定义选项，`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象格式见文档下方表格。

```jsx
import { ActionSheet, Cell } from 'mooli-mobile';

const Demo = () => {
  const actions = [
    { name: '选项一' },
    { name: '选项二' },
    { name: '选项三', subname: '描述信息' },
  ];
  const [visible, setVisible] = React.useState(false);
  const [cancelText, setCancelText] = React.useState(null);
  const [description, setDescription] = React.useState(null);
  return (
    <div className="demo-popup">
      <Cell
        arrow
        onClick={() => {
          setCancelText(null);
          setDescription(null);
          setVisible(!visible);
        }}
      >
        基础用法
      </Cell>
      <Cell
        arrow
        onClick={() => {
          setCancelText('取消');
          setDescription(null);
          setVisible(!visible);
        }}
      >
        展示取消按钮
      </Cell>
      <Cell
        arrow
        onClick={() => {
          setCancelText('取消');
          setDescription('这是一段描述信息');
          setVisible(!visible);
        }}
      >
        展示描述信息
      </Cell>
      <ActionSheet
        visible={visible}
        actions={actions}
        cancelText={cancelText}
        description={description}
        onClickMask={() => setVisible(false)}
        onSelect={({ item, index }) => {
          console.log(item, index);
          setVisible(false);
        }}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 选项状态

可以通过 `loading` 和 `disabled` 将选项设置为加载状态或禁用状态，或者通过`color`设置选项的颜色

```jsx
import { ActionSheet, Cell } from 'mooli-mobile';

const Demo = () => {
  const actions = [
    { name: '着色选项', color: '#ee0a24' },
    { name: '禁用选项', disabled: true },
    { name: '加载选项', loading: true },
  ];
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="demo-popup">
      <Cell
        arrow
        onClick={() => {
          setVisible(!visible);
        }}
      >
        设置选项状态
      </Cell>
      <ActionSheet
        visible={visible}
        actions={actions}
        onClickMask={() => setVisible(false)}
        onSelect={({ item, index }) => {
          console.log(item, index);
          setVisible(false);
        }}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义面板

通过插槽可以自定义面板的展示内容，同时可以使用`title`属性展示标题栏

```jsx
import { ActionSheet, Cell } from 'mooli-mobile';

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
        设置选项状态
      </Cell>
      <ActionSheet
        closeable
        visible={visible}
        title="标题"
        onCancel={() => setVisible(false)}
        onClickMask={() => setVisible(false)}
        onSelect={({ item, index }) => {
          console.log(item, index);
          setVisible(false);
        }}
      >
        <div style={{ padding: '16px 16px 160px' }}>自定义内容</div>
      </ActionSheet>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示动作面板 | _boolean_ | `false` |
| actions | 面板选项列表 | _Action[]_ | `[]` |
| title | 顶部标题 | _string_ | - |
| cancelText | 取消按钮文字 | _string_ | - |
| description | 选项上方的描述信息 | _string_ | - |
| closeable | 是否显示关闭图标 | _boolean_ | `true` |
| closeIcon | 图标名称 | _string_ | `cross` |
| duration | 动画时长，单位秒 | _number \| string_ | `0.3` |
| round | 是否显示圆角 | _boolean_ | `true` |
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

### Action 数据结构

`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名      | 说明                     | 类型                        |
| --------- | ------------------------ | --------------------------- |
| name      | 标题                     | _string_                    |
| subname   | 二级标题                 | _string_                    |
| color     | 选项文字颜色             | _string_                    |
| className | 为对应列添加额外的 class | _string \| Array \| object_ |
| loading   | 是否为加载状态           | _boolean_                   |
| disabled  | 是否为禁用状态           | _boolean_                   |
| callback  | 点击时触发的回调函数     | _action: Action_            |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onSelect | 点击选项时触发，禁用或加载状态下不会触发 | _action: Action, index: number_ |
| onCancel | 点击取消按钮时触发 | - |
| onOpen | 打开弹窗时触发 | - |
| onClose | 关闭弹窗时触发 | - |
| onOpened | 打开弹窗且动画结束后触发 | - |
| onClosed | 关闭弹窗且动画结束后触发 | - |

### Slots

| 名称        | 说明                 |
| ----------- | -------------------- |
| default     | 自定义面板的展示内容 |
| description | 自定义描述文案       |
