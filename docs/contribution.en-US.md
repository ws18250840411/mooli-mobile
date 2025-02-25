# Contribution

### Introduce

Thank you for using Moli mobile

The following is a guide to submitting feedback or code to Moli mobile. Before submitting issue or PR to Moli mobile, please take a few minutes to read the following text.

### Issue

- When you encounter a problem, please first confirm whether the problem has been recorded in the issue or has been repaired
- When you mention issue, please describe the problem encountered in short language, and add the environment and replication steps when the problem occurs

## Development

### Local development

Follow the steps below to develop Moli mobile components locally.

```bash
# clone git
git clone git@gitee.com:ws18250840411/mooli-mobile.git

# install
npm install 或者 yarn install

# open the browser http://localhost:8080
npm run start 或者 yarn start
```

### Directory

- The component code of the warehouse is located under SRC, and each component has a folder
- The docs directory is the code of the document website. During local development, you can run `npm run start` in the directory to open the document website

```
mooli-mobile
├─ build      # build
├─ site       # web site
├─ docs       # docs
├─ components # components
├─ test       # test
└─ types      # types
```

### Add Component

When adding a new component, please organize the files according to the following directory structure and configure the component name in `mooli.config.js`.

```
components
└─ button
   ├─ test             # test
   ├─ index.tsx        # input file
   ├─ style            # Css Style
   ├─ index.en-US.md   # English Docs
   └─ index.zh-CN.md   # Chinese Docs
```

## Submit PR

### Pull Request

- If you encounter problems, it is recommended to keep your PR small enough. Ensure that a PR solves only one problem or adds only one function
- When adding new components or modifying the original components, remember to add or modify the test code to ensure the stability of the code
- Please add appropriate description in PR and associate relevant issue
