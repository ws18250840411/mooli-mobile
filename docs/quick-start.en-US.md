# Quickstart

## Install

### npm

```bash
npm i mooli-mobile -S
```

## Usage

### 1. Import on demand

Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) to import components on demand.

```bash
# Install plugin
npm i babel-plugin-import -D
```

```js
// set babel config in .babelrc or babel-loader
// Note: Don't set libraryDirectory if you are using webpack 1.
{
  "plugins": [
    ["import", {
      "libraryName": "mooli-mobile",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// For users who use babel7, that can be configured in babel.config.js
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
// Then you can import components from mooli-mobile
import { Button } from 'mooli-mobile';
```

If you are using TypeScript，please use [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) instead.

### 2. Manually import

```js
import Button from 'mooli-mobile/lib/button';
import 'mooli-mobile/lib/button/style';
```

If you configured babel-plugin-import, you won't be allowed to import all components.
