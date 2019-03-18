const path = require('path');

const resolve = dir => path.join(__dirname, dir);

// 项目部署基础
// 默认应用将被部署在域的根目录下
// 如 https://www.my-app.com/
// 默认 /
// 如果应用部署在子路径中，则需要指定子路径
// 如 https://www.foobar.com/my-app/
// 修改为 /my-app/
const publicPath = process.env.NODE_ENV === 'production'
  ? '/vuecli-muse-admin-template/dist/'
  : '/';

module.exports = {
  publicPath,

  devServer: {
    port: 4001,
  },

  // 如果不需要使用 eslint
  // 设为 false
  lintOnSave: true,

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@c', resolve('src/components'))
      .set('@a', resolve('src/assets'));
  },

  // 设为 false 打包时不生成 .map 文件
  productionSourceMap: false,

  // 填写调用接口的基础路径来解决跨域
  // 如果设置了代理
  // 本地开发环境的 axios 的 baseUrl 要设为空字符串
  // devServer: {
  //   proxy: 'localhost:3000'
  // }

  // i18n
  pluginOptions: {
    i18n: {
      locale: 'zh-CN',
      fallbackLocale: 'zh-CN',
      localeDir: '/plugins/locales',
      enableInSFC: false,
    },
  },

  // 可能会遇到默认配置把 node_modules 中的文件排除在 Babel 转译范围以外的问题
  transpileDependencies: [
    'vue-echarts',
    'resize-detector',
  ],
};
