# Grid 宫格

### 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

## 代码演示

### 基础用法

```jsx
import { Grid, Icon } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-grid">
    <Grid>
      {Array(4)
        .fill(undefined)
        .map((i, key) => (
          <Grid.Item key={key}>
            <Icon name="photo-o" />
            <span>文字</span>
          </Grid.Item>
        ))}
    </Grid>
  </div>,
  mountNode,
);
```

### 自定义列数

默认一行展示四个格子，可以通过 `column` 自定义列数。

```jsx
import { Grid, Icon } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-grid">
    <Grid column="3">
      {Array(6)
        .fill(undefined)
        .map((i, key) => (
          <Grid.Item key={key}>
            <Icon name="photo-o" />
            <span>文字</span>
          </Grid.Item>
        ))}
    </Grid>
  </div>,
  mountNode,
);
```

### 正方形格子

设置 `square` 属性后，格子的高度会和宽度保持一致。

```jsx
import { Grid, Icon } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-grid">
    <Grid square>
      {Array(3)
        .fill(undefined)
        .map((i, key) => (
          <Grid.Item key={key}>
            <Icon name="photo-o" />
            <span>文字</span>
          </Grid.Item>
        ))}
    </Grid>
  </div>,
  mountNode,
);
```

### 格子间距

通过 `gutter` 属性设置格子之间的距离。

```jsx
import { Grid, Icon } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-grid">
    <Grid gutter="24">
      {Array(3)
        .fill(undefined)
        .map((i, key) => (
          <Grid.Item key={key}>
            <Icon name="photo-o" />
            <span>文字</span>
          </Grid.Item>
        ))}
    </Grid>
  </div>,
  mountNode,
);
```

### 内容横排

将 `direction` 属性设置为 `horizontal`，可以让宫格的内容呈横向排列。

```jsx
import { Grid, Icon } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-grid">
    <Grid direction="horizontal">
      {Array(3)
        .fill(undefined)
        .map((i, key) => (
          <Grid.Item key={key}>
            <Icon name="photo-o" />
            <span>文字</span>
          </Grid.Item>
        ))}
    </Grid>
  </div>,
  mountNode,
);
```

## API

### Grid Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| column | 列数 | _number \| string_ | `4` |
| gutter | 格子之间的间距，默认单位为`px` | _number \| string_ | `0` |
| border | 是否显示边框 | _boolean_ | `true` |
| square | 是否将格子固定为正方形 | _boolean_ | `false` |
| direction | 格子内容排列的方向，可选值为 `horizontal` | _string_ | `vertical` |

### Grid.Item Slots

| 名称    | 说明                 |
| ------- | -------------------- |
| default | 自定义宫格的所有内容 |
