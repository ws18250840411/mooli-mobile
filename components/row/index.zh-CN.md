# Flex 布局

### 介绍

Flex 提供了 `Row` 和 `Col` 两个组件来进行行列布局。

## 代码演示

### 基础用法

Flex 组件提供了 `24列栅格`，通过在 `Col` 上添加 `span` 属性设置列所占的宽度百分比。此外，添加 `offset` 属性可以设置列的偏移宽度，计算方式与 span 相同。

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

### 设置列元素间距

通过 `gutter` 属性可以设置列元素之间的间距，默认间距为 0。

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

### 设置对齐方式

将 `justify` 属性设置为 `start`、`center`、`end`、`space-around`、`space-between`等等属性，便于进行灵活的对齐。设置`wrap`为`false`不换行，默认自动换行。

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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 列元素之间的间距（单位为 px） | _number \| string_ | - |
| wrap | 是否自动换行 | _boolean_ | `true` |
| justify | Flex 主轴对齐方式，可选值为 `end` `center` <br> `space-around` `space-between` | _string_ | `start` |
| align | Flex 交叉轴对齐方式，可选值为 `center` `bottom` | _string_ | `top` |
| className | 附加类名 | _string_ | `--` |
| style | 附加样式 | _objcet_ | `--` |

### Col Props

| 参数      | 说明           | 类型               | 默认值 |
| --------- | -------------- | ------------------ | ------ |
| span      | 列元素宽度     | _number \| string_ | -      |
| offset    | 列元素偏移距离 | _number \| string_ | -      |
| className | 附加类名       | _string_           | `--`   |
| style     | 附加样式       | _objcet_           | `--`   |

### Row Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| click  | 点击时触发 | _event: Event_ |

### Col Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| click  | 点击时触发 | _event: Event_ |
