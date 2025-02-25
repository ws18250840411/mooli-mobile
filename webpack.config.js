/* eslint-disable @typescript-eslint/no-require-imports */

const path = require('path');
const webpackMooli = require('mooli-docs').default;

const webpackConfig = webpackMooli(8080, (mooli) => {
  mooli
    .output((output) => {
      output.path = path.resolve('site'); // 修改静态网站资源输出目录
    })
    .devServer((server) => {
      // server.https = true;
    })
    // .pluginCopy((copy) => {
    //  copy.patterns = [{ from: 'components/icon/style/font', to: '../dist/font' }];
    // })
    .disableCssModule(); // 禁用css module
});

module.exports = webpackConfig;
