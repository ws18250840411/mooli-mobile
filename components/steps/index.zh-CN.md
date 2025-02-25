# Steps 步骤条

### 介绍

用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。

## 代码演示

### 基础用法

`current` 属性表示当前步骤的索引，从 0 起计。

```jsx
import { Steps } from 'mooli-mobile';

const Demo = () => {
  return <div className="steps-name">
    <Steps current={1}>
      <Steps.Step title='标题1' description='描述' />
      <Steps.Step title='标题2' description='描述' />
      <Steps.Step title='标题3' description='描述' />
    </Steps>
  </div>;
};

ReactDOM.render(<Demo />, mountNode);
```

### 横向步骤条失败

`status` 属性设置 `error` 展示失败的场景。

```jsx
import { Steps } from 'mooli-mobile';

const Demo = () => {
  return <div className="steps-name">
    <Steps current={2}>
      <Steps.Step title='第一步' />
      <Steps.Step title='第二步' />
      <Steps.Step title='第三步' status="error" />
      <Steps.Step title='第四步' />
    </Steps>
  </div>;
};

ReactDOM.render(<Demo />, mountNode);
```

### 纵向步骤条

`direction` 指定步骤条方向。目前支持水平 `horizontal` 和竖直 `vertical` 两种方向。

```jsx
import { Steps } from 'mooli-mobile';

const Demo = () => {
  return <div className="steps-name">
    <Steps direction='vertical'>
      <Steps.Step title='填写机构信息' />
      <Steps.Step title='签约机构' />
      <Steps.Step title='关联服务区' />
    </Steps>
  </div>;
};

ReactDOM.render(<Demo />, mountNode);
```

### 纵向步骤条失败

`status` 指定状态。当不配置该属性时，会使用 `Steps` 的 `current` 来自动指定状态；如果该属性与 `current` 指定的状态不匹配会覆盖自动匹配的状态。

```jsx
import { Steps } from 'mooli-mobile';

const { Step } = Steps;
const Demo = () => {
  return <div className="steps-name">
    <Steps direction='vertical'>
      <Step
        title='填写机构信息'
        status='finish'
        description='完成时间：2020-12-01 12:30'
      />
      <Step
        title='签约机构'
        status='finish'
        description='完成时间：2020-12-01 12:30'
      />
      <Step
        title='关联服务区'
        status='finish'
        description='完成时间：2020-12-01 12:30'
      />
      <Step title='审批失败' status='error' />
    </Steps>
  </div>;
};

ReactDOM.render(<Demo />, mountNode);
```

### 自定义图标及大小

`icon` 自定义步骤图标及大小。

```jsx
import { Steps, Radio, Button } from 'mooli-mobile';

const Demo = () => {
  const WaitIcon = () => (
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path d="M512 917.381727c-223.886093 0-405.381727-181.495634-405.381727-405.381727S288.113907 106.618273 512 106.618273s405.381727 181.495634 405.381727 405.381727S735.886093 917.381727 512 917.381727zM528.21531 498.606968l0-278.482549-32.43062 0 0 291.834648-0.040932 0.040932 206.386534 206.386534 22.932292-22.932292L528.21531 498.606968z" fill="#1677ff"></path>
    </svg>
  )
  return <div className="steps-name">
    <Steps direction='vertical' current={1}>
      <Steps.Step title='填写机构信息' icon={<Radio value={true} style={{ width: 20 }} />} />
      <Steps.Step title='签约机构' icon={WaitIcon()} />
      <Steps.Step title='关联服务区' description={
        <div>
          <h3>这里是一些描述</h3>
          <Button type='primary'>去查看</Button>
        </div>
      } />
    </Steps>
  </div>;
};

ReactDOM.render(<Demo />, mountNode);
```

## API

### Steps

整体步骤条

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | _number_ | 0 |
| direction | 指定步骤条方向，可选 `horizontal` `vertical` | _string_ | `horizontal` |

### Steps.Step

步骤条内的每一个步骤。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| status | 指定当前步骤的状态，可选 `wait` `process` `finish` `error` | _string_ | `wait` |
| title | 标题 | _React.Element_ | `-` |
| description | 步骤的详情描述，可选 | _React.Element_ | `-` |
| icon | 步骤图标，可选 | _React.Element_ | `-` |
