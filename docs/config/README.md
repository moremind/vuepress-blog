---
sidebar: auto
---

# 配置参考

<Bit/>

## 基本配置(basic config)

### base

- Type: `string`
- Default: `/`

网站用来部署的基准 URL。如果你打算在子路径下部署你的站点，例如 GitHub 页面，则需要设置此项。如果你打算将你的网站部署到`https://foo.github.io/bar/`，则应将 `base` 设置为 `"/bar/"`。它应该始终以斜杠开始和结束。

在其他选项中，`base` 会自动添加到以 `/` 开头的所有 URL 中，因此你只需指定一次即可。

**另请参考：**

- [基准 URL](../guide/assets.md#相对-urls)
- [部署教程 > Github 页面](../guide/deploy.md#github-页面)

### title

- Type: `string`
- Default: `undefined`

网站的标题。这将是所有页面标题的前缀，并显示在默认主题的导航栏中。

### description

- Type: `string`
- Default: `undefined`

网站描述。这将在页面 HTML 中表现为一个 `<meta>` 标签。

### head

- Type: `Array`
- Default: `[]`

被注入页面 HTML `<head>` 额外的标签。每个标签可以用 `[tagName, { attrName: attrValue }, innerHTML?]` 的形式指定。例如，要添加自定义图标：

``` js
module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ]
}
```

### host

- Type: `string`
- Default: `'0.0.0.0'`

指定用于 dev 服务器的主机。

### port

- Type: `number`
- Default: `8080`

指定用于 dev 服务器的端口。

### dest

- Type: `string`
- Default: `.vuepress/dist`

指定 `vuepress build` 的输出目录。

### ga

- Type: `string`
- Default: `undefined`

提供 Google AnalyticsID 来开启集成功能。

::: tip 提示
请留意 [GDPR (2018年欧盟数据保护规则改革)](https://ec.europa.eu/commission/priorities/justice-and-fundamental-rights/data-protection/2018-reform-eu-data-protection-rules_en), 在合适或者需要的情况下，考虑将 Google Analytics 设置为[匿名化的 IP](https://support.google.com/analytics/answer/2763052?hl=zh-Hans)。
:::

### serviceWorker

- Type: `boolean`
- Default: `false`

如果设置为 `true`，VuePress 将自动生成并注册一个 service worker ，这个 worker 将内容缓存以供离线使用（仅在生产环境中启用）。

如果开发了一个自定义主题，`Layout.vue` 组件还将触发以下事件：

- `sw-ready`
- `sw-cached`
- `sw-updated`
- `sw-offline`
- `sw-error`

::: tip PWA 注意事项
`serviceWorker` 选项只能处理 service worker。要使你的站点完全符合 PWA，你需要在`.vuepress/public` 中提供 Web App 清单和图标。有关更多详细信息，请参阅 [MDN 关于 Web 应用程序清单的文档](https://developer.mozilla.org/en-US/docs/Web/Manifest)。

此外，只有在你能够使用 SSL 部署你的站点时才能启用此功能，因为 service worker 只能在 HTTPs URLs 下注册。
:::

### locales

- Type: `{ [path: string]: Object }`
- Default: `undefined`

指定用于 i18n 支持，要获取更多细节，请参考[国际化指南](../guide/i18n.md)。

### shouldPrefetch

- 类型: `Function`
- 默认值: `() => true`

一个函数，用来控制对于哪些文件，是需要生成 `<link rel="prefetch">` 资源提示的。请参考 [shouldPrefetch](https://ssr.vuejs.org/zh/api/#shouldpreload)。

## 主题化(theming)

### theme

- Type: `string`
- Default: `undefined`

指定此选项来使用自定义主题。使用 `"foo"` 的值，VuePress 将尝试在 `node_modules/vuepress-theme-foo/Layout.vue` 加载主题组件。

### themeConfig

- Type: `Object`
- Default: `{}`

为使用的主题提供配置选项。这些选项将根据你使用的主题而有所不同。

**另请参阅：**

- [默认主题配置](../default-theme-config/README.md).

## Markdown

### markdown.lineNumbers

- Type: `boolean`
- Default: `undefined`

是否在每个代码块的左侧显示行号。

**另请参阅：**

- [行号](../guide/markdown.md#行号)

### markdown.slugify

- Type: `Function`
- Default: [source](https://github.com/vuejs/vuepress/blob/master/lib/markdown/slugify.js)

将标题文本转换为别名(slug)的函数。这会影响标题锚点、目录和侧边栏链接生成的 id 和链接。（译者注：此功能是为了解决非 ASCII 码字符生成链接时的 [bug](https://github.com/vuejs/vuepress/issues/45)，具体代码查看 /lib/markdown/slugify 的 slugify 函数）

### markdown.externalLinks

- Type: `Object`
- Default: `{ target: '_blank', rel: 'noopener noreferrer' }`

键和值对将被添加到指向外部链接的 `<a>` 标签。默认选项将在新窗口中打开外部链接。

### markdown.anchor

- Type: `Object`
- Default: `{ permalink: true, permalinkBefore: true, permalinkSymbol: '#' }`

[markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor) 的选项。(注意：如果你想自定义标题 id 的话尽量使用 `markdown.slugify`。)

### markdown.toc

- Type: `Object`
- Default: `{ includeLevel: [2, 3] }`

[markdown-it-table-of-contents](https://github.com/Oktavilla/markdown-it-table-of-contents) 的选项。(注意：如果你想自定义标题 id 的话尽量使用 `markdown.slugify`。)

### markdown.config

- Type: `Function`
- Default: `undefined`

修改默认配置，或将额外的插件应用于渲染源文件的 [markdown-it](https://github.com/markdown-it/markdown-it) 实例的函数。例如：

``` js
module.exports = {
  markdown: {
    config: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

## 建立管道(build pipeline)

### postcss

- Type: `Object`
- Default: `{ plugins: [require('autoprefixer')] }`

[postcss-loader](https://github.com/postcss/postcss-loader) 的选项。注意：指定这个值将会覆盖 autoprefixer，你需要把 autoprefixer 的选项也包含进去。

### stylus

- Type: `Object`
- Default: `{ preferPathResolver: 'webpack' }`

提供给 [stylus-loader](https://github.com/shama/stylus-loader) 的参数。

### scss

- Type: `Object`
- Default: `{}`

提供给 [sass-loader](https://github.com/webpack-contrib/sass-loader) 的参数，用来加载 `*.scss` 文件。

### sass

- Type: `Object`
- Default: `{ indentedSyntax: true }`

提供给 [sass-loader](https://github.com/webpack-contrib/sass-loader) 的参数，用来加载 `*.sass` 文件。

### less

- Type: `Object`
- Default: `{}`

提供给 [less-loader](https://github.com/webpack-contrib/less-loader) 的参数。

### configureWebpack

- Type: `Object | Function`
- Default: `undefined`

修改内部 webpack 配置。如果该值是一个对象，它将被合并到使用 [webpack-merge](https://github.com/survivejs/webpack-merge) 的最终配置中；如果该值是一个函数，它将接收 config 作为第一个参数，并将 `isServer` 这个标志作为第二个参数。你可以直接改变配置，或者返回一个要合并的对象：

``` js
module.exports = {
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // mutate the config for client
    }
  }
}
```

### chainWebpack

- Type: `Function`
- Default: `undefined`

使用 [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain) 修改内部的 webpack 配置。

``` js
module.exports = {
  chainWebpack: (config, isServer) => {
    // config is an instance of ChainableConfig
  }
}
```

## 浏览器兼容性(browser compatibility)

### evergreen

- Type: `boolean`
- Default: `false`

如果你只针对常青树浏览器，请设置为 `true` 。这将禁用 IE5 的 ES5 转码和 polyfill，导致更快的构建和更小的文件。
