# Toast 轻提示

### 介绍

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

```jsx
import { Toast, Cell } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-popup">
      <Cell
        arrow
        onClick={() => {
          Toast('文字提示');
        }}
      >
        文字提示
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Toast.loading({
            message: '加载提示',
            single: false
          });
        }}
      >
        加载提示
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Toast.success({
            message: '成功提示',
            // duration: 0,
          });
        }}
      >
        成功提示
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Toast.fail({
            message: '失败提示',
          });
        }}
      >
        失败提示
      </Cell>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义图标

通过 `icon` 选项可以自定义图标，支持传入[图标名称](#/components/icon/zh-CN)或图片链接，通过`loadingType` 属性可以自定义加载图标类型。

```jsx
import { Toast, Cell, Icon } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-popup">
      <Cell
        arrow
        onClick={() => {
          Toast({
            message: '自定义图标',
            icon: 'like-o',
            // duration: 0,
          });
        }}
      >
        自定义图标
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Toast({
            message: '自定义图片',
            icon: 'https://b.yzcdn.cn/vant/logo/weapp.svg',
          });
        }}
      >
        自定义图片
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Toast({
            message: '自定义组件',
            icon: <Icon name="smile-o" size="30" />,
          });
        }}
      >
        自定义图片组件
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Toast.loading({
            message: '加载中...',
            loadingType: 'spinner',
          });
        }}
      >
        自定义加载图标类型
      </Cell>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义位置

Toast 默认渲染在屏幕正中位置，通过 `position` 属性可以控制 Toast 展示的位置。

```jsx
import { Toast, Cell } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-popup">
      <Cell
        arrow
        onClick={() => {
          Toast({
            message: '顶部展示',
            position: 'top',
          });
        }}
      >
        顶部展示
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Toast({
            message: '底部展示',
            position: 'bottom',
          });
        }}
      >
        底部展示
      </Cell>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 修改默认配置

通过 `Toast.setDefaultOptions` 函数可以全局修改 Toast 的默认配置；通过 `Toast.resetDefaultOptions` 函数可以全局重置 Toast 的默认配置。

```jsx
import { Toast, Cell } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-popup">
      <Cell
        arrow
        onClick={() => {
          Toast.setDefaultOptions({ duration: 10000 });
        }}
      >
        设置全局所有 Toast 时长10s
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Toast.resetDefaultOptions();
        }}
      >
        重置所有全局设置
      </Cell>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 其他设置

通过 `forbidClick` 属性可以控制 Toast 是否禁止背景点击。同时可以通过 `duration` 展示时长(ms)，值为 0 时，toast 不会消失。

```jsx
import { Toast, Cell } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-popup">
      <Cell
        arrow
        onClick={() => {
          Toast({
            message: '禁止背景点击',
            forbidClick: true,
            onClose: () => {
              console.log('结束时触发');
            },
          });
        }}
      >
        禁止背景点击
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Toast({
            message: '展示时长4s',
            closeOnClick: true,
            duration: 4000,
          });
        }}
      >
        展示时长4s，点击关闭
      </Cell>
      <Cell
        arrow
        onClick={() => {
          Toast.clear();
        }}
      >
        关闭所有 Toast
      </Cell>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### 方法

| 方法名        | 说明         | 参数                 | 返回值     |
| ------------- | ------------ | -------------------- | ---------- |
| Toast         | 展示提示     | `options \| message` | toast 实例 |
| Toast.loading | 展示加载提示 | `options \| message` | toast 实例 |
| Toast.success | 展示成功提示 | `options \| message` | toast 实例 |
| Toast.fail    | 展示失败提示 | `options \| message` | toast 实例 |
| Toast.clear   | 关闭所有提示 | `clearAll: boolean`  | `void`     |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 提示类型，可选值为 `loading` `success`<br>`fail` `html` | _string_ | `text` |
| position | 位置，可选值为 `top` `bottom` `center` | _string_ | `center` |
| message | 文本内容，支持通过`\n`换行 | _string_ | `--` |
| icon | 图标名称 | _string_ | `--` |
| iconSize | 图标大小，如 `20px` `2em`，默认单位为 `px` | _number \| string_ | `36px` |
| loadingType | 加载图标类型, 可选值为 `spinner` | _string_ | `circular` |
| forbidClick | 是否禁止背景点击 | _boolean_ | `false` |
| single | 是否单例模式，即同一时间只会存在一个 Toast | _boolean_ | `true` |
| closeOnClick | 是否在点击后关闭 | _boolean_ | `false` |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | _number_ | `2000` |
| transition | 动画属性（可参考 Popup 组件定义） | _string_ | `mooli-fade` |
| className | 附加类名 | _string_ | `--` |
| style | 附加样式 | _objcet_ | `--` |

### Events

| 事件名   | 说明           | 回调参数            |
| -------- | -------------- | ------------------- |
| onEnter  | 动画开始时触发 | _event: MouseEvent_ |
| onExited | 动画结束时触发 | _event: MouseEvent_ |
| onClick  | 点击触发       | _event: MouseEvent_ |
| onClose  | 关闭时触发     | _event: MouseEvent_ |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | message 内容 |
