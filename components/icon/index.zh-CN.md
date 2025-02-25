# Icon 图标

### 介绍

基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 `icon` 属性引用。

## 代码演示

### 基础用法

`Icon` 的 `name` 属性支持传入图标名称或图片链接，所有可用的图标名称见下方示例。

```jsx
import { Icon, Row, Col } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-icon">
    <Row>
      <Col span={6}>
        <Icon name="chat-o" />
      </Col>
      <Col span={6}>
        <Icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
      </Col>
    </Row>
  </div>,
  mountNode,
);
```

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点；设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```jsx
import { Icon, Row, Col } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-icon">
    <Row>
      <Col span={6}>
        <Icon name="chat-o" dot />
      </Col>
      <Col span={6}>
        <Icon name="chat-o" badge="9" />
      </Col>
      <Col span={6}>
        <Icon name="chat-o" badge="99+" />
      </Col>
    </Row>
  </div>,
  mountNode,
);
```
### 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `px`。

```jsx
import { Icon, Row, Col } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-icon">
    <Row>
      <Col span={6}>
        <Icon name="smile-o" size="24" />
      </Col>
      <Col span={6}>
        <Icon name="smile-o" size="30" />
      </Col>
      <Col span={6}>
        <Icon name="smile-o" size="40" />
      </Col>
    </Row>
  </div>,
  mountNode,
);
```

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

```jsx
import { Icon, Row, Col } from 'mooli-mobile';

ReactDOM.render(
  <div className="demo-icon">
    <Row>
      <Col span={6}>
        <Icon name="cart-o" color="#07c160" />
      </Col>
      <Col span={6}>
        <Icon name="fire-o" color="#1989fa" />
      </Col>
      <Col span={6}>
        <Icon name="coupon-o" color="#ff976a" />
      </Col>
    </Row>
  </div>,
  mountNode,
);
```

### 基础图标

```jsx
import { Icon, Row, Col } from 'mooli-mobile';

const basic = [
  'success',
  'plus',
  'cross',
  'fail',
  'arrow',
  'arrow-left',
  'arrow-up',
  'arrow-down',
];

ReactDOM.render(
  <div className="demo-icon">
    <Row>
    {basic.map((item) => (
      <Col key={item} span={6}>
        <Icon name={item} />
        <span>{item}</span>
      </Col>
    ))}
    </Row>
  </div>,
  mountNode,
);
```

### 线框风格

`Icon` 的 `type` 属性支持传入图标名称或图片链接，所有可用的图标名称见右侧示例。

```jsx
import { Icon, Row, Col } from 'mooli-mobile';

const basic = [
  'location-o',
    'like-o',
    'star-o',
    'phone-o',
    'setting-o',
    'fire-o',
    'coupon-o',
    'cart-o',
    'shopping-cart-o',
    'cart-circle-o',
    'friends-o',
    'comment-o',
    'gem-o',
    'gift-o',
    'point-gift-o',
    'send-gift-o',
    'service-o',
    'bag-o',
    'todo-list-o',
    'balance-list-o',
    'close',
    'clock-o',
    'question-o',
    'passed',
    'add-o',
    'gold-coin-o',
    'info-o',
    'play-circle-o',
    'pause-circle-o',
    'stop-circle-o',
    'warning-o',
    'phone-circle-o',
    'music-o',
    'smile-o',
    'thumb-circle-o',
    'comment-circle-o',
    'browsing-history-o',
    'underway-o',
    'more-o',
    'video-o',
    'shop-o',
    'shop-collect-o',
    'share-o',
    'chat-o',
    'smile-comment-o',
    'vip-card-o',
    'award-o',
    'diamond-o',
    'volume-o',
    'cluster-o',
    'wap-home-o',
    'photo-o',
    'gift-card-o',
    'expand-o',
    'medal-o',
    'good-job-o',
    'manager-o',
    'label-o',
    'bookmark-o',
    'bill-o',
    'hot-o',
    'hot-sale-o',
    'new-o',
    'new-arrival-o',
    'goods-collect-o',
    'eye-o',
    'delete-o',
    'font-o',
    // without corresponding filled icon
    'balance-o',
    'refund-o',
    'birthday-cake-o',
    'user-o',
    'orders-o',
    'tv-o',
    'envelop-o',
    'flag-o',
    'flower-o',
    'filter-o',
    'bar-chart-o',
    'chart-trending-o',
    'brush-o',
    'bullhorn-o',
    'hotel-o',
    'cashier-o',
    'newspaper-o',
    'warn-o',
    'notes-o',
    'calendar-o',
    'bulb-o',
    'user-circle-o',
    'desktop-o',
    'apps-o',
    'home-o',
    'back-top',
    'search',
    'points',
    'edit',
    'qr',
    'qr-invalid',
    'closed-eye',
    'down',
    'scan',
    'revoke',
    'free-postage',
    'certificate',
    'logistics',
    'contact',
    'cash-back-record',
    'after-sale',
    'exchange',
    'upgrade',
    'ellipsis',
    'description',
    'records',
    'sign',
    'completed',
    'failure',
    'ecard-pay',
    'peer-pay',
    'balance-pay',
    'credit-pay',
    'debit-pay',
    'cash-on-deliver',
    'other-pay',
    'tosend',
    'pending-payment',
    'paid',
    'aim',
    'discount',
    'idcard',
    'replay',
    'shrink',
];

ReactDOM.render(
  <div className="demo-icon">
    <Row>
    {basic.map((item) => (
      <Col  key={item} span={6}>
        <Icon name={item} />
        <span>{item}</span>
      </Col>
    ))}
    </Row>
  </div>,
  mountNode,
);
```

### 实底风格

`Icon` 的 `type` 属性支持传入图标名称或图片链接，所有可用的图标名称见右侧示例。

```jsx
import { Icon, Row, Col } from 'mooli-mobile';

const basic = [
  'location',
    'like',
    'star',
    'phone',
    'setting',
    'fire',
    'coupon',
    'cart',
    'shopping-cart',
    'cart-circle',
    'friends',
    'comment',
    'gem',
    'gift',
    'point-gift',
    'send-gift',
    'service',
    'bag',
    'todo-list',
    'balance-list',
    'clear',
    'clock',
    'question',
    'checked',
    'add',
    'gold-coin',
    'info',
    'play-circle',
    'pause-circle',
    'stop-circle',
    'warning',
    'phone-circle',
    'music',
    'smile',
    'thumb-circle',
    'comment-circle',
    'browsing-history',
    'underway',
    'more',
    'video',
    'shop',
    'shop-collect',
    'share',
    'chat',
    'smile-comment',
    'vip-card',
    'award',
    'diamond',
    'volume',
    'cluster',
    'wap-home',
    'photo',
    'gift-card',
    'expand',
    'medal',
    'good-job',
    'manager',
    'label',
    'bookmark',
    'bill',
    'hot',
    'hot-sale',
    'new',
    'new-arrival',
    'goods-collect',
    'eye',
    'delete',
    'font',
    // without corresponding outline icon
    'alipay',
    'wechat',
    'photograph',
    'youzan-shield',
    'umbrella-circle',
    'bell',
    'printer',
    'map-marked',
    'card',
    'add-square',
    'live',
    'lock',
    'audio',
    'graphic',
    'column',
    'invition',
    'play',
    'pause',
    'stop',
    'weapp-nav',
    'ascending',
    'descending',
    'bars',
    'wap-nav',
    'enlarge',
    'photo-fail',
    'sort',
];

ReactDOM.render(
  <div className="demo-icon">
    <Row>
    {basic.map((item) => (
      <Col key={item} span={6}>
        <Icon name={item} />
        <span>{item}</span>
      </Col>
    ))}
    </Row>
  </div>,
  mountNode,
);
```
## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | _string_ | - |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| badge  | 图标右上角徽标的内容 | _number \| string_ | - |
| color | 图标颜色 | _string_ | `inherit` |
| size | 图标大小，如 `20px` `2em`，默认单位为`px` | _number \| string_ | `inherit` |
| className | 附加类名       | _string_           | `--`   |
| style     | 附加样式       | _objcet_           | `--`   |

### Events

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| click  | 点击图标时触发 | _event: Event_ |