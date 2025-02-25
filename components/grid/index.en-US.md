# Grid

### Introduce

The palace grid can divide the page into equal width blocks in the horizontal direction for displaying content or page navigation.

## Usage

### Basic Usage

```jsx
import { Grid, GridItem, Icon } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-grid">
    <Grid>
      {Array(4)
        .fill(undefined)
        .map((i, key) => (
          <GridItem key={key}>
            <Icon name="photo-o" />
            <span>Text</span>
          </GridItem>
        ))}
    </Grid>
  </div>,
  mountNode,
);
```

### Column Num

By default, one row displays four grids. You can customize the number of columns through `column`.

```jsx
import { Grid, GridItem, Icon } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-grid">
    <Grid column="3">
      {Array(6)
        .fill(undefined)
        .map((i, key) => (
          <GridItem key={key}>
            <Icon name="photo-o" />
            <span>Text</span>
          </GridItem>
        ))}
    </Grid>
  </div>,
  mountNode,
);
```

### Square

After setting the `Square` property, the height and width of the grid will be consistent.

```jsx
import { Grid, GridItem, Icon } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-grid">
    <Grid square>
      {Array(3)
        .fill(undefined)
        .map((i, key) => (
          <GridItem key={key}>
            <Icon name="photo-o" />
            <span>Text</span>
          </GridItem>
        ))}
    </Grid>
  </div>,
  mountNode,
);
```

### Gutter

Set the distance between grids through the `gutter` attribute.

```jsx
import { Grid, GridItem, Icon } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-grid">
    <Grid gutter="24">
      {Array(3)
        .fill(undefined)
        .map((i, key) => (
          <GridItem key={key}>
            <Icon name="photo-o" />
            <span>Text</span>
          </GridItem>
        ))}
    </Grid>
  </div>,
  mountNode,
);
```

### Horizontal

Setting the `direction` property to `horizontal` allows the contents of the grid to be arranged horizontally

```jsx
import { Grid, GridItem, Icon } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-grid">
    <Grid direction="horizontal">
      {Array(3)
        .fill(undefined)
        .map((i, key) => (
          <GridItem key={key}>
            <Icon name="photo-o" />
            <span>Text</span>
          </GridItem>
        ))}
    </Grid>
  </div>,
  mountNode,
);
```

## API

### Grid Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| column | Column Num | _number \| string_ | `4` |
| gutter | Gutter | _number \| string_ | `0` |
| border | Whether to show border | _boolean_ | `true` |
| square | Whether to be square shape | _boolean_ | `false` |
| direction | Content arrangement direction, can be set to `horizontal` | _string_ | `vertical` |

### GridItem Events

| Event   | Description                       | Arguments      |
| ------- | --------------------------------- | -------------- |
| onClick | Emitted when component is clicked | _event: Event_ |

### GridItem Slots

| Name    | Description    |
| ------- | -------------- |
| default | Custom content |
