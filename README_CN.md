# vuecli-muse-admin-template

<a href="https://996.icu"><img src="https://img.shields.io/badge/link-996.icu-red.svg" alt="996.icu" /></a>

[English](README.md) | 简体中文

---

## 介绍

vuecli-muse-admin-template 是一个后台集成解决方案。它由 [vue-cli 3](https://cli.vuejs.org/) 创建，使用了 UI 库 [Muse-UI](https://muse-ui.org/)，旨在帮助搭建一个复杂的单页应用 SPA。

查看[特性](#特性)以了解更多。

**持续更新中...**(¦3[▓▓])

## 准备

- 全局安装 [Node.js](http://nodejs.cn/) 和 [git](https://git-scm.com/)。

- 该项目基于 ES2015+，[Vue](https://vuejs.org/)，[Vuex](https://vuex.vuejs.org/)，[VueRouter](https://router.vuejs.org/guide/)，[Axios](https://github.com/axios/axios) 和 [Muse-UI](https://muse-ui.org/) 搭建。

- 所有请求数据使用 [vuecli-muse-admin-template-server](https://github.com/ModyQyW/vuecli-muse-admin-template-server) 模拟。

- 提前了解以上所写会对使用本项目有很大帮助。

## 起步

```sh
# 克隆项目并进入到项目根目录
git clone https://github.com/ModyQyW/vuecli-muse-admin-template.git
cd vuecli-muse-admin-template

# 安装依赖
# npm i
yarn

# dev 环境使用热重启编译调试
# npm run serve
yarn serve

# 运行测试
# npm run test
yarn test

# prod 环境编译打包
# npm run build
yarn build

# 分析并修正文件
# npm run lint
yarn lint
```

注意：因为国内使用 npm 或 yarn 安装 material-design-icons 总是会出现错误，目前我在 [@/plugins/muse/index.js](./src/plugins/muse/index.js) 中引入了本地的相关文件。

如果你想要用 npm 或 yarn 安装 material-design-icons，请参考以下步骤：

- 注释 [@/plugins/muse/index.js](./src/plugins/muse/index.js) 第 63 行
- 命令行运行`npm i --save material-design-icons`或`yarn add material-design-icons`
- 取消注释 [@/plugins/muse/index.js](./src/plugins/muse/index.js) 第 64 行

## 特性

- [自主配置脚手架](https://cli.vuejs.org/zh/config/)

- 权限等级控制

|Level|Role|
|:-:|:--|
|0|super admin|
|1|admin|
|2|manager|
|3|developer|
|4|client|
|5|user|

- 全局

  - 双环境打包：dev 和 prod

  - 双语言：中文和英文

  - 动态侧边栏

  - 动态面包屑导航

- 点击复制

- 计数器

- 导出 Zip

- 拖拽

- 图标
  
- 编辑器

  - 富文本编辑器

  - Markdown 编辑器

  - JSON 编辑器

- 简单表格

- 错误页面：401，403，404，500

- 图表：vue-echarts

## 代码风格

请遵循 [Vue.js 风格指南](https://cn.vuejs.org/v2/style-guide/)。

## 使用

查看[使用文档](./docs/usage_cn.md)。

## 改动日志

查看[changelog_cn.md](./docs/changelog_cn.md)。

## 在线 Demo

[demo](https://modyqyw.top/vuecli-muse-admin-template/dist/#/signin)

## 捐赠

我仍在努力使这个项目变得更好，不仅仅是丰富功能，还有完善代码与文档。

如果你觉得这个项目对你有用，你可以给我买杯咖啡_(:з」∠)_

|WeChat|Alipay|
|:-:|:-:|
|<img src="https://raw.githubusercontent.com/ModyQyW/Pictures/master/wechat.png" style="height: 200px;"/>|<img src="https://raw.githubusercontent.com/ModyQyW/Pictures/master/alipay.jpg" style="height: 200px;" />|

## 浏览器支持

期望可以运行在最新的 Chrome 和 Firefox 上。

祝 IE、Edge 和 Safari 好运。

测试中...

## 协议

MIT