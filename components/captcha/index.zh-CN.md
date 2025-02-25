# Captcha 滑块验证

### 介绍

仅需轻轻滑动完成拼图，即可完成安全验证

## 代码演示

### 基础用法

通过设置 `backdrop`、`slideblock` 等属性可以改变滑块背景图和滑块底图，在滑块结束后的回调函数`onFinish`内可进行安全校验。

```jsx
import { Captcha, Button, Overlay } from 'mooli-mobile';

const Demo = () => {
  const dataList = [
    {
      bg: {
        src: 'https://necaptcha.nosdn.127.net/aff794d402e74aaa974f62be54794a96.jpg',
      },
      slider: {
        src: 'https://necaptcha.nosdn.127.net/f638ccd15f524de9a8b70e90de8298a9.png',
      },
    },
    {
      bg: {
        src: 'https://necaptcha.nosdn.127.net/18d459fde8bc4252bf9f36dd73690073.jpg',
      },
      slider: {
        src: 'https://necaptcha.nosdn.127.net/ffbc5f086a2d4a0b85b1d8c35dcce26b.png',
      },
    },
  ];
  const [bgUrl, setBgUrl] = React.useState(dataList[0].bg);
  const [sliderUrl, setSliderUrl] = React.useState(dataList[0].slider);
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState(false);
  const nums = React.useRef(1);
  const captcha = React.useRef();
  const onRefresh = () => {
    setLoading(true);
    nums.current += 1;
    let a = nums.current % 2 === 0 ? 1 : 0;
    setTimeout(() => {
      setLoading(false);
      setBgUrl(dataList[a].bg);
      setSliderUrl(dataList[a].slider);
      reset();
    }, 1000);
  };
  const onFinish = (value, ratio) => {
    const diff = value * ratio;
    console.log(`移动距离：${diff}`);
    setResult(true);
    setTimeout(() => {
      setResult(false);
      reset();
    }, 500);
  };

  const reset = () => {
    if (captcha.current) {
      captcha.current.reset();
    }
  };
  return (
    <div className="demo-captcha">
      <Captcha
        ref={captcha}
        backdrop={{ ...bgUrl }}
        slideblock={{
          ...sliderUrl,
        }}
        loading={loading}
        onRefresh={onRefresh}
        onFinish={onFinish}
      >
        <Overlay className="captcha-result" visible={result}>
          <div className="captcha-result-content">
            Verifikasi gagal, silakan coba lagi!
          </div>
        </Overlay>
      </Captcha>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数       | 说明         | 类型         | 默认值  |
| ---------- | ------------ | ------------ | ------- |
| backdrop   | 滑块背景配置 | `ImageProps` | `-`     |
| slideblock | 滑块配置     | `ImageProps` | -       |
| loading    | 是否加载中   | _boolean_    | `false` |
| className  | 附加类名     | _string_     | `--`    |
| style      | 附加样式     | _objcet_     | `--`    |

### ImageProps 

| 名称   | 含义                  |
| ------ | --------------------- |
| src    | 图片链接              |
| fit    | 图片填充模式          |
| alt    | 替代文本              |
| width  | 宽度，默认单位为 `px` |
| height | 高度，默认单位为 `px` |
| style  | 图片自定义样式        |

### Events

| 事件         | 说明                             | 回调参数           |
| ------------ | -------------------------------- | ------------------ |
| onTouchStart | 开始滑动触发                     | `-`                |
| onTouchMove  | 滑动过程触发                     | `-`                |
| onTouchEnd   | 滑动结束触发                     | `-`                |
| onChange     | 滑块变化时触发(移动值)           | `{ value }`        |
| onRefresh    | 点击刷新时触发                   | `-`                |
| onFinish     | 选择完成后触发(移动值、缩放比例) | `{ value, ratio }` |
