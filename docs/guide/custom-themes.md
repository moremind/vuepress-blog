# 自定义主题

::: tip 提示
主题组件同样受到[浏览器 API 访问限制](./using-vue.md#浏览器-api-访问限制)。
:::

VuePress 使用 Vue 单个文件组件来定制主题。要使用自定义布局，请在文档根目录下创建一个 `.vuepress/theme` 目录，然后创建一个 `Layout.vue` 文件：

```
.
└─ .vuepress
   └─ theme
      └─ Layout.vue
```

这儿和开发一个正常的 Vue 应用程序是一样的。完全取决于你如何组织你的主题。

## 网站和网页元数据(site and page metadata)

对于 `docs` 中的每个 `.md` 文件，`Layout`组件将只被调用一次，并且整个站点和该特定页面的元数据将分别暴露为 `this.$site` 和 `this.$page` 属性被注入到应用程序中的每个组件里。

这是这个网站的 `$site` 值：

``` json
{
  "title": "VuePress",
  "description": "Vue-powered Static Site Generator",
  "base": "/",
  "pages": [
    {
      "lastUpdated": 1524027677000,
      "path": "/",
      "title": "VuePress",
      "frontmatter": {}
    },
    ...
  ]
}
```

`title`，`description` 和 `base` 从 `.vuepress/config.js` 中的相应字段复制而来。 `pages` 包含每个页面的元数据对象数组，包括其路径，页面标题（在 [YAML front matter](./markdown.md#front-matter) 中显式指定或从页面上的第一个标题推断）以及该文件中的任意 YAML frontmatter 数据。

这是你正在查看的此页面的 `$page` 对象：

``` json
{
  "lastUpdated": 1524847549000,
  "path": "/guide/custom-themes.html",
  "title": "自定义主题",
  "headers": [/* ... */],
  "frontmatter": {}
}
```

如果用户在 `.vuepress/config.js` 中提供 `themeConfig`，它也可以用 `$site.themeConfig`。你可以使用它来允许用户自定义主题的行为 - 例如，指定类别和页面顺序。然后，你可以将这些数据与 `$site.pages` 一起使用来动态构建导航链接。

最后，别忘了 `this.$route` 和 `this.$router` 也可作为 Vue Router API 的一部分。

::: tip 提示
`lastUpdated` 是该文件最后一次 git 提交的 UNIX 时间戳，更多详细信息请参考[最近的更新](../default-theme-config/README.md#最近更新)。

:::

## 内容摘要(content excerpt)

如果 markdown 文件包含一个 `<!-- more -->` 注释，那么注释上方的任何内容都将被提取，然后暴露在 `$page.excerpt` 中。如果你正在为博客创建自定义主题，可以使用此数据来渲染带有摘要信息的文章列表。

## 内容出口(content outlet)

所渲染的当前 `.md` 文件的编译内容将作为特殊的 `<Content/>` 全局组件来使用。你需要将其呈现在布局的某个位置以显示页面的内容。最简单的主题可以是一个带有以下内容的 `Layout.vue` 组件：

``` html
<template>
  <div class="theme-container">
    <Content/>
  </div>
</template>
```

## 应用级别的增强(app level enhancements)

主题可以通过在主题根文件的 `enhanceApp.js` 文件来增强 VuePress 使用的 Vue 应用。该文件应该通过 `export default` 命令导出一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子：

``` js
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
}
```

## 从依赖中引用主题(using theme from a dependency)

主题可以在 npm 上以原始 Vue SFC 格式发布为 `vuepress-theme-xxx`。

要使用 npm 依赖项的主题，请在 `.vuepress/config.js` 中提供一个 `theme` 选项：

``` js
module.exports = {
  theme: 'awesome'
}
```

VuePress 将尝试定位并使用 `node_modules/vuepress-theme-awesome/Layout.vue`。

## 自定义默认主题

`vuepress eject [targetDir]` 命令会将默认主题的源代码复制到 `.vuepress/theme` 中，来允许彻底的自定义。但是请注意，一旦你 eject，即使你升级 VuePress 版本，你这仍然是自己的主题，并且不会收到对默认主题的未来更新或错误修复。
