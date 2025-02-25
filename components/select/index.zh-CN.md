# Select 选择器

### 介绍

下拉选择器。

## 代码演示

### 基础用法

弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。

```jsx
import { Select, Icon } from 'mooli-mobile';
const { Option } = Select;
const Demo = () => {
  const options = [
    { value: "pineapple", label: "🍍 菠萝" },
    { value: "watermelon", label: "🍉 西瓜" },
    { value: "cantaloupe", label: "🍈 哈密瓜" }
  ];
  const [value, setValue] = React.useState('pineapple');

  return (
    <div className="demo-name">
      <Select 
        clearable 
        filterable
        value={value} 
        options={options} 
        showAction
        action="完成"
        onChange={({value, label})=> {
          console.log({value, label})
          setValue(value)
        }} 
        onCompleted={(v)=> console.log(v)}
      >
        <Option value="orange" label="🍊 橘子" />
        <Option value="pear">
          🍐 大梨
        </Option>
      </Select>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```
