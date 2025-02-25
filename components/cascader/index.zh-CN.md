# Cascader 级联选择

### 介绍

级联选择框，用于多层级数据的选择，典型场景为省市区选择，2.12 版本开始支持此组件。

## 代码演示

### 基础用法

级联选择组件可以搭配 Field 和 Popup 组件使用，示例如下：

```jsx
import { Field, Popup, Cascader } from 'mooli-mobile';

const Demo = () => {
  const [show, setShow] = React.useState(false);
  const [fieldValue, setFieldValue] = React.useState('');
  const [cascaderValue, setCascaderValue] = React.useState('');
  const [options, setOptions] = React.useState([
    {
      text: '浙江省',
      value: '330000',
      children: [
        {
          text: '杭州市',
          value: '330100',
          children: [
            { text: '上城区', value: '330110' },
            { text: '下城区', value: '330120' },
            { text: '江干区', value: '330130' },
          ],
        },
        {
          text: '宁波市',
          value: '330200',
          children: [
            { text: '海曙区', value: '330210' },
            { text: '江北区', value: '330220' },
            { text: '北仓区', value: '330230' },
          ],
        },
        {
          text: '温州市',
          value: '330300',
        },
      ],
    },
    {
      text: '江苏省',
      value: '320000',
      children: [
        {
          text: '南京市',
          value: '320100',
          children: [
            { text: '玄武区', value: '320110' },
            { text: '秦淮区', value: '320120' },
            { text: '建邺区', value: '320130' },
          ],
        },
        {
          text: '无锡市',
          value: '320200',
          children: [
            { text: '锡山区', value: '320210' },
            { text: '惠山区', value: '320220' },
            { text: '滨湖区', value: '320230' },
          ],
        },
        {
          text: '徐州市',
          value: '320300',
          children: [
            { text: '鼓楼区', value: '320310' },
            { text: '云龙区', value: '320320' },
            { text: '贾汪区', value: '320330' },
          ],
        },
      ],
    },
  ]);

  const onChange = ({ value }) => {
    setCascaderValue(value);
  };

  const onFinish = ({ selectedOptions }) => {
    setShow(false);
    setFieldValue(selectedOptions.map((option) => option.text).join('/'));
  };

  return (
    <div className="demo-cascader">
      <Field
        value={fieldValue}
        readOnly
        label="地区"
        placeholder="请选择所在地区"
        rightIcon="arrow"
        onClick={() => setShow(true)}
      />
      <Popup visible={show} round position="bottom">
        <Cascader
          value={cascaderValue}
          title="请选择所在地区"
          options={options}
          onClose={() => setShow(false)}
          onFinish={onFinish}
          onChange={onChange}
        />
      </Popup>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义颜色

通过 `activeColor` 属性来设置选中状态的高亮颜色。可通过 `defaultValue` 或者 `value` 设置默认值

```jsx
import { Field, Popup, Cascader } from 'mooli-mobile';
const getSelectedOptionsByValue = (options, value) => {
  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    if (option['value'] === value) {
      return [option];
    }
    if (option['children']) {
      const selectedOptions = getSelectedOptionsByValue(
        option['children'],
        value,
      );
      if (selectedOptions) {
        return [option, ...selectedOptions];
      }
    }
  }
};
const Demo = () => {
  const [show, setShow] = React.useState(false);
  const [options, setOptions] = React.useState([
    {
      text: '浙江省',
      value: '330000',
      children: [
        {
          text: '温州市',
          value: '330300',
        },
      ],
    },
    {
      text: '江苏省',
      value: '320000',
      children: [
        {
          text: '南京市',
          value: '320100',
          children: [
            { text: '玄武区', value: '320110' },
            { text: '秦淮区', value: '320120' },
            { text: '建邺区', value: '320130' },
          ],
        },
      ],
    },
  ]);
  const defaultCode = '320120';
  const [cascaderValue, setCascaderValue] = React.useState('');
  const selectedOptions = getSelectedOptionsByValue(options, defaultCode);
  const defaultFieldValue = selectedOptions
    .map((option) => option.text)
    .join('/');
  const [fieldValue, setFieldValue] = React.useState(defaultFieldValue || '');

  const onChange = ({ value }) => {
    setCascaderValue(value);
  };

  const onFinish = ({ selectedOptions }) => {
    setShow(false);
    setFieldValue(selectedOptions.map((option) => option.text).join('/'));
  };
  return (
    <div className="demo-cascader">
      <Field
        value={fieldValue}
        readOnly
        rightIcon="arrow"
        label="地区"
        placeholder="请选择所在地区"
        onClick={() => setShow(true)}
      />
      <Popup visible={show} round position="bottom">
        <Cascader
          defaultValue={defaultCode}
          value={cascaderValue}
          title="请选择所在地区"
          activeColor="#1989fa"
          options={options}
          onClose={() => setShow(false)}
          onFinish={onFinish}
          onChange={onChange}
        />
      </Popup>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 异步加载选项

可以监听 `onChange` 事件并动态设置 `options`，实现异步加载选项。

```jsx
import { Field, Popup, Cascader } from 'mooli-mobile';

const Demo = () => {
  const [show, setShow] = React.useState(false);
  const [fieldValue, setFieldValue] = React.useState('');
  const [cascaderValue, setCascaderValue] = React.useState('');
  const [options, setOptions] = React.useState([
    {
      text: '浙江省',
      value: '330000',
      children: [],
    },
  ]);
  const onChange = ({ value }) => {
    setCascaderValue(value);
    if (value === options[0].value) {
      setTimeout(() => {
        const curOptions = [...options];
        curOptions[0].children = [
          { text: '杭州市', value: '330100' },
          { text: '宁波市', value: '330200' },
        ];
        setOptions(curOptions);
      }, 500);
    }
  };
  const onFinish = ({ selectedOptions }) => {
    setShow(false);
    setFieldValue(selectedOptions.map((option) => option.text).join('/'));
  };

  return (
    <div className="demo-cascader">
      <Field
        value={fieldValue}
        readOnly
        rightIcon="arrow"
        label="地区"
        placeholder="请选择所在地区"
        onClick={() => setShow(true)}
      />
      <Popup visible={show} round position="bottom">
        <Cascader
          value={cascaderValue}
          title="请选择所在地区"
          options={options}
          onClose={() => setShow(false)}
          onChange={onChange}
          onFinish={onFinish}
        />
      </Popup>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义字段名

通过 `fieldNames` 属性可以自定义 `options` 里的字段名称。

```jsx
import { Field, Popup, Cascader } from 'mooli-mobile';

const Demo = () => {
  const fieldNames = {
    text: 'name',
    value: 'code',
    children: 'items',
  };
  const [show, setShow] = React.useState(false);
  const [fieldValue, setFieldValue] = React.useState('');
  const [cascaderValue, setCascaderValue] = React.useState('');
  const [options, setOptions] = React.useState([
    {
      name: '浙江省',
      code: '330000',
      items: [
        {
          name: '杭州市',
          code: '330100',
          items: [
            { name: '上城区', code: '330110' },
            { name: '下城区', code: '330120' },
            { name: '江干区', code: '330130' },
          ],
        },
        {
          name: '宁波市',
          code: '330200',
          items: [
            { name: '海曙区', code: '330210' },
            { name: '江北区', code: '330220' },
            { name: '北仓区', code: '330230' },
          ],
        },
        {
          name: '温州市',
          code: '330300',
        },
      ],
    },
    {
      name: '江苏省',
      code: '320000',
      items: [
        {
          name: '南京市',
          code: '320100',
          items: [
            { name: '玄武区', code: '320110' },
            { name: '秦淮区', code: '320120' },
            { name: '建邺区', code: '320130' },
          ],
        },
      ],
    },
  ]);

  const onChange = ({ value }) => {
    setCascaderValue(value);
  };

  const onFinish = ({ selectedOptions }) => {
    setShow(false);
    setFieldValue(selectedOptions.map((option) => option.name).join('/'));
  };

  return (
    <div className="demo-cascader">
      <Field
        value={fieldValue}
        readOnly
        label="地区"
        placeholder="请选择所在地区"
        rightIcon="arrow"
        onClick={() => setShow(true)}
      />
      <Popup visible={show} round position="bottom">
        <Cascader
          value={cascaderValue}
          title="请选择所在地区"
          fieldNames={fieldNames}
          options={options}
          onClose={() => setShow(false)}
          onFinish={onFinish}
          onChange={onChange}
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
| title | 顶部标题 | _string_ | - |
| defaultValue | 默认选中项的值 | _string \| number_ | - |
| value | 选中项的值 | _string \| number_ | - |
| options | 可选项数据源 | _Option[]_ | `[]` |
| placeholder | 未选中时的提示文案 | _string_ | `请选择` |
| activeColor | 选中状态的高亮颜色 | _string_ | `#ee0a24` |
| closeable | 是否显示关闭图标 | _boolean_ | `true` |
| fieldNames | 自定义 `options` 结构中的字段 | _object_ | `{ text: 'text', value: 'value', children: 'children' }` |

### Events

| 事件     | 说明                   | 回调参数                               |
| -------- | ---------------------- | -------------------------------------- |
| onChange | 选中项变化时触发       | `{ value, selectedOptions, tabIndex }` |
| onFinish | 全部选项选择完成后触发 | `{ value, selectedOptions, tabIndex }` |
| onClose  | 点击关闭图标时触发     | -                                      |

### Slots

| 名称  | 说明           |
| ----- | -------------- |
| title | 自定义顶部标题 |
