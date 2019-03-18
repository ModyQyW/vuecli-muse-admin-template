# 使用

## 新建模块页面与组件

- 在 @/src/views/ 中新建对应的文件夹，这里假定为`test`

- 假如需要模块组件，新建 @/src/views/test/components，在其中新建需要的组件

- 在 @/src/views/test/ 中新建对应的页面（单文件建议命名为 index.vue，否则建议按功能命名）

## 新建全局组件

在 @/src/components/ 中新建对应的组件，按功能命名，再在页面中引用即可

## 使用你自己的 iconfont

[参考链接](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code)

- 打开 [iconfont](https://www.iconfont.cn/)

- 注册账号，新建一个 iconfont 项目作为你新项目的图标库

- 挑选你喜欢的图标，添加入购物车

- 打开购物车，添加至指定项目

- 打开指定项目，选择自己想要的类型（Unicode，Font class，Symbol），然后下载至本地

- 解压文件，把所有文件放入项目内，然后引用 iconfont.css

- 按照参考链接所述进行引用