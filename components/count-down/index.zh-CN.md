# CountDown 倒计时

### 介绍

用于实时展示倒计时数值，支持毫秒精度。

## 代码演示

### 基础用法

`time` 属性表示倒计时总时长，单位为毫秒。

```jsx
import { CountDown } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-count-down">
      <CountDown time={30 * 60 * 60 * 1000} />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义格式

通过 `format` 属性设置倒计时文本的内容。

```jsx
import { CountDown } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-count-down">
      <CountDown time={30 * 60 * 60 * 1000} format="DD 天 HH 时 mm 分 ss 秒" />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 毫秒级渲染

倒计时默认每秒渲染一次，设置 `millisecond` 属性可以开启毫秒级渲染。

```jsx
import { CountDown } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-count-down">
      <CountDown millisecond time={30 * 60 * 60 * 1000} format="HH:mm:ss:SS" />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义样式

通过插槽自定义倒计时的样式，`timeData` 对象格式见下方表格。

```jsx
import { CountDown } from 'mooli-mobile';

const Demo = () => {
  const customStyle = (timeData) => {
    return (
      <div>
        <span className="block">{timeData.hours}</span>
        <span className="colon">:</span>
        <span className="block">{timeData.minutes}</span>
        <span className="colon">:</span>
        <span className="block">{timeData.seconds}</span>
      </div>
    );
  };
  return (
    <div className="demo-count-down">
      <CountDown time={30 * 60 * 60 * 1000}>{customStyle}</CountDown>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 手动控制

通过 ref 获取到组件实例后，可以调用 `start`、`pause`、`reset` 方法。

```jsx
import { CountDown, Grid, Icon } from 'mooli-mobile';

const Demo = () => {
  const countDown = React.useRef();
  return (
    <div className="demo-count-down">
      <div className="count-down-text">
        倒计时：
        <CountDown
          ref={countDown}
          millisecond
          autoStart={false}
          time={3000}
          format="ss:SS"
        />
      </div>
      <Grid className="count-down-btn">
        <Grid.Item
          onClick={() => countDown.current && countDown.current.start()}
        >
          <Icon name="play-circle-o" />
          <span>开始</span>
        </Grid.Item>
        <Grid.Item
          onClick={() => countDown.current && countDown.current.pause()}
        >
          <Icon name="pause-circle-o" />
          <span>暂停</span>
        </Grid.Item>
        <Grid.Item
          onClick={() => countDown.current && countDown.current.reset()}
        >
          <Icon name="replay" />
          <span>重置</span>
        </Grid.Item>
      </Grid>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数        | 说明                 | 类型               | 默认值     |
| ----------- | -------------------- | ------------------ | ---------- |
| time        | 倒计时时长，单位毫秒 | _number \| string_ | `0`        |
| format      | 时间格式             | _string_           | `HH:mm:ss` |
| autoStart   | 是否自动开始倒计时   | _boolean_          | `true`     |
| millisecond | 是否开启毫秒级渲染   | _boolean_          | `false`    |

### format 格式

| 格式 | 说明         |
| ---- | ------------ |
| DD   | 天数         |
| HH   | 小时         |
| mm   | 分钟         |
| ss   | 秒数         |
| S    | 毫秒（1 位） |
| SS   | 毫秒（2 位） |
| SSS  | 毫秒（3 位） |

### Events

| 事件名   | 说明             | 回调参数             |
| -------- | ---------------- | -------------------- |
| onFinish | 倒计时结束时触发 | -                    |
| onChange | 倒计时变化时触发 | _timeData: TimeData_ |

### Slots

| 名称    | 说明       | 参数                 |
| ------- | ---------- | -------------------- |
| default | 自定义内容 | _timeData: TimeData_ |

### TimeData 格式

| 名称         | 说明     | 类型     |
| ------------ | -------- | -------- |
| days         | 剩余天数 | _number_ |
| hours        | 剩余小时 | _number_ |
| minutes      | 剩余分钟 | _number_ |
| seconds      | 剩余秒数 | _number_ |
| milliseconds | 剩余毫秒 | _number_ |

### 方法

通过 ref 可以获取到 CountDown 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| start | 开始倒计时 | - | - |
| pause | 暂停倒计时 | - | - |
| reset | 重设倒计时，若 `autoStart` 为 `true`，重设后会自动开始倒计时 | - | - |
