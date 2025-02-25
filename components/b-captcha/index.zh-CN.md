# BCaptcha 安全校验

### 介绍

为了快速实现银行安全校验，且能在业务内实现复用。 `BCaptcha` 是基于 `Captcha` 滑块基础组件进行二次封装，实现数据交互以及安全验证等环节。

## 代码演示

### 基础用法

通过设置 `backdrop`、`slideblock` 等属性可以改变滑块背景图和滑块底图，在滑块结束后的回调函数`onFinish`内可进行安全校验。

```jsx
import { BCaptcha, Button, Overlay, Toast } from 'mooli-mobile';

const Demo = () => {
  const openCaptcha = () => {
    BCaptcha(
      {
        action: {
          getStrategyFetchUrl: 'https://******/get-strategy', // 获取安全策略
          getCaptchaFetchUrl: 'https://******/get_slider_captcha', // 获取滑块
          validatorCaptchaFetchUrl: 'https://******/validator_slider_captcha', // 滑块验证
          validationFetchUrl: 'https://******/validation', // 安全策略校验

          // getStrategyFetchUrl:
          //   'https://sit-mobile-api.bankneo.co.id/risk/option/security/check/get-strategy',
          // getCaptchaFetchUrl:
          //   'https://sit-mobile-api.bankneo.co.id/risk/public/security/check/get_slider_captcha',
          // validatorCaptchaFetchUrl:
          //   'https://sit-mobile-api.bankneo.co.id/risk/public/security/check/validator_slider_captcha',
          // validationFetchUrl:
          //   'https://sit-mobile-api.bankneo.co.id/risk/public/security/check/validation',
        },
        phoneNumber: '800000015',
        type: '1021',
      },
      function (err, data) {
        // 校验未通过
        if (err) {
          console.log('err');
        } else {
          Toast('通过安全校验');
          console.log(data);
        }
      },
    );
  };
  return (
    <div className="demo-name">
      <Button onClick={openCaptcha}>安全校验</Button>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 校验类型 | _string_ | - |
| phoneNumber | 电话号码 | _number_ | - |
| action | 安全校验服务器地址 | `ActionProps` | - |
| method | 上传请求的 http method | _string_ | `post` |
| headers | 设置上传的请求头部，IE10 以上有效 | _string_ | - |
| data | 上传所需额外参数或返回上传额外参数的方法 | _string_ | - |
| withCredentials | 上传请求时是否携带 cookie | _boolean_ | `false` |

### ActionProps 

| 名称                     | 含义             |
| ------------------------ | ---------------- |
| getStrategyFetchUrl      | 获取安全策略地址 |
| getCaptchaFetchUrl       | 获取滑块地址     |
| validatorCaptchaFetchUrl | 滑块验证地址     |
| validationFetchUrl       | 安全策略校验地址 |

### Events

| 事件     | 说明                 | 回调参数      |
| -------- | -------------------- | ------------- |
| callback | 校验结束后的回调函数 | `(err, data)` |
