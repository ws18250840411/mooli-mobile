# PullRefresh 下拉刷新

### 介绍

用于提供下拉刷新的交互操作。

### 基础用法

下拉刷新时会触发 `onRefresh` 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将 `finished` 设置为 `false`，表示加载完成。通过 `successText` 可以设置刷新成功后的顶部提示文案。通过插槽可以自定义下拉刷新过程中的提示内容。

```jsx
import { PullRefresh, Cell, Tabs } from 'mooli-mobile';

const Demo = () => {
  const [count, setCount] = React.useState(0);
  const [finished, setFinished] = React.useState(false);
  const getNewData = () => {
    return new Promise((res) => {
      setTimeout(() => {
        let c = Number(count);
        setCount((c += 1));
        setFinished(true);
      }, 1500);
    });
  };
  return (
    <div className="demo-pull-refresh">
      <Tabs>
        <Tabs.TabPane title="基础用法">
          <PullRefresh finished={finished} onRefresh={getNewData}>
            <p>刷新次数: {count}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title="成功提示">
          <PullRefresh
            finished={finished}
            onRefresh={getNewData}
            successText="自定义刷新成功"
          >
            <p>刷新次数: {count}</p>
          </PullRefresh>
        </Tabs.TabPane>
        <Tabs.TabPane title="自定义提示">
          <PullRefresh
            finished={finished}
            onRefresh={getNewData}
            pullingText="自定义下拉即可刷新..."
            loosing={
              <img
                className="doge"
                src="https://img01.yzcdn.cn/vant/doge-fire.jpg"
              />
            }
            loadingText="自定义加载中..."
          >
            <p>刷新次数: {count}</p>
          </PullRefresh>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| finished | 是否处于加载完成 | _boolean_ | `false` |
| pullingText | 下拉过程提示文案 | _string_ | `下拉即可刷新...` |
| loosingText | 释放过程提示文案 | _string_ | `释放即可刷新...` |
| loadingText | 加载过程提示文案 | _string_ | `加载中...` |
| successText | 刷新成功提示文案 | _string_ | - |
| successDuration | 刷新成功提示展示时长(ms) | _number \| string_ | `500` |
| animationDuration | 动画时长 | _number \| string_ | `300` |
| headHeight | 顶部内容高度 | _number \| string_ | `50` |
| pullDistance | 触发下拉刷新的距离 | _number \| string_ | 与 `headHeight` 一致 |
| disabled | 是否禁用下拉刷新 | _boolean_ | `false` |

### Events

| 事件名    | 说明           | 回调参数 |
| --------- | -------------- | -------- |
| onRefresh | 下拉刷新时触发 | -        |

### Slots

| 名称     | 说明                 | 参数                       |
| -------- | -------------------- | -------------------------- |
| children | 自定义内容           | -                          |
| normal   | 非下拉状态时顶部内容 | -                          |
| pulling  | 下拉过程中顶部内容   | { distance: 当前下拉距离 } |
| loosing  | 释放过程中顶部内容   | { distance: 当前下拉距离 } |
| loading  | 加载过程中顶部内容   | { distance: 当前下拉距离 } |
| success  | 刷新成功提示内容     | -                          |
