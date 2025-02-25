# IndexBar 索引栏

### 介绍

用于列表的索引分类显示和快速定位。

## 代码演示

### 基础用法

可以通过 `index-list` 属性自定义展示的索引字符列表，点击索引栏时，会自动跳转到对应的 `IndexAnchor` 锚点位置。

```jsx
import { IndexBar, Cell } from 'mooli-mobile';

const Demo = () => {
  const indexBar = React.useRef();
  const indexList = ['hot'];
  const charCodeOfA = 'A'.charCodeAt(0);

  for (let i = 0; i < 26; i++) {
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }

  const formatIndexBar = (index) => {
    // 自定义标题
    if(index == "hot"){
      return <span className="hot"></span>
    }
    return index;
  }

  const formatIndexAnchor = (index) => {
    // 自定义内容
    if(index == "hot"){
      return <span>热门🔥</span>
    }
    return index;
  }
 
  const onChange = (index) => {
    console.log(`onChange: ${index}`)
  }
  // 手动控制滚动到 H 位置
  const customScroll = () => {
    indexBar.current.scrollTo('H')
  }
  return <div className="demo-index-bar">
    <IndexBar ref={indexBar} indexList={indexList} stickyOffsetTop={50} formatIndexBar={formatIndexBar} onChange={onChange}>
      {indexList.map((index)=> (
        <div key={index}>
          <IndexBar.Anchor index={index} formatIndexAnchor={formatIndexAnchor} />
          <Cell title="文本" />
          <Cell title="文本" />
          <Cell title="文本" />
        </div>
      ))}
    </IndexBar>
  </div>;
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### IndexBar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| indexList | 索引字符列表 | _string[] \| number[]_ | `A-Z` |
| zIndex | z-index 层级 | _number \| string_ | `1` |
| sticky | 是否开启锚点自动吸顶 | _boolean_ | `true` |
| stickyOffsetTop | 锚点自动吸顶时与顶部的距离 | _number_ | `0` |
| highlightColor | 索引字符高亮颜色 | _string_ | `#ee0a24` |
| formatIndexBar | 自定义标题 | _function_ | - |

### IndexAnchor Props

| 参数  | 说明     | 类型               | 默认值 |
| ----- | -------- | ------------------ | ------ |
| index | 索引字符 | _number \| string_ | -      |
| formatIndexAnchor | 自定义内容 | _function_ | - |

### IndexBar Events

| 事件名            | 说明                         | 回调参数                  |
| ----------------- | ---------------------------- | ------------------------- |
| select            | 点击索引栏的字符时触发       | _index: number \| string_ |
| change  | 当前高亮的索引字符变化时触发 | _index: number \| string_ |
