# 快速上手

### 介绍

通过本章节你可以了解到 Mooli Mobile 的安装方法和基本使用姿势。

## 安装

### 通过 npm 安装

在现有项目中使用 Mooli Mobile 时，可以通过 `npm` 或 `yarn` 进行安装：

```bash
npm i mooli-mobile -S
```

## 引入组件

### 方式一. 自动按需引入组件 (推荐)

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式。

```bash
# 安装插件
npm i babel-plugin-import -D
```

```js
// 在.babelrc 中添加配置
// 注意：webpack 1 无需设置 libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "mooli-mobile",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'mooli-mobile',
      libraryDirectory: 'es',
      style: true
    }, 'mooli-mobile']
  ]
};
```

```js
// 接着你可以在代码中直接引入 Vant 组件
import { Button } from 'mooli-mobile';
```

Tips: 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入。

### 方式二. 手动按需引入组件

在不使用插件的情况下，可以手动引入需要的组件。

```js
import Button from 'mooli-mobile/lib/button';
import 'mooli-mobile/lib/button/style';
```
