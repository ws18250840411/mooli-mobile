# Flex

### Introduce

Quickly and easily create Flex with `Row` and `Col`.

## Usage

### Basic Usage

Flex are based on 24-column. The attribute `span` in `Col` means the number of column the grid spans. Of course, You can use `offset` attribute to set number of spacing on the left side of the grid.

```jsx
import { Row, Col } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-col">
    <Row>
      <Col span="8">span: 8</Col>
      <Col span="8">span: 8</Col>
      <Col span="8">span: 8</Col>
    </Row>
    <Row>
      <Col span="4">span: 4</Col>
      <Col span="10" offset="4">
        offset: 4, span: 10
      </Col>
    </Row>
  </div>,
  mountNode,
);
```

### Column Spacing

Set grid spacing using `gutter` attribute. The default value is 0.

```jsx
import { Row, Col } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-col">
    <Row gutter="20">
      <Col span="8">span: 8</Col>
      <Col span="8">span: 8</Col>
      <Col span="8">span: 8</Col>
    </Row>
  </div>,
  mountNode,
);
```

### Align

Set the `justify` attribute to `start`, `center`, `end`, `space-around`, `space-between` and other attributes to facilitate flexible alignment. Set `wrap` to `false` without line wrapping. The default is automatic line wrapping.

```jsx
import { Row, Col } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-col">
    <Row wrap={false}>
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
    </Row>
    <Row justify="center">
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
    </Row>
    <Row justify="end">
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
    </Row>
    <Row justify="space-between">
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
    </Row>
    <Row justify="space-around">
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
      <Col span="6">span: 6</Col>
    </Row>
  </div>,
  mountNode,
);
```

## API

### Row Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| gutter | Grid spacing（px） | _number \| string_ | - |
| wrap | Auto wrap | _boolean_ | `true` |
| justify | set to end/center/space-around/space-between | _string_ | `start` |
| align | set to center/bottom | _string_ | `top` |
| className | Additional className | _string_ | `--` |
| style | Additional style | _objcet_ | `--` |

### Col Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| span | number of column the grid spans | _number \| string_ | - |
| offset | number of spacing on the left side of the grid | _number \| string_ | - |
| className | Additional className | _string_ | `--` |
| style | Additional style | _objcet_ | `--` |

### Row Events

| Event   | Description                     | Arguments      |
| ------- | ------------------------------- | -------------- |
| onClick | Emitted when the row is clicked | _event: Event_ |

### Col Events

| Event | Description                     | Arguments      |
| ----- | ------------------------------- | -------------- |
| click | Emitted when the col is clicked | _event: Event_ |
