# Cell

### 基本用法

通过以下方式来全局注册组件，更多注册方式请参考[组件注册]

```jsx
import { Cell } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-cell">
    <Cell title="单元格" value="内容" />
    <Cell title="单元格" value="内容" label="描述信息" />
  </div>,
  mountNode,
);
```

### 单元格大小

通过 `size` 属性可以控制单元格的大小。

```jsx
import { Cell } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-cell">
    <Cell title="单元格" size="large" value="内容" />
    <Cell title="单元格" size="large" value="内容" label="描述信息" />
  </div>,
  mountNode,
);
```

### 展示图标

通过 `iconLeft` 属性在标题左侧展示图标；`iconRight` 属性定义右侧展示图标。

```jsx
import { Cell } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-cell">
    <Cell title="单元格" iconLeft="location-o" value="内容" />
    <Cell title="单元格" iconRight="phone-o" value="内容" />
    <Cell title="单元格" iconLeft="home-o" value="内容" label="描述信息" />
  </div>,
  mountNode,
);
```

### 展示箭头

设置 `arrow` 属性后会在单元格右侧显示箭头，并且可以通过 `arrowDirection` 属性控制箭头方向。

```jsx
import { Cell } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-cell">
    <Cell title="单元格" arrow value="内容" />
    <Cell
      title="单元格"
      arrow
      arrowDirection="down"
      value="内容"
      label="描述信息"
    />
  </div>,
  mountNode,
);
```

### 分组标题

通过 `Cell.Group` 的 `title` 属性可以指定分组标题。

```jsx
import { Cell } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-cell">
    <Cell.Group title="分组1">
      <Cell title="单元格" value="内容" />
    </Cell.Group>
    <Cell.Group title="分组2">
      <Cell title="单元格" value="内容" label="描述信息" />
    </Cell.Group>
  </div>,
  mountNode,
);
```

### 垂直居中

通过 `center` 属性可以让 `Cell` 的左右内容都垂直居中。

```jsx
import { Cell } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-cell">
    <Cell center title="单元格" value="内容" label="描述信息" />
  </div>,
  mountNode,
);
```

### 必填星号

通过 `center` 属性可以让 `Cell` 的左右内容都垂直居中。

```jsx
import { Cell } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-cell">
    <Cell required title="单元格" value="内容" label="描述信息" />
  </div>,
  mountNode,
);
```

## API

### Cell.Group Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| title  | 分组标题       | _string_  | `-`    |
| border | 是否显示外边框 | _boolean_ | `true` |

### Cell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 左侧标题 | _number \| string_ | - |
| value | 右侧内容 | _number \| string_ | - |
| label | 标题下方的描述信息 | _string_ | - |
| size | 单元格大小，可选值为 `large` | _string_ | - |
| iconLeft | 左侧[图标名称](#/components/icon/zh-CN)或图片链接 | _string_ | - |
| iconRight | 右侧[图标名称](#/components/icon/zh-CN)或图片链接 | _string_ | - |
| border | 是否显示内边框 | _boolean_ | `true` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| arrow | 是否显示箭头 | _boolean_ | `false` |
| arrowDirection | 箭头方向，可选值为 `left` `up` `down` | _string_ | `right` |
| titleStyle | 左侧标题额外样式 | _any_ | - |
| titleClass | 左侧标题额外类名 | _any_ | - |
| valueClass | 右侧内容额外类名 | _any_ | - |
| labelClass | 描述信息额外类名 | _any_ | - |
| className | 附加类名 | _string_ | `--` |
| style | 附加样式 | _objcet_ | `--` |

### Cell Events

| 事件名           | 说明               | 回调参数       |
| ---------------- | ------------------ | -------------- |
| onClick          | 点击单元格时触发   | _event: Event_ |
| onClickLeftIcon  | 点击左侧图标时触发 | _event: Event_ |
| onClickRightIcon | 点击右侧图标时触发 | _event: Event_ |

### Cell.Group Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 默认插槽       |
| title   | 自定义分组标题 |

### Cell Slots

| 名称      | 说明                        |
| --------- | --------------------------- |
| default   | 自定义右侧 value 的内容     |
| title     | 自定义左侧 title 的内容     |
| label     | 自定义标题下方 label 的内容 |
| iconLeft  | 自定义左侧图标              |
| iconRight | 自定义右侧图标              |
