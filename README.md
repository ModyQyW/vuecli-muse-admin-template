# vuecli-muse-admin-template

English | [简体中文](./README_CN.md)

---

## Introduction

vuecli-muse-admin-template is a background integration solution. It is created by [vue-cli 3](https://cli.vuejs.org/), uses the UI toolkit [Muse-UI](https://muse-ui.org/), and aimed at helping to build a complex Single-Page Application.

See [Features](#Features) to get more.

**Improving it...** :D

## Preparation

- Install [Node.js](https://nodejs.org/en/) and [git](https://git-scm.com/) locally.

- This project is based on ES2015+, [Vue](https://vuejs.org/), [Vuex](https://vuex.vuejs.org/), [VueRouter](https://router.vuejs.org/guide/), [Axios](https://github.com/axios/axios) and [Muse-UI](https://muse-ui.org/).

- All request data is simulated using [vuecli-muse-admin-template-server](https://github.com/ModyQyW/vuecli-muse-admin-template-server).

- Understanding what listed above in advance will greatly help use this template.

## Getting Started

```sh
# install
# npm i
yarn

# compiles and hot-reloads for development
# npm run serve
yarn serve

# run tests
# npm run test
yarn test

# Compiles and minifies for production
# npm run build
yarn build

# Lints and fixes files
# npm run lint
yarn lint
```

**Attention**: I import material-design-icons in [index.html](./public/index.html) for now, cause using npm or yarn always leads to a error in China.

if you want to use npm or yarn to install material-design-icons, follow the steps below.

- comment Line 9 in [index.html](./public/index.html)
- run `npm i --save material-design-icons` or `yarn add material-design-icons` in shell
- uncomment Line 63 in [muse/index.js](./src/plugins/muse/index.js)

## Features

- [Customize Configuration CLI](https://cli.vuejs.org/config/)

- Access Control

|Level|Role|
|:-:|:--|
|0|super admin|
|1|admin|
|2|manager|
|3|developer|
|4|client|
|5|user|

- global

  - Two environments for building: dev & prod

  - Two languages: English and Chinese

  - Dynamic sidebar

  - Dynamic breadcrumb

- Clip to copy

- Counter

- Zip export

- Draggable

- Icons

- Editor

  - Rich text editor

  - Markdown editor

  - JSON editor

- Simple table

- Error pages: 401, 403, 404, 500

- Charts: vue-echarts

## Usage

See [usage.md](./docs/usage.md).

## Changelog

See [changelog.md](./docs/changelog.md).

## Online Demo

[demo](https://modyqyw.top/vuecli-muse-admin-template/dist/#/signin)

## Donate

I am still working on it to imporve - not only add new function but also complete codes and documents.

If you think this is helpful, you can buy me a coffee :D

|WeChat|Alipay|
|:-:|:-:|
|<img src="https://raw.githubusercontent.com/ModyQyW/Pictures/master/wechat.png" style="width: 300px;"/>|<img src="https://raw.githubusercontent.com/ModyQyW/Pictures/master/alipay.jpg" style="width: 300px;" />|

## Browsers Support

Expect to run in latest Chrome and lastest Firefox.

Good luck to IE, Edge and Safari.

Testing...

## License

MIT