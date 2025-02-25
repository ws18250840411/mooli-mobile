# Camera 相机

### 介绍

相机可正反面拍照，实时获取图片资源（只能在真机上展示）。

## 代码演示

### 基础用法

```jsx
import { Button, Camera, Icon } from 'mooli-mobile';

const Demo = () => {
  const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(
    navigator.userAgent,
  );
  const width = document.body.clientWidth;
  const [facingMode, setFacingMode] = React.useState('environment');
  const [imageSrc, setImageSrc] = React.useState('');
  const cameraRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = cameraRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [cameraRef]);

  return (
    <div className="demo-camera">
      {imageSrc ? (
        <img src={imageSrc} />
      ) : (
        <div>
          {isMobile && (
            <div>
              <Camera
                ref={cameraRef}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                  width,
                  facingMode,
                }}
              />
              <div className="camera-footer">
                <span className="camera-btn" onClick={capture}></span>
                <Icon
                  className="camera-revoke"
                  onClick={() =>
                    setFacingMode(
                      facingMode === 'environment' ? 'user' : 'environment',
                    )
                  }
                  name="revoke"
                />
              </div>
            </div>
          )}
          {!isMobile && <span className="camera-qcode"></span>}
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| audioConstraints | `MediaStreamConstraints` 音频流对象 | _objcet_ | `{}` |
| videoConstraints | `MediaStreamConstraints` 视频流对象 | _objcet_ | `{}` |
| shotQuality | 图片质量 | _number_ | `0.92` |
| shotFormat | 图片格式 | _string_ | `image/webp` |
| shotWidth | 截图宽度 | _number_ | - |
| shotHeight | 截图高度 | _number_ | - |
| mirrored | 是否反像 | _boolean_ | `false` |
| audio | 是否禁用音频 | _boolean_ | `false` |
| className | 附加类名 | _string_ | `--` |
| style | 附加样式 | _objcet_ | `--` |

### MediaStreamConstraints 

| 名称         | 含义                            |
| ------------ | ------------------------------- |
| audio        | `MediaTrackConstraint` 音频对象 |
| peerIdentity | 身份标示                        |
| video        | `MediaTrackConstraint` 视频对象 |

### MediaTrackConstraint 

| 名称 | 含义 |
| --- | --- |
| aspectRatio | 视频轨迹的宽高比 |
| autoGainControl | 自动增值控制 |
| deviceId | 设备 ID |
| channelCount | 通道数 |
| echoCancellation | 回声消除 |
| facingMode | 摄像头位置（`前置user`、`后置environment`、`左置left`、`right`） |
| frameRate | 帧速率 |
| groupId | 组 ID |
| width | 宽分辨率 |
| height | 高分辨率 |
| latency | 音频轨迹的延迟 |
| noiseSuppression | 噪声抑制 |
| sampleRate | 采样率 |
| sampleSize | 样本大小 |

### Events

| 事件名           | 说明                   | 回调参数            |
| ---------------- | ---------------------- | ------------------- |
| onUserMedia      | 接收媒体流时的回调     | stream: MediaStream |
| onUserMediaError | 接收媒体流报错时的回调 | _event_             |
