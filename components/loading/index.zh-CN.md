# Loading 加载

### 介绍

加载图标，用于表示加载中的过渡状态。

## 代码演示

### 加载类型

通过 `type` 属性可以设置加载图标的类型，默认为 `circular`，可选值为 `spinner、beat、clockwise、line`。

```jsx
import { Loading } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-loading">
    <Loading vertical>circular</Loading>
    <Loading vertical type="spinner">
      spinner
    </Loading>
    <Loading vertical type="beat">
      beat
    </Loading>
    <Loading vertical type="clockwise">
      clockwise
    </Loading>
    <Loading vertical type="line">
      line
    </Loading>
  </div>,
  mountNode,
);
```

### 自定义颜色

通过 `color` 属性设置加载图标的颜色。

```jsx
import { Loading } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-loading">
    <Loading color="#52c41a" />
    <Loading color="#1890ff" type="spinner" />
    <Loading color="#faad14" type="beat" />
    <Loading color="#666666" type="clockwise" />
    <Loading color="#ff4d4f" type="line" />
  </div>,
  mountNode,
);
```

### 自定义大小

通过 `size` 属性设置加载图标的大小，默认单位为 `px`。

```jsx
import { Loading } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-loading">
    <Loading size="16" />
    <Loading size="28" />
    <Loading size="36" />
  </div>,
  mountNode,
);
```

### 自定义指示符

若默认的加载指示符不满足要求，用户可通过 `indicator` 属性自行定义。

```jsx
import { Loading } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-loading">
    <Loading
      indicator={
        <svg className="icon" fill="currentColor" viewBox="0 0 1024 1024">
          <path
            d="M832 512c0-176-144-320-320-320V128c211.2 0 384 172.8 384 384h-64zM192 512c0 176 144 320 320 320v64C300.8 896 128 723.2 128 512h64z"
            p-id="8972"
          ></path>
        </svg>
      }
    />
  </div>,
  mountNode,
);
```

### 自定义加载文案

加载文案可以为字符串也可以为 reactNode 节点。

```jsx
import { Loading } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-loading">
    <Loading>加载中...</Loading>
  </div>,
  mountNode,
);
```

### 自定义文案大小和颜色

加载文案可以为字符串也可以为 reactNode 节点。

```jsx
import { Loading } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-loading">
    <Loading textColor="#0094ff">加载中...</Loading>
    <Loading textSize="16">加载中...</Loading>
  </div>,
  mountNode,
);
```

### 垂直排列

加载文案方向可以设置为垂直方向。

```jsx
import { Loading } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-loading">
    <Loading type="spinner" vertical>
      加载中...
    </Loading>
  </div>,
  mountNode,
);
```

## API

### Props

| 参数      | 说明                          | 类型               | 默认值     |
| --------- | ----------------------------- | ------------------ | ---------- |
| color     | 颜色                          | _string_           | `#c9c9c9`  |
| type      | 类型，可选值为 `spinner`      | _string_           | `circular` |
| size      | 加载图标大小，默认单位为 `px` | _number \| string_ | `30px`     |
| textSize  | 文字大小，默认单位为 `px`     | _number \| string_ | `14px`     |
| textColor | 文字颜色                      | _string_           | `#c9c9c9`  |
| indicator | 指示符                        | _string_           | `--`       |
| vertical  | 是否垂直排列图标和文字内容    | _boolean_          | `false`    |
| rotate    | 是否旋转                      | _boolean_          | `true`     |
| className | 附加类名                      | _string_           | `--`       |
| style     | 附加样式                      | _objcet_           | `--`       |

### Slots

| 名称     | 说明     |
| -------- | -------- |
| children | 加载文案 |
