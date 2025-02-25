# Swiper 轮播

### 介绍

用于循环播放一组图片或内容。

## 代码演示

### 基础用法

可以通过 `arrow` 属性设置是否显示左右箭头；设置 `indicator`显示指示器；设置 `touchable` 是否可以通过手势滑动。

```jsx
import { Swiper } from 'mooli-mobile';

const Demo = () => {
  const [instance, setInstance] = React.useState(); // 获取swiper实例方法，可执行相应方法

  React.useEffect(() => {
    if (instance) {
      setTimeout(() => {
        instance.scrollNext(); // 3 秒后自动滚到下一个
      }, 3000);
    }
  }, [instance]);
  const onChange = (index) => {
    console.log(`当前index值：${index}`);
    console.log(`能否切到下个节点：${instance.canScrollNext()}`);
  };
  return (
    <div className="demo-swiper">
      <Swiper
        arrow
        indicator
        touchable={false}
        onChange={onChange}
        onRef={(instance) => setInstance(instance)}
      >
        <Swiper.Item>1</Swiper.Item>
        <Swiper.Item>2</Swiper.Item>
        <Swiper.Item>3</Swiper.Item>
      </Swiper>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自动轮播/循环轮播

每个 Swiper.Item 代表一张轮播卡片，可以通过 `autoPlay` 属性设置自动轮播的间隔（默认值 4000）；设置 `loop` 开启轮播模式；设置 `initial` 可初始位置索引值（默认 0）。

```jsx
import { Swiper } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-swiper">
      <Swiper autoPlay={3000} initial={1} loop>
        <Swiper.Item>1</Swiper.Item>
        <Swiper.Item>2</Swiper.Item>
        <Swiper.Item>3</Swiper.Item>
        <Swiper.Item>4</Swiper.Item>
        <Swiper.Item>5</Swiper.Item>
        <Swiper.Item>6</Swiper.Item>
      </Swiper>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 垂直切换

每个 Swiper.Item 代表一张轮播卡片，可以通过 `vertical` 属性开启垂直模式（注意：必须为父类容器设置高度）。

```jsx
import { Swiper } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-swiper">
      <Swiper vertical style={{ height: 150 }} indicator>
        <Swiper.Item>1</Swiper.Item>
        <Swiper.Item>2</Swiper.Item>
        <Swiper.Item>3</Swiper.Item>
      </Swiper>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 对齐方式（居中）

每个 Swiper.Item 代表一张轮播卡片，可以通过 `align` 属性可以设置幻灯片对齐方式，默认是从开始位置（`start`）对齐。

```jsx
import { Swiper } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-swiper">
      <Swiper align="center">
        <Swiper.Item style={{ minWidth: '80%' }}>1</Swiper.Item>
        <Swiper.Item style={{ minWidth: '80%' }}>2</Swiper.Item>
        <Swiper.Item style={{ minWidth: '80%' }}>3</Swiper.Item>
        <Swiper.Item style={{ minWidth: '80%' }}>4</Swiper.Item>
      </Swiper>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 幻灯片展示个数（2 个）

可以通过 `slideNums` 属性设置可以控制一次滚动一个幻灯片（注意：必须为 `Swiper.Item` 设置对应的宽度）。

```jsx
import { Swiper } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-swiper">
      <Swiper slideNums={2}>
        <Swiper.Item style={{ minWidth: '50%' }}>1</Swiper.Item>
        <Swiper.Item style={{ minWidth: '50%' }}>2</Swiper.Item>
        <Swiper.Item style={{ minWidth: '50%' }}>3</Swiper.Item>
        <Swiper.Item style={{ minWidth: '50%' }}>4</Swiper.Item>
        <Swiper.Item style={{ minWidth: '50%' }}>5</Swiper.Item>
      </Swiper>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 滚动方向（从右到左）

每个 Swiper.Item 代表一张轮播卡片，可以通过 `direction` 属性控制幻灯片方向，可选值为从左到右`ltr`和从右到左`rtl`。

```jsx
import { Swiper } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-swiper">
      <Swiper direction="rtl">
        <Swiper.Item>1</Swiper.Item>
        <Swiper.Item>2</Swiper.Item>
        <Swiper.Item>3</Swiper.Item>
      </Swiper>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 缩放效果

每个 Swiper.Item 代表一张轮播卡片，可以通过 `scale` 属性设置滚动缩放效果，可通过设置 `Swiper.Item` css 样式进行调整边距大小以及动画效果等等。

```jsx
import { Swiper } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-swiper">
      <Swiper scale>
        <Swiper.Item>1</Swiper.Item>
        <Swiper.Item>2</Swiper.Item>
        <Swiper.Item>3</Swiper.Item>
        <Swiper.Item>4</Swiper.Item>
        <Swiper.Item>5</Swiper.Item>
      </Swiper>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 滚动模式/自定义滑块大小

可以通过 `mode` 属性设置动画模式；可选值为 `slide` 滑动模式和 `scroll` 滚动模式。可直接通过设置 `Swiper.Item` 宽度控制滑块大小

```jsx
import { Swiper } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-swiper">
      <Swiper mode="scroll">
        <Swiper.Item style={{ minWidth: '80%' }}>1</Swiper.Item>
        <Swiper.Item style={{ minWidth: '60%' }}>2</Swiper.Item>
        <Swiper.Item style={{ minWidth: '90%' }}>3</Swiper.Item>
        <Swiper.Item style={{ minWidth: '70%' }}>4</Swiper.Item>
      </Swiper>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 进度条

每个 Swiper.Item 代表一张轮播卡片，可以通过 `progress` 属性设置进度条。

```jsx
import { Swiper } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-swiper">
      <Swiper progress>
        <Swiper.Item>1</Swiper.Item>
        <Swiper.Item>2</Swiper.Item>
        <Swiper.Item>3</Swiper.Item>
      </Swiper>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 缩略图

每个 Swiper.Item 代表一张轮播卡片，可以通过 `thumb` 属性设置显示缩略图，也可通过 `thumbNode` 自定义缩略图内容。

```jsx
import { Swiper } from 'mooli-mobile';

const thumbNode = () => {
  return (
    <div>
      <span className="demo-thumb" style={{ backgroundColor: '#eb2f96' }}>
        1
      </span>
      <span className="demo-thumb" style={{ backgroundColor: '#faad14' }}>
        2
      </span>
      <span className="demo-thumb" style={{ backgroundColor: '#2f54eb' }}>
        3
      </span>
      <span className="demo-thumb" style={{ backgroundColor: '#eb2f96' }}>
        4
      </span>
      <span className="demo-thumb" style={{ backgroundColor: '#fa541c' }}>
        5
      </span>
      <span className="demo-thumb" style={{ backgroundColor: '#2db7f5' }}>
        6
      </span>
    </div>
  );
};
const Demo = () => {
  return (
    <div className="demo-swiper">
      <Swiper thumb thumbNode={thumbNode()}>
        <Swiper.Item>1</Swiper.Item>
        <Swiper.Item>2</Swiper.Item>
        <Swiper.Item>3</Swiper.Item>
        <Swiper.Item>4</Swiper.Item>
        <Swiper.Item>5</Swiper.Item>
        <Swiper.Item>6</Swiper.Item>
      </Swiper>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 滚动进度

每个 Swiper.Item 代表一张轮播卡片，可以通过 `onScroll` 回调可以监听实时滚动进度值 `progress` 以及当前下标值 `index`。

```jsx
import { Swiper } from 'mooli-mobile';

const Demo = () => {
  const [progress, setProgress] = React.useState(0);
  const onScroll = (index: number, progress: number) => {
    console.log(`当前index值：${index}`);
    console.log(`当前进度值值：${progress}`);
    setProgress(progress)
  }
  return (
    <div className="demo-swiper">
      <Swiper onScroll={onScroll}>
        <Swiper.Item style={{
          opacity: 1 - progress
        }}>1</Swiper.Item>
        <Swiper.Item style={{
          opacity: progress
        }}>2</Swiper.Item>
      </Swiper>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 动画模式，可选项： `slide`滑动模式 、`scroll`滚动模式 | _string_ | `slide` |
| autoPlay | 自动轮播间隔，单位为 ms | _number \| string_ | `--` |
| initial | 初始位置索引值 | _number \| string_ | `0` |
| loop | 是否开启循环播放 | _boolean_ | `false` |
| indicator | 是否显示指示器 | _boolean_ | `false` |
| align | 对齐方式，可选值：`start`、`center`、`end` 、`number` | _string_ | `start` |
| vertical | 是否为纵向滚动 | _boolean_ | `false` |
| touchable | 是否可以通过手势滑动 | _boolean_ | `true` |
| progress | 是否显示滚动进度条 | _boolean_ | `false` |
| slideNums | 单屏展示幻灯片个数 | _number_ | `1` |
| direction | 滚动方向，可选值：`ltr`从左到右、`rtl`从右到左 | _number_ | `ltr` |
| scale | 是否开启缩放 | _boolean_ | `false` |
| arrow | 是否显示箭头 | _boolean_ | `false` |
| arrowIcon | 自定义箭头图标 | _string_ | `arrow-left` |
| thumb | 是否显示缩略图 | _boolean_ | `false` |
| thumbNode | 自定义缩略图节点 | _node_ | `--` |
| className | 附加类名 | _string_ | `--` |
| style | 附加样式 | _objcet_ | `--` |

### Events

| 事件名   | 说明                 | 回调参数            |
| -------- | -------------------- | ------------------- |
| onChange | 每一页轮播结束后触发 | index, 当前页的索引 |
| onScroll | 轮播过程实时触发 | index（当前页的索引）, process（进度值） |

### Swiper 方法

通过 onRef 回调可以获取到 Swiper 实例并调用实例方法，详见基础用法实例。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| scrollPrev | 切换到上一轮播 | - | - |
| scrollNext | 切换到下一轮播 | - | - |
| scrollTo | 切换到指定位置 | _index: number_ | - |
| scrollProgress | 滚动条进度值 | - | _number_ |
| slideNodes | 所有滑块的节点 | - | _node[]_ |
| selectedScrollSnap | 当前选中的索引值 | - | _number_ |
| containerNode | 父类容器节点 | - | _node_ |
| clickAllowed | 是否允许点击操作 | - | _boolean_ |
| canScrollNext | 能否切换到下一个 | - | _boolean_ |
| canScrollNext | 能否切换到下一个 | - | _boolean_ |
| on | 内置的绑定事件方法 | - | - |
| off | 内置的事件解绑方法 | - | - |
| reInit | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 | - | - |
| destroy | 销毁实例 | - | - |
