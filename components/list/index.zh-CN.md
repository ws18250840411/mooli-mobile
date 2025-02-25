# List 列表

### 介绍

瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。

## 代码演示

### 基础用法

List 组件通过 `loading` 和 `finished` 两个变量控制加载状态，当组件滚动到底部时，会触发 `load` 事件并将 `loading` 设置成 `true`。此时可以发起异步操作并更新数据，数据更新完毕后，将 `loading` 设置成 `false` 即可。若数据已全部加载完毕，则直接将 `finished` 设置成 `true` 即可。

```jsx
import { List, Cell } from 'mooli-mobile';

const Demo = () => {
  const [list, setList] = React.useState([]);
  const [finished, setFinished] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const fetchData = () => {
    setTimeout(() => {
      let curList = [...list];
      for (let i = 0; i < 14; i++) {
        curList.push(undefined);
      }
      // 加载状态结束
      setLoading(false);
      // 显示错误提示
      if (curList.length >= 40 && curList.length < 52) {
        setError(true);
      }
      // 显示加载完成
      if (curList.length >= 52) {
        setFinished(true);
      }
      setList(curList);
    }, 1000);
  };
  const onLoad = () => {
    setLoading(true);
    fetchData();
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="demo-list">
      <List
        finished={finished}
        loading={loading}
        error={error}
        onLoad={onLoad}
        finishedText="没有更多了"
      >
        {list.map((item, index) => (
          <Cell key={index} title={index} />
        ))}
      </List>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| loading | 是否处于加载状态，加载过程中不触发`onLoad`事件 | _boolean_ | `false` |
| finished | 是否已加载完成，加载完成后不再触发`onLoad`事件 | _boolean_ | `false` |
| error | 是否加载失败，加载失败后点击错误提示可以重新<br>触发`onLoad`事件 | _boolean_ | `false` |
| offset | 滚动条与底部距离小于 offset 时触发`onLoad`事件 | _number \| string_ | `300` |
| loadingText | 加载过程中的提示文案 | _string_ | `加载中...` |
| loadingStyle | 加载过程中的自定义样式 | _object_ | - |
| finishedText | 加载完成后的提示文案 | _string_ | - |
| errorText | 加载失败后的提示文案 | _string_ | - |
| immediateCheck | 是否在初始化时立即执行滚动位置检查 | _boolean_ | `true` |
| direction | 滚动触发加载的方向，可选值为`up` | _string_ | `down` |

### Events

| 事件名 | 说明                               | 回调参数 |
| ------ | ---------------------------------- | -------- |
| onLoad | 滚动条与底部距离小于 offset 时触发 | -        |

### Slots

| 名称     | 说明                       |
| -------- | -------------------------- |
| default  | 列表内容                   |
| loading  | 自定义底部加载中提示       |
| finished | 自定义加载完成后的提示文案 |
| error    | 自定义加载失败后的提示文案 |
