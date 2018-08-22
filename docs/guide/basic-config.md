# 配置

## 配置文件(config file)

不做任何配置的话，页面会显得过于简单，用户也无法方便地浏览网站。想要定制你的网站，首先需要在文档目录中创建一个 `.vuepress` 目录。这是放置所有 VuePress 特有(VuePress-specific) 文件的地方。你的项目结构可能长这样：

```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```

配置 VuePress 站点的基本文件是 `.vuepress/config.js`，其中导出一个 JavaScript 对象：

``` js
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```

如果开发服务器正常运行，你应该看到该页面现在有一个 title 标题和一个搜索框。VuePress 带有内置的 基于 header 搜索(headers-based search) 的功能 - 它会自动从所有页面的 title, `h2` 和 `h3` header 标签中，建立一个简单的搜索索引。（译者注：此搜索是遍历 pages 数组的每一项，取出其中的 headers 数组，其中数组每项对应 markdown 标题，具体代码查看 /lib/default-theme/SearchBox.vue 的 suggestions 函数）

请查阅 [配置参考](../config/README.md) 以获取完整的选项列表。

::: tip 可替代的配置格式
你也可以使用 YAML(`.vuepress/config.yml`) 或 TOML(`.vuepress/config.toml`) 格式编写配置文件。
:::

## 主题配置(theme configuration)

VuePress 主题，负责网站的所有布局和交互细节。VuePress 附带一个默认主题（你现在看到的就是），专门为技术文档设计。它暴露许多选项，允许你自定义导航栏(navbar)、侧边栏(sidebar)和主页(homepage)等。详细信息请查看 [默认主题配置](../default-theme-config/README.md) 页面。

如果你想开发自定义主题，请参考 [自定义主题](./custom-themes.md)。

## 应用程序级别的增强功能(app level enhancements)

由于 VuePress 应用是一个标准的 Vue 应用程序，所以你可以通过创建一个 `.vuepress/enhanceApp.js` 文件，来使用应用程序级别的增强功能，如果此文件存在，该文件将会被导入到该应用程序中。该文件应该通过  `export default` 方式导出一个钩子函数，它将接收一个含有一些应用程序级别值的对象作为参数。你可以使用这个钩子来安装额外的 Vue 插件，注册全局组件，或者添加额外的路由钩子：

``` js
export default ({
  Vue, // 当前 VuePress 应用所使用的 Vue 版本
  options, // 根 Vue 实例的选项
  router, // 应用程序的路由实例
  siteData // 网站元数据
}) => {
  // ...使用应用程序级别的增强功能
}
```
