# 开发指南

### 介绍

感谢你使用 Mooli Mobile。

以下是关于向 Mooli Mobile 提交反馈或代码的指南。在向 Mooli Mobile 提交 issue 或者 PR 之前，请先花几分钟时间阅读以下文字。

### Issue 规范

- 遇到问题时，请先确认这个问题是否已经在 issue 中有记录或者已被修复
- 提 issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤

## 参与开发

### 本地开发

按照下面的步骤操作，即可在本地开发 Mooli Mobile 组件。

```bash
# 克隆仓库
git clone git@gitee.com:ws18250840411/mooli-mobile.git

# 安装依赖
npm install 或者 yarn install

# 进入开发模式，浏览器访问 http://localhost:8080
npm run start 或者 yarn start
```

### 目录结构

- 仓库的组件代码位于 src 下，每个组件一个文件夹
- docs 目录下是文档网站的代码，本地开发时可以在目录下运行 npm run start 开启文档网站

项目主要目录如下：

```
mooli-mobile
├─ build      # 构建
├─ site       # 静态站点
├─ docs       # 文档
├─ components # 组件
├─ test       # 单测
└─ types      # 类型
```

### 添加新组件

添加新组件时，请按照下面的目录结构组织文件，并在 `mooli.config.js` 中配置组件名称。

```
components
└─ button
   ├─ test             # 单元测试
   ├─ index.tsx        # 组件入口
   ├─ style            # 组件样式
   ├─ index.en-US.md   # 英文文档
   └─ index.zh-CN.md   # 中文文档
```

## 提交 PR

### Pull Request 规范

- 如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决一个问题或只添加一个功能
- 当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定
- 在 PR 中请添加合适的描述，并关联相关的 Issue
