const path = require('path');

const CompressionWebpackPlugin = require('compression-webpack-plugin');

const prodGzipExt = [
  'html',
  'js',
  'css',
  'ttf',
  'otf',
  'woff',
  'svg',
  'png',
  'gif',
  'jpg',
  'jpeg',
  'bmp',
  'webp',
  'flv',
  'ogg',
  'wav',
  'mp3',
  'mp4',
];

const resolve = dir => path.join(__dirname, dir);

const isProd = process.env.NODE_ENV === 'production';

// 项目部署基础
// 默认应用将被部署在域的根目录下，如 https://www.my-app.com/
// 如果应用部署在子路径中，则需要指定子路径，如 https://www.foobar.com/my-app/
// 修改为 /my-app/
const publicPath = isProd
  ? '/vuecli-muse-admin-template/dist/'
  // ? '/dist/'
  : '/';

module.exports = {
  publicPath,

  // 本地调试时使用的端口
  devServer: {
    port: 4001,
    // 填写调用接口的基础路径来解决跨域
    // 如果设置了代理
    // 本地开发环境的 axios 的 baseUrl 要设为空字符串
    // proxy: 'localhost:3000'
  },

  // 如果不需要使用 eslint
  // 设为 false
  lintOnSave: true,

  // 分离代码库
  configureWebpack: (config) => {
    if (isProd) {
      config.externals = {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios',
        moment: 'moment',
        xlsx: 'xlsx',
      };
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: new RegExp(`\\.(${prodGzipExt.join('|')})$`),
          threshold: 0,
          // threshold: 10240,
        }),
      );
    }
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@c', resolve('src/components'))
      .set('@a', resolve('src/assets'));
    // https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-template-compiler/README.md#%E9%80%89%E9%A1%B9
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();

    config
      .when(process.env.NODE_ENV !== 'development',
        (config) => {
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                // node_modules 一个 chunk
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial',
                },
                // museui 单独一个 chunk
                museUI: {
                  name: 'chunk-museui',
                  priority: 20,
                  test: /[\\/]node_modules[\\/]_?muse-ui(.*)/,
                },
                tuiEditor: {
                  name: 'chunk-tuieditor',
                  priority: 20,
                  test: /[\\/]node_modules[\\/]_?@toast-ui[\\/]vue-editor(.*)/,
                },
              },
            });
        });
  },

  // 设为 false 打包时不生成 .map 文件
  productionSourceMap: false,

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
