# Collapse 折叠面板

### 介绍

将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。

## 代码演示

### 基础用法

通过 `value` 控制展开的面板列表，`activeNames` 为数组格式。

```jsx
import { Collapse } from 'mooli-mobile';

const Demo = () => {
  const [activeNames, setActiveNames] = React.useState(['1']);
  return (
    <div className="demo-collapse">
      <Collapse value={activeNames}>
        <Collapse.Item title="标题1" name="1">
          内容1
        </Collapse.Item>
        <Collapse.Item title="标题2" name="2">
          内容2
        </Collapse.Item>
        <Collapse.Item title="标题3" name="3">
          内容3
        </Collapse.Item>
      </Collapse>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 手风琴

通过 `accordion` 可以设置为手风琴模式，最多展开一个面板，此时 `activeName` 为字符串格式。

```jsx
import { Collapse } from 'mooli-mobile';

const Demo = () => {
  const [activeNames, setActiveNames] = React.useState('1');
  return (
    <div className="demo-collapse">
      <Collapse value={activeNames} accordion>
        <Collapse.Item title="标题1" name="1">
          内容1
        </Collapse.Item>
        <Collapse.Item title="标题2" name="2">
          内容2
        </Collapse.Item>
        <Collapse.Item title="标题3" name="3">
          内容3
        </Collapse.Item>
      </Collapse>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 禁用状态

通过 `disabled` 属性来禁用单个面板。

```jsx
import { Collapse } from 'mooli-mobile';

const Demo = () => {
  const [activeNames, setActiveNames] = React.useState(['1']);
  return (
    <div className="demo-collapse">
      <Collapse value={activeNames}>
        <Collapse.Item title="标题1" name="1">
          内容1
        </Collapse.Item>
        <Collapse.Item title="标题2" name="2" disabled>
          内容2
        </Collapse.Item>
        <Collapse.Item title="标题3" name="3" disabled>
          内容3
        </Collapse.Item>
      </Collapse>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义标题内容

通过 `title` 插槽可以自定义标题栏的内容。

```jsx
import { Collapse, Icon } from 'mooli-mobile';

const Demo = () => {
  return (
    <div className="demo-collapse">
      <Collapse>
        <Collapse.Item title="标题1" name="1" arrow={false} iconRight="phone-o">
          内容1
        </Collapse.Item>
        <Collapse.Item title="标题2" name="2" iconLeft="location-o">
          内容2
        </Collapse.Item>
        <Collapse.Item
          title={() => (
            <div className="demo-collapse-title">
              标题3
              <Icon name="question-o" />
            </div>
          )}
          name="3"
          value="自定义内容"
        >
          内容3
        </Collapse.Item>
      </Collapse>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前展开面板的 name | 手风琴模式：_number \| string_<br>非手风琴模式：_(number \| string)[]_ | - |
| accordion | 是否开启手风琴模式 | _boolean_ | `false` |
| border | 是否显示外边框 | _boolean_ | `true` |

### Collapse Events

| 事件名   | 说明           | 回调参数                                 |
| -------- | -------------- | ---------------------------------------- |
| onChange | 切换面板时触发 | activeNames: 类型与 v-model 绑定的值一致 |

### Collapse.Item Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 唯一标识符，默认为索引值 | _number \| string_ | `index` |
| icon | 标题栏左侧[图标名称](#/components/icon/zh-CN)或图片链接 | _string_ | - |
| size | 标题栏大小，可选值为 `large` | _string_ | - |
| title | 标题栏左侧内容 | _number \| string_ | - |
| value | 标题栏右侧内容 | _number \| string_ | - |
| label | 标题栏描述信息 | _number \| string_ | - |
| border | 是否显示内边框 | _boolean_ | `true` |
| arrow | 是否展示标题栏右侧箭头并开启点击反馈 | _boolean_ | `true` |
| disabled | 是否禁用面板 | _boolean_ | `false` |

### Collapse.Item Slots

| 名称      | 说明                           |
| --------- | ------------------------------ |
| default   | 面板内容                       |
| value     | 自定义显示内容                 |
| icon      | 自定义 `icon`                  |
| title     | 自定义 `title`                 |
| leftIcon  | 自定义左侧按钮，默认是 `arrow` |
| rightIcon | 自定义右侧按钮，默认是 `arrow` |

更多详细配置请参考[Cell 组件](#/components/cell/zh-CN)
