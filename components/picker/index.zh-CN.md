# Picker 选择器

### 介绍

提供多个选项集合供用户选择，支持单列选择和多列级联，通常与[弹出层](#/components/popup/zh-CN)组件配合使用。

## 代码演示

### 基础用法

Picker 组件通过 `columns` 属性配置选项数据，`columns` 是一个包含字符串或对象的数组。

设置 `showToolbar` 属性后会展示顶部操作栏，顶部栏包含标题、确认按钮和取消按钮，点击确认按钮触发 `confirm` 事件，点击取消按钮触发 `cancel` 事件。

```jsx
import { Picker, Toast } from 'mooli-mobile';

const Demo = () => {
  const columns = [
    '杭州',
    '宁波',
    '温州',
    '绍兴',
    '湖州',
    '嘉兴',
    '金华',
    '衢州',
  ];
  const onConfirm = (value, index) => {
    Toast(`当前值：${value}, 当前索引：${index}`);
  };
  const onChange = (picker, value, index) => {
    console.log(`当前值：${value}, 当前索引：${index}`);
  };
  const onCancel = () => {
    Toast('取消');
  };
  return (
    <div className="demo-picker">
      <Picker
        title="标题"
        showToolbar
        columns={columns}
        onConfirm={onConfirm}
        onChange={onChange}
        onCancel={onCancel}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 默认选中项

单列选择时，可以通过 `defaultIndex` 属性设置初始选中项的索引。

```jsx
import { Picker } from 'mooli-mobile';

const Demo = () => {
  const columns = [
    '杭州',
    '宁波',
    '温州',
    '绍兴',
    '湖州',
    '嘉兴',
    '金华',
    '衢州',
  ];

  return (
    <div className="demo-picker">
      <Picker title="标题" showToolbar defaultIndex={2} columns={columns} />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 多列选择

`columns` 属性可以通过对象数组的形式配置多列选择，对象中可以配置选项数据、初始选中项等。

```jsx
import { Picker, Toast } from 'mooli-mobile';

const Demo = () => {
  const columns = [
    // 第一列
    {
      values: ['周一', '周二', '周三', '周四', '周五'],
      defaultIndex: 2,
    },
    // 第二列
    {
      values: ['上午', '下午', '晚上'],
      defaultIndex: 1,
    },
  ];
  const onConfirm = (value, index) => {
    Toast(`当前值：${value}, 当前索引：${index}`);
  };
  return (
    <div className="demo-picker">
      <Picker
        title="标题"
        showToolbar
        columns={columns}
        onConfirm={onConfirm}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 级联选择

使用 `columns` 的 `children` 字段可以实现选项级联的效果。

```jsx
import { Picker, Toast } from 'mooli-mobile';

const Demo = () => {
  const columns = [
    {
      text: '浙江',
      children: [
        {
          text: '杭州',
          children: [{ text: '西湖区' }, { text: '余杭区' }],
        },
        {
          text: '温州',
          children: [{ text: '鹿城区' }, { text: '瓯海区' }],
        },
      ],
    },
    {
      text: '福建',
      children: [
        {
          text: '福州',
          children: [{ text: '鼓楼区' }, { text: '台江区' }],
        },
        {
          text: '厦门',
          children: [{ text: '思明区' }, { text: '海沧区' }],
        },
      ],
    },
  ];

  const onConfirm = (value, index) => {
    Toast(`当前值：${value}, 当前索引：${index}`);
  };
  return (
    <div className="demo-picker">
      <Picker
        title="标题"
        showToolbar
        columns={columns}
        onConfirm={onConfirm}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 禁用选项

选项可以为对象结构，通过设置 `disabled` 来禁用该选项。

```jsx
import { Picker } from 'mooli-mobile';

const Demo = () => {
  const columns = [
    { text: '杭州', disabled: true },
    { text: '宁波' },
    { text: '温州' },
  ];

  return (
    <div className="demo-picker">
      <Picker title="标题" showToolbar columns={columns} />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 动态设置选项

通过 Picker 上的实例方法可以更灵活地控制选择器，比如使用 `setColumnValues` 方法实现多列联动。

```jsx
import { Picker, Toast } from 'mooli-mobile';

const Demo = () => {
  const cities = {
    浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    福建: ['福州', '厦门', '莆田', '三明', '泉州'],
  };

  const columns = [{ values: Object.keys(cities) }, { values: cities['浙江'] }];
  const onChange = (picker, values) => {
    picker.setColumnValues(1, cities[values[0]]);
  };
  const onConfirm = (value, index) => {
    Toast(`当前值：${value}, 当前索引：${index}`);
  };
  return (
    <div className="demo-picker">
      <Picker
        title="标题"
        showToolbar
        columns={columns}
        onChange={onChange}
        onConfirm={onConfirm}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 加载状态

若选择器数据是异步获取的，可以通过 `loading` 属性显示加载提示。

```jsx
import { Picker, Toast } from 'mooli-mobile';

const Demo = () => {
  const [loading, setLoading] = React.useState(true);
  const [columns, setColums] = React.useState([]);

  const onConfirm = (value, index) => {
    Toast(`当前值：${value}, 当前索引：${index}`);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setColums(['选项1', '选项2', '选项3']);
    }, 5000);
  }, []);

  return (
    <div className="demo-picker">
      <Picker
        title="标题"
        showToolbar
        loading={loading}
        columns={columns}
        onConfirm={onConfirm}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义数据结构

Picker 组件通过 `columns` 属性配置选项数据，`columns` 是一个包含字符串或对象的数组。

设置 `showToolbar` 属性后会展示顶部操作栏，顶部栏包含标题、确认按钮和取消按钮，点击确认按钮触发 `confirm` 事件，点击取消按钮触发 `cancel` 事件。

```jsx
import { Picker, Toast } from 'mooli-mobile';

const Demo = () => {
  const columns = [
    {
      label: '杭州',
      value: '1'
    },
    {
      label: '宁波',
      value: '2'
    },
    {
      label: '温州',
      value: '3'
    },
    {
      label: '湖州',
      value: '4'
    },
    {
      label: '嘉兴',
      value: '5'
    }
  ]
  const onConfirm = (value, index) => {
    Toast(`当前值：${value}, 当前索引：${index}`);
  };
  const onChange = (picker, value, index) => {
    console.log(`当前值：${value}, 当前索引：${index}`);
  };
  const onCancel = () => {
    Toast('取消');
  };
  return (
    <div className="demo-picker">
      <Picker
        title="标题"
        showToolbar
        valueKey="label"
        columns={columns}
        onConfirm={onConfirm}
        onChange={onChange}
        onCancel={onCancel}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```
### 搭配弹出层使用

在实际场景中，Picker 通常作为用于辅助表单填写，可以搭配 Popup 和 Field 实现该效果。

```jsx
import { Picker, Popup, Field } from 'mooli-mobile';

const Demo = () => {
  const [value, setValue] = React.useState('');
  const [showPicker, setShowPicker] = React.useState(false);
  const columns = [
    '杭州',
    '宁波',
    '温州',
    '绍兴',
    '湖州',
    '嘉兴',
    '金华',
    '衢州',
  ];

  const onConfirm = (value, index) => {
    setValue(value);
    setShowPicker(false);
  };

  return (
    <div className="demo-picker demo-picker-filed">
      <Field
        value={value}
        label="城市"
        readOnly
        placeholder="选择城市"
        onClick={() => setShowPicker(true)}
      />
      <Popup
        visible={showPicker}
        position="bottom"
        round
        onClickMask={() => setShowPicker(false)}
      >
        <Picker
          title="标题"
          showToolbar
          columns={columns}
          onConfirm={onConfirm}
          onCancle={() => setShowPicker(false)}
        />
      </Popup>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 对象数组，配置每一列显示的数据 | _Column[]_ | `[]` |
| title | 顶部栏标题 | _string_ | - |
| description | 顶部栏副标题 | _string_ | - |
| confirmButtonText | 确认按钮文字 | _string_ | `确认` |
| cancelButtonText | 取消按钮文字 | _string_ | `取消` |
| valueKey | 选项对象中，选项文字对应的键名 | _string_ | `text` |
| toolbarPosition | 顶部栏位置，可选值为`bottom` | _string_ | `top` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法切换选项 | _boolean_ | `false` |
| showToolbar | 是否显示顶部栏 | _boolean_ | `false` |
| defaultIndex | 单列选择时，默认选中项的索引 | _number \| string_ | `0` |
| itemHeight | 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `44` |
| visibleItemCount | 可见的选项个数 | _number \| string_ | `6` |
| swipeDuration | 快速滑动时惯性滚动的时长，单位 `ms` | _number \| string_ | `1000` |

### Events

当选择器有多列时，事件回调参数会返回数组

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onConfirm | 点击完成按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| onCancel | 点击取消按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| onChange | 选项改变时触发 | 单列：Picker 实例，选中值，选中值对应的索引<br>多列：Picker 实例，所有列选中值，当前列对应的索引 |

### Slots

| 名称          | 说明                   | 参数                       |
| ------------- | ---------------------- | -------------------------- |
| default       | 自定义整个顶部栏的内容 | -                          |
| title         | 自定义标题内容         | -                          |
| description         | 自定义副标题内容         | -                          |
| confirm       | 自定义确认按钮内容     | -                          |
| cancel        | 自定义取消按钮内容     | -                          |
| option        | 自定义选项内容         | _option: string \| object_ |
| columnsTop    | 自定义选项上方内容     | -                          |
| columnsBottom | 自定义选项下方内容     | -                          |

### Column 数据结构

当传入多列数据时，`columns` 为一个对象数组，数组中的每一个对象配置每一列，每一列有以下 `key`:

| 键名         | 说明                       | 类型       |
| ------------ | -------------------------- | ---------- |
| values       | 列中对应的备选值           | _string[]_ |
| defaultIndex | 初始选中项的索引，默认为 0 | _number_   |
| className    | 为对应列添加额外的类名     | _any_      |
| children     | 级联选项                   | _Column_   |

### 方法

通过 ref 可以获取到 Picker 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getValues | 获取所有列选中的值 | - | values |
| setValues | 设置所有列选中的值 | values | - |
| getIndexes | 获取所有列选中值对应的索引 | - | indexes |
| setIndexes | 设置所有列选中值对应的索引 | indexes | - |
| getColumnValue | 获取对应列选中的值 | columnIndex | value |
| setColumnValue | 设置对应列选中的值 | columnIndex, value | - |
| getColumnIndex | 获取对应列选中项的索引 | columnIndex | optionIndex |
| setColumnIndex | 设置对应列选中项的索引 | columnIndex, optionIndex | - |
| getColumnValues | 获取对应列中所有选项 | columnIndex | values |
| setColumnValues | 设置对应列中所有选项 | columnIndex, values | - |
| confirm | 停止惯性滚动并触发 confirm 事件 | - | - |
