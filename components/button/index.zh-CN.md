# Button 按钮

### 基本用法

通过以下方式来全局注册组件，更多注册方式请参考[组件注册]

```jsx
import { Button } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-button">
    <Button type="primary">主要按钮</Button>
    <Button type="info">信息按钮</Button>
    <Button type="default">默认按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">危险按钮</Button>
  </div>,
  mountNode,
);
```

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```jsx
import { Button } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-button">
    <Button plain type="primary">
      朴素按钮
    </Button>
    <Button plain type="info">
      朴素按钮
    </Button>
  </div>,
  mountNode,
);
```

### 细边框

设置 `hairline` 属性可以展示 0.5px 的细边框。

```jsx
import { Button } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-button">
    <Button plain hairline type="primary">
      细边框按钮
    </Button>
    <Button plain hairline type="info">
      细边框按钮
    </Button>
  </div>,
  mountNode,
);
```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```jsx
import { Button } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-button">
    <Button disabled type="primary">
      禁用状态
    </Button>
    <Button disabled type="info">
      禁用状态
    </Button>
  </div>,
  mountNode,
);
```

### 按钮形状

通过 `square` 设置方形按钮，通过 `round` 设置圆形按钮。

```jsx
import { Button } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-button">
    <Button square type="primary">
      方形按钮
    </Button>
    <Button round type="info">
      圆形按钮
    </Button>
  </div>,
  mountNode,
);
```

### 加载状态

通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 `loadingText` 设置加载状态下的文字。

```jsx
import { Button } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-button">
    <Button loading type="primary" />
    <Button
      loading
      loadingIndicator={
        <svg className="icon" fill="currentColor" viewBox="0 0 1024 1024">
          <path
            d="M832 512c0-176-144-320-320-320V128c211.2 0 384 172.8 384 384h-64zM192 512c0 176 144 320 320 320v64C300.8 896 128 723.2 128 512h64z"
            p-id="8972"
          ></path>
        </svg>
      }
      loadingText="自定义指示符"
      type="primary"
    />
    <Button
      loading
      loadingType="spinner"
      type="primary"
      loadingText="加载中..."
    />
    <Button loading loadingType="clockwise" type="info">
      玩命中...
    </Button>
  </div>,
  mountNode,
);
```

### 图标按钮

通过 `icon` 属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。

```jsx
import { Button } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-button">
    <Button icon="plus" type="primary" />
    <Button icon="plus" type="primary">
      新增
    </Button>
    <Button icon="https://img01.yzcdn.cn/vant/user-active.png" type="default">
      自定义图标
    </Button>
  </div>,
  mountNode,
);
```

### 按钮尺寸

支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal`。

```jsx
import { Button } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-button">
    <Button size="large" type="info">
      大号按钮
    </Button>
    <Button size="normal" type="info">
      普通按钮
    </Button>
    <Button size="small" type="info">
      小型按钮
    </Button>
    <Button size="mini" type="info">
      迷你按钮
    </Button>
  </div>,
  mountNode,
);
```

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素。

```jsx
import { Button } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-button">
    <Button block type="primary">
      块级元素
    </Button>
  </div>,
  mountNode,
);
```

### 自定义颜色

通过 `color` 属性可以自定义按钮的颜色。

```jsx
import { Button } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-button">
    <Button color="#7232dd">单色按钮</Button>
    <Button color="#7232dd" plain>
      块级元素
    </Button>
    <Button color="linear-gradient(to right, #ff6034, #ee0a24)">
      渐变色按钮
    </Button>
  </div>,
  mountNode,
);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `info` `warning` `danger` | _string_ | `default` |
| size | 尺寸，可选值为 `large` `small` `mini` | _string_ | `normal` |
| color | 按钮颜色，支持传入 `linear-gradient` 渐变色 | _string_ | - |
| icon | 图标名称 | _string_ | - |
| iconSize | 加载图标大小 | _string_ | `16px` |
| iconPosition | 图标展示位置，可选值为 `right` | _string_ | `left` |
| block | 是否为块级元素 | _boolean_ | `false` |
| plain | 是否为朴素按钮 | _boolean_ | `false` |
| square | 是否为方形按钮 | _boolean_ | `false` |
| round | 是否为圆形按钮 | _boolean_ | `false` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| hairline | 是否使用 0.5px 边框 | _boolean_ | `false` |
| loading | 是否显示为加载状态 | _boolean_ | `false` |
| loadingText | 加载状态提示文字 | _string_ | - |
| loadingIndicator | 自定加载指示符 | _string_ | - |
| loadingType | 加载图标类型 | _string_ | `circular` |
| loadingSize | 加载图标大小 | _string_ | `20px` |
| className | 附加类名 | _string_ | `--` |
| style | 附加样式 | _objcet_ | `--` |

### Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | _event: Event_      |
| touchstart | 开始触摸按钮时触发                       | _event: TouchEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 按钮内容 |
