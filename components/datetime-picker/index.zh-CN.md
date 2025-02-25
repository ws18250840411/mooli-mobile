# DatetimePicker 时间选择

### 介绍

时间选择器，支持日期、年月、时分等维度，通常与[弹出层](#/components/popup/zh-CN)组件配合使用。

## 代码演示

### 选择年月日

DatetimePicker 通过 type 属性来定义需要选择的时间类型，type 为 `date` 表示选择年月日。通过 minDate 和 maxDate 属性可以确定可选的时间范围。

```jsx
import { DatetimePicker } from 'mooli-mobile';

const Demo = () => {
  const dateTime = {
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2025, 10, 1),
    currentDate: new Date(2021, 0, 17),
  };
  const onChange = (picker) => {
    console.log(picker.getValues());
  };
  const onConfirm = (value) => {
    console.log(value);
  };
  const onCancel = () => {
    console.log('cancel');
  };

  return (
    <div className="demo-datetime-picker">
      <DatetimePicker
        type="date"
        title="选择年月日"
        value={dateTime.currentDate}
        maxDate={dateTime.maxDate}
        minDate={dateTime.minDate}
        onChange={onChange}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 选择年月

将 type 设置为 `year-month` 即可选择年份和月份。通过传入 `formatter` 函数，可以对选项文字进行格式化处理。

```jsx
import { DatetimePicker } from 'mooli-mobile';

const Demo = () => {
  const dateTime = {
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2025, 10, 1),
    currentDate: new Date(),
  };
  const formatter = (type, val) => {
    if (type === 'year') {
      return `${val}年`;
    } else if (type === 'month') {
      return `${val}月`;
    }
    return val;
  };
  const onChange = (picker) => {
    console.log(picker.getValues());
  };
  return (
    <div className="demo-datetime-picker">
      <DatetimePicker
        type="year-month"
        title="选择年月"
        value={dateTime.currentDate}
        maxDate={dateTime.maxDate}
        minDate={dateTime.minDate}
        formatter={formatter}
        onChange={onChange}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 选择月日

将 type 设置为 `month-day` 即可选择月份和日期。

```jsx
import { DatetimePicker } from 'mooli-mobile';

const Demo = () => {
  const dateTime = {
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2025, 10, 1),
    currentDate: new Date(),
  };
  const formatter = (type, val) => {
    if (type === 'month') {
      return `${val}月`;
    } else if (type === 'day') {
      return `${val}日`;
    }
    return val;
  };

  return (
    <div className="demo-datetime-picker">
      <DatetimePicker
        type="month-day"
        title="选择月日"
        value={dateTime.currentDate}
        maxDate={dateTime.maxDate}
        minDate={dateTime.minDate}
        formatter={formatter}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 选择时间

将 type 设置为 `time` 即可选择时间（小时和分钟）。

```jsx
import { DatetimePicker } from 'mooli-mobile';

const Demo = () => {
  const dateTime = {
    minHour: '10',
    maxHour: '20',
    currentDate: '12:00',
  };
  const formatter = (type, val) => {
    if (type === 'hour') {
      return `${val}时`;
    } else if (type === 'minute') {
      return `${val}分`;
    }
    return val;
  };
  const onConfirm = (value) => {
    console.log(value);
  };
  return (
    <div className="demo-datetime-picker">
      <DatetimePicker
        type="time"
        title="选择时间"
        value={dateTime.currentDate}
        maxHour={dateTime.maxHour}
        minHour={dateTime.minHour}
        formatter={formatter}
        onConfirm={onConfirm}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 选择完整时间

将 type 设置为 `datetime` 即可选择完整时间，包括年月日和小时、分钟。

```jsx
import { DatetimePicker } from 'mooli-mobile';

const Demo = () => {
  const dateTime = {
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2025, 10, 1),
    currentDate: new Date(),
  };
  const onConfirm = (value) => {
    console.log(value);
  };
  return (
    <div className="demo-datetime-picker">
      <DatetimePicker
        type="datetime"
        title="选择完整时间"
        value={dateTime.currentDate}
        maxDate={dateTime.maxDate}
        minDate={dateTime.minDate}
        onConfirm={onConfirm}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 选择年月日小时

将 type 设置为 `datehour` 即可选择日期和小时，包括年月日和小时。

```jsx
import { DatetimePicker } from 'mooli-mobile';

const Demo = () => {
  const dateTime = {
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2025, 10, 1),
    currentDate: new Date(),
  };
  const onConfirm = (value) => {
    console.log(value);
  };
  return (
    <div className="demo-datetime-picker">
      <DatetimePicker
        type="datehour"
        title="选择完整时间"
        value={dateTime.currentDate}
        maxDate={dateTime.maxDate}
        minDate={dateTime.minDate}
        onConfirm={onConfirm}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义列排序

通过传入 `columnsOrder` 属性，可以实现自定义列排序。

```jsx
import { DatetimePicker } from 'mooli-mobile';

const Demo = () => {
  const dateTime = {
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2025, 10, 1),
    currentDate: new Date(),
  };
  const formatter = (type, val) => {
    if (type === 'year') {
      return val + '年';
    }
    if (type === 'month') {
      return val + '月';
    }
    if (type === 'day') {
      return val + '日';
    }
    return val;
  };
  const onConfirm = (value) => {
    console.log(value);
  };
  return (
    <div className="demo-datetime-picker">
      <DatetimePicker
        type="date"
        title="选择完整时间"
        columnsOrder={['month', 'day', 'year']}
        formatter={formatter}
        value={dateTime.currentDate}
        maxDate={dateTime.maxDate}
        minDate={dateTime.minDate}
        onConfirm={onConfirm}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 时间类型，可选值为 `date` `time` <br> `year-month` `month-day` `datehour` | _string_ | `datetime` |
| title | 顶部栏标题 | _string_ | `''` |
| confirmButtonText | 确认按钮文字 | _string_ | `确认` |
| cancelButtonText | 取消按钮文字 | _string_ | `取消` |
| showToolbar | 是否显示顶部栏 | _boolean_ | `true` |
| loading | 是否显示加载状态 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法切换选项 | _boolean_ | `false` |
| filter | 选项过滤函数 | _(type, vals) => vals_ | - |
| formatter | 选项格式化函数 | _(type, val) => val_ | - |
| columnsOrder | 自定义列排序数组, 子项可选值为<br> `year`、`month`、`day`、`hour`、`minute` | _string[]_ | - |
| visibleItemCount | 可见的选项个数 | _number \| string_ | `6` |
| swipeDuration | 快速滑动时惯性滚动的时长，单位`ms` | _number \| string_ | `1000` |

### DatePicker Props

当时间选择器类型为 date 或 datetime 时，支持以下 props:

| 参数    | 说明                       | 类型   | 默认值 |
| ------- | -------------------------- | ------ | ------ |
| minDate | 可选的最小时间，精确到分钟 | _Date_ | 十年前 |
| maxDate | 可选的最大时间，精确到分钟 | _Date_ | 十年后 |

### TimePicker Props

当时间选择器类型为 time 时，支持以下 props:

| 参数      | 说明           | 类型               | 默认值 |
| --------- | -------------- | ------------------ | ------ |
| minHour   | 可选的最小小时 | _number \| string_ | `0`    |
| maxHour   | 可选的最大小时 | _number \| string_ | `23`   |
| minMinute | 可选的最小分钟 | _number \| string_ | `0`    |
| maxMinute | 可选的最大分钟 | _number \| string_ | `59`   |

### Events

| 事件名    | 说明                     | 回调参数              |
| --------- | ------------------------ | --------------------- |
| onChange  | 当值变化时触发的事件     | picker: Picker 实例   |
| onConfirm | 点击完成按钮时触发的事件 | value: 当前选中的时间 |
| onCancel  | 点击取消按钮时触发的事件 | -                     |
