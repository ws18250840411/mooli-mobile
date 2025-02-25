# BAddress 地址级联选择

### 介绍

地址级联选择框，用于多层级数据的选择，典型场景为省市区选择。

## 代码演示

### 基础用法

级联选择组件可以搭配 Field 和 Popup 组件使用，示例如下：

```jsx
import { BAddress } from 'mooli-mobile';

const Demo = () => {
  const [show, setShow] = React.useState(false);
  const baseUrl = '******';

  const actions = {
    provinceFetchUrl: baseUrl + '/app/province', // 省接口地址
    cityFetchUrl: baseUrl + '/app/city', // 市接口地址
    districtFetchUrl: baseUrl + '/app/district', // 区接口地址
    villageFetchUrl: baseUrl + '/app/village', // 分区接口地址
  };
  const onChange = (selectOptions) => {
    console.log(selectOptions);
  };
  const onFinish = (selectOptions) => {
    console.log(selectOptions);
  };
  const [value, setValue] = React.useState({
    provinceId: '',
    provinceName: '',
    cityId: '',
    cityName: '',
  });

  return (
    <div className="demo-name">
      <BAddress
        action={actions}
        value={value}
        // level={3}
        headers={{
          accessToken:
            'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJCWUIiLCJzdWIiOiI5OTk1MTgyMDMiLCJpYXQiOjE2MzcxNDcwMTUsImV4cCI6MTYzNzc1MTgxNX0.yC5SEHBRAwxWIQsqR3ImxSCfcPg5ejQmZ_UKXLqcyT4',
        }}
        pCustomConfig={{
          title: '省',
          // fieldNames: {
          //   text: 'text',
          //   value: 'value',
          // },
        }}
        cCustomConfig={{ title: '市' }}
        dCustomConfig={{ title: '区' }}
        vCustomConfig={{ title: '分区' }}
        onChange={onChange}
        onFinish={onFinish}
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
| value | 选中项的值 | _string \| number_ | - |
| level | 省份级别（2 省、3 市、4 区、5 分区） | _string \| number_ | `5` |
| action | 省市区的地址 | _string_ | - |
| method | 上传请求的 http method | _string_ | `post` |
| headers | 设置上传的请求头部，IE10 以上有效 | _string_ | - |
| data | 上传所需额外参数或返回上传额外参数的方法 | _string_ | - |
| withCredentials | 上传请求时是否携带 cookie | _boolean_ | `false` |
| activeColor | 选中状态的高亮颜色 | _string_ | `#ee0a24` |
| fieldNames | 自定义所有数据结构中的字段 | _object_ | `{ text: 'text', value: 'value', children: 'children' }` |
| pCustomConfig | 自定义省配置项 | _object_ | `{ title: 'Province', fieldNames: { text: 'provinceName', value: 'provinceId', } }` |
| cCustomConfig | 自定义市配置项 | _object_ | `{ title: 'City', fieldNames: { text: 'cityName', value: 'cityId', } }` |
| dCustomConfig | 自定义区配置项 | _object_ | `{ title: 'District', fieldNames: { text: 'districtName', value: 'districtId', } }` |
| vCustomConfig | 自定义分区配置项 | _object_ | `{ title: 'Village', fieldNames: { text: 'villageName', value: 'villageId', } }` |

### Events

| 事件     | 说明                   | 回调参数              |
| -------- | ---------------------- | --------------------- |
| onChange | 选中项变化时触发       | `{ selectedOptions }` |
| onFinish | 全部选项选择完成后触发 | `{ selectedOptions }` |
