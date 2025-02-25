# BCamera 证件照拍摄

### 介绍

实现身份证拍照以及手持身份证件拍照

## 代码演示

### 基础用法

通过属性 `type` 设置为身份证拍照或者手持身份证拍照模式

```jsx
import { BCamera } from 'mooli-mobile';

const Demo = () => {
  const [imgSrc, setImgSrc] = React.useState('');
  const onFinish = (imgSrc) => {
    setImgSrc(imgSrc);
  };

  return (
    <div className="demo-bcamera">
      <BCamera type="hold" onFinish={onFinish} />
      <img className="camera-img" src={imgSrc} alt="" />
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```
