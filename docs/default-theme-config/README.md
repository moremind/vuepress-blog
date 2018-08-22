---
sidebar: auto
---

# 默认主题配置(default theme config)

<Bit/>

::: tip 提示
此页面上列出的所有选项仅适用于默认主题。如果你使用的是自定义主题，则选项可能会有所不同。
:::

## 主页(homepage)

默认主题提供了一个主页布局（用于[该网站的主页](/README.md)）。要使用它，需要在你的根目录 `README.md` 的 [YAML front matter](../guide/markdown.md#front-matter) 中指定 `home：true`，并加上一些其他的元数据。这是本网站使用的实际数据：

``` yaml
---
home: true
heroImage: /hero.png
actionText: 起步 →
actionLink: /guide/
features:
- title: 简明优先
  details: 对以 markdown 为中心的项目结构，做最简化的配置，帮助你专注于创作。
- title: Vue 驱动
  details: 享用 Vue + webpack 开发环境，在 markdown 中使用 Vue 组件，并通过 Vue 开发自定义主题。
- title: 性能高效
  details: VuePress 将每个页面生成为预渲染的静态 HTML，每个页面加载之后，然后作为单页面应用程序(SPA)运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

`YAML front matter` 的内容之后的其他任意内容，将被解析为正常 markdown，并在 features 部分之后渲染。

如果你想彻底自定义主页的布局，你还可以使用[自定义布局](#custom-layout-for-specific-pages)

## 导航栏(navbar)

导航栏包括页面标题、[搜索框](#search-box), [导航栏链接](#navbar-links)、[多语言支持](../guide/i18n.md) 和 [仓库链接](#git-repo-and-edit-links)，它们都取决于你的配置。

### 导航栏链接(navbar links)

你可以通过 `themeConfig.nav` 将链接添加到导航栏中：

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}
```

如果你提供一个 `items` 而不是 `link` 的数组，这些链接也可以是下拉菜单：

```js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ]
  }
}
```

另外，你可以通过嵌套的 items 在下拉菜单中设置子分组：

```js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [/*  */] },
          { text: 'Group2', items: [/*  */] }
        ]
      }
    ]
  }
}
```

### 禁用导航栏

可以使用 `themeConfig.navbar`，来禁用某个特定页面的导航栏：

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    navbar: false
  }
}
```

你可以通过 `YAML front matter` 来禁用一个指定页面的导航栏：

``` yaml
---
navbar: false
---
```

## 侧边栏(sidebar)

要启用侧边栏, 请使用 `themeConfig.sidebar`。基本的配置需要一个链接数组：

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}
```

你可以省略 `.md` 扩展名，以 `/` 结尾的路径被推断为 `*/README.md` 。该链接的文本是自动推断的（从页面的第一个标题或 `YAML front matter` 中的显式标题）。如果你希望明确指定链接文本，请使用 `[link,text]` 形式的数组。

### 嵌套标题链接(nested header links)

侧边栏自动显示当前激活页面中标题的链接，嵌套在页面本身的链接下。你可以使用 `themeConfig.sidebarDepth` 自定义此行为。默认深度是 `1`，它提取 `h2` 标题。将其设置为 `0` 将禁用标题链接，最大值为`2`，同时提取 `h2` 和 `h3` 标题。

页面也可以在使用 `YAML front matter` 时覆盖此值：

``` md
---
sidebarDepth: 2
---
```

### 显示所有页面的标题链接 <Badge text="0.11.0+"/>

默认情况下，侧边栏只会显示由当前活动页面的标题（headers）组成的链接，你可以将 `themeConfig.displayAllHeaders` 设置为 `true` 来显示所有页面的标题链接：

``` js
module.exports = {
  themeConfig: {
    displayAllHeaders: true // 默认值：false
  }
}
```

### 激活的标题链接

默认情况下，当用户滚动页面，查看不同部分时，嵌套的标题链接和 URL 中的哈希值会随之更新，此行为可以通过以下的主题配置来禁用：

``` js
module.exports = {
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
  }
}
```

::: tip 提示
  值得一提的是，当你禁用此选项时，此功能相应的脚本将不会被加载，这是我们性能优化的一个小技巧。
:::

### 侧边栏分组(sidebar groups)

你可以使用对象将侧边栏链接分成多个分组：

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ]
      }
    ]
  }
}
```

侧边栏分组默认情况下是可折叠的。你可以强制一个分组始终以 `collapsable：false` 打开。

### 多个侧边栏(multiple sidebars)

如果你希望为不同的内容部分显示不同的侧边栏，请先组织你的页面，放到每个要求部分的目录中:

```
.
├─ README.md
├─ contact.md
├─ about.md
├─ foo/
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar/
   ├─ README.md
   ├─ three.md
   └─ four.md
```

然后，修改你的配置，将每个页面定义到不同的侧边栏中。

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // 回退(fallback)侧边栏配置
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}
```

::: warning 警告
请确保将回退(fallback)侧边栏，定义在配置的最后。

VuePress 会按从上到下的顺序，遍历侧边栏配置。如果回退侧边栏定义在第一位，VuePress 会无法正确的匹配 `/foo/` 或 `/bar/four.html`，因为他们都以 `/` 为开始。
:::

### 自动生成侧栏(auto sidebar for single pages)

如果你希望自动生成仅包含当前页面的标题链接的侧边栏，可以在该页面上使用  `YAML front matter`：

``` yaml
---
sidebar: auto
---
```

你也可以通过配置来在所有页面中启用它：

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: 'auto'
  }
}
```

在 [多语言](../guide/i18n.md) 模式下, 你也可以将其应用到某一特定的语言下：

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
     '/': {
       sidebar: 'auto'
     }
  }
}
```

### 禁用侧边栏(disabling the sidebar)

你可以使用 `YAML front matter` 禁用特定页面上的侧边栏：

``` yaml
---
sidebar: false
---
```

## 搜索框(search box)

### 内置搜索(built-in search)

可以通过 `themeConfig.search: false` 禁用内置搜索框，以及通过 `themeConfig.searchMaxSuggestions` 来调整搜索框显示的搜索提示数量：

``` js
module.exports = {
  themeConfig: {
    search: false,
    searchMaxSuggestions: 10
  }
}
```

::: tip
如果你需要全文搜索，内置搜索只能从标题 `h2` 和 `h3` 标题构建索引，你可以使用 [Algolia 搜索](#algolia-search)。
:::

### Algolia Search

可以通过 `themeConfig.algolia` 选项，来用 [Algolia DocSearch](https://community.algolia.com/docsearch/) 替换内置搜索。要启用 Algolia 搜索，至少需要提供 `apiKey` 和 `indexName`：

``` js
module.exports = {
  themeConfig: {
    algolia: {
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>'
    }
  }
}
```

::: warning 注意
不同于开箱即用的 [内置搜索](#内置搜索)，[Algolia 搜索](https://community.algolia.com/docsearch/) 需要你在使用之前将你的网站提交给它们用于创建索引。
:::

更多信息，请参考 [Algolia DocSearch 文档](https://github.com/algolia/docsearch#docsearch-options)。

## 最近更新

`themeConfig.lastUpdated` 选项允许你获取每个文件的最后一次 git 提交的 UNIX 时间戳（ms），并且它也会以合适的格式显示在每个页面的底部：

``` js
module.exports = {
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
  }
}
```

请注意，它默认是关闭的，如果给定一个 `string` 类型的值，它将会作为前缀显示（默认值是：`Last Updated`）。

::: warning
  由于 `lastUpdated` 是基于 `git` 的, 所以你只能在一个基于 `git` 的项目中启用它。
:::

## Service Worker

`themeConfig.serviceWorker` 选项将允许你进行 service worker 相关的配置

::: tip 提示
请不要将 `themeConfig.serviceWorker` 与 [Config > serviceWorker](../config/README.md#serviceworker) 混淆，[Config > serviceWorker](../config/README.md#serviceworker) 是**站点级别的**，而 `themeConfig.serviceWorker` 是**主题级别的**
:::

### 刷新内容的弹窗 <Badge text="0.13.0+"/> <Badge text="beta" type="warn"/>

开启 `themeConfig.serviceWorker.updatePopup` 选项，将开启一个能够刷新内容的弹窗。当网站更新（即 Worker 更新）时，它会提供一个 `refresh` 按钮，允许用户立刻刷新内容。

::: tip 提示
如果没有 `refresh` 按钮，新的 service worker 将在所有的 [clients](https://developer.mozilla.org/en-US/docs/Web/API/Clients) 关闭后才会处于活动状态。这意味着访问者在关闭你网站的所有标签之前将无法看到新内容。但是，`refresh` 按钮可以立即激活新的 Service Worker。
:::

``` js
module.exports = {
  themeConfig: {
    serviceWorker: {
      updatePopup: true // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    }
  }
}
```

## 上一页 / 下一页链接(prev / next links)

根据激活页面的侧边栏顺序自动推断上一个和下一个链接。你也可以使用 `YAML front matter` 来显式覆盖或禁用它们：

``` yaml
---
prev: ./some-other-page
next: false
---
```

## Git 仓库和编辑链接

提供 `themeConfig.repo` 会在导航栏中自动生成一个 GitHub 链接，并在每个页面的底部显示「编辑此页面」链接。

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // 假定 GitHub。也可以是一个完整的 GitLab URL。
    repo: 'vuejs/vuepress',
    // 自定义项目仓库链接文字
    // 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
    repoLabel: '贡献代码！',

    // 以下为可选的 "Edit this page" 链接选项

    // 如果你的文档和项目位于不同仓库：
    docsRepo: 'vuejs/vuepress',
    // 如果你的文档不在仓库的根目录下：
    docsDir: 'docs',
    // 如果你的文档在某个特定的分支（默认是 'master' 分支）：
    docsBranch: 'master',
    // 默认为 false，设置为 true 来启用
    editLinks: true,
    // 自定义编辑链接的文本。默认是 "Edit this page"
    editLinkText: '帮助我们改进页面内容！'
  }
}
```

你还可以通过 `YAML front matter` 隐藏指定页面上的编辑链接：

``` yaml
---
editLink: false
---
```

## 简单的 CSS 覆盖

如果你希望对默认主题的样式应用简单的覆盖，可以创建一个 `.vuepress/override.styl` 文件。 这是 [Stylus](http://stylus-lang.com/) 文件，但你也可以使用普通的 CSS 语法。

有几个颜色变量可以调整：

``` stylus
// 显示默认值
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
```

### 仍然存在的问题 <Badge text="< 0.12.0" type='error'/>

为了覆盖上面提到的默认变量，`override.styl` 将在默认主题的 `config.styl` 末尾导入，这个文件将被多个文件使用，所以一旦你在这里写了样式，你的 样式将被多次复制。参考 [#637](https://github.com/vuejs/vuepress/issues/637)。

### 迁移你的样式到 `style.styl` <Badge text="0.12.0+"/>

事实上，`style constants override` 和 `styles override` 是两个东西，前者应该在编译 CSS 之前执行，而后者应该在 CSS bundle 末尾生成，它具有最高优先级。

从 `0.12.0` 开始，我们将 `override.styl` 分成两个 API：`override.styl` 和 `style.styl` 。如果你以前在 `override.styl` 中编写样式，例如：

``` stylus
// .vuepress/override.styl
$textColor = red // stylus constants override.

#my-style {} // your extra styles.
```

你需要抽离这部分样式到 `style.styl`:

``` stylus
// .vuepress/override.styl, SHOULD ONLY contain "stylus constants override".
$textColor = red
```

``` stylus
// .vuepress/style.styl, your extra styles.
#my-style {}
```

## 自定义页面的 class

有时，你可能需要为特定的页面添加一个唯一的 class，以便你只能在自定义 CSS 中定位该页面上的内容。 你可以在 `YAML front matter` 中用 `pageClass` 在主题的容器 div 中添加一个 class：

``` yaml
---
pageClass: custom-page-class
---
```

然后你就可以只编写针对该页面的 CSS：

``` css
/* .vuepress/override.styl */

.theme-container.custom-page-class {
  /* 页面特定的规则 */
}
```

## 特定页面的自定义布局(custom layout for specific pages)

默认情况下，每个 `*.md` 文件的内容都会显示在一个 `<div class =“page”>` 容器中，以及侧边栏，自动生成的编辑链接和 prev/next 链接。如果你希望使用完全自定义的组件代替页面（同时只保留导航栏），则可以使用 `YAML front matter` 再次指定要使用的组件：

``` yaml
---
layout: SpecialLayout
---
```

这将为给定页面渲染 `.vuepress/components/SpecialLayout.vue`。

## 弹出(ejecting)

你可以将默认主题的源代码复制到 `.vuepress/theme` 中，来使用 `vuepress eject [targetDir]` 命令彻底自定义主题。但是请注意，一旦你 eject，即使你升级 VuePress 版本，你这仍然是自己的主题，并且不会收到对默认主题的未来更新或错误修复。
