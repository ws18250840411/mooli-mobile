# Loading

### Introduce

The load icon is used to indicate the transition state during loading

## Usage

### Type

The type of loading icon can be set through the `type` attribute. The default is `circular`，The optional values are `spinner、beat、clockwise、line`。

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

### Color

Set the color of the loading icon through the `color` attribute

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

### Size

Set the size of the loading icon through the `size` attribute. The default unit is `px`

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

### Indicator

If the default load indicator does not meet the requirements, users can define it by themselves through the `indicator` attribute

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

### Text

The loaded copy can be a string or a reactnode node.

```jsx
import { Loading } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-loading">
    <Loading>loading...</Loading>
  </div>,
  mountNode,
);
```

### Text Color

Set the color and size of the loaded copy through the `textcolor` and `textsize` properties.

```jsx
import { Loading } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-loading">
    <Loading textColor="#0094ff">loading...</Loading>
    <Loading textSize="16">loading...</Loading>
  </div>,
  mountNode,
);
```

### Vertical

The load file direction can be set to the vertical direction.

```jsx
import { Loading } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-loading">
    <Loading type="spinner" vertical>
      loading...
    </Loading>
  </div>,
  mountNode,
);
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| color | Loading color | _string_ | `#c9c9c9` |
| type | Can be set to `spinner` | _string_ | `circular` |
| size | Icon size | _number \| string_ | `30px` |
| textSize | Text font size | _number \| string_ | `14px` |
| textColor | Text color | _string_ | `#c9c9c9` |
| indicator | Indicator | _string_ | `--` |
| vertical | Whether to arrange icons and text content vertically | _boolean_ | `false` |
| rotate | Rotate or not | _boolean_ | `true` |
| className | additional classname | _string_ | `--` |
| style | additional style | _objcet_ | `--` |

### Slots

| Name     | Description  |
| -------- | ------------ |
| children | Loading text |
