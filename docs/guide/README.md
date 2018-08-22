# 介绍

<Bit/>

VuePress 由两部分组成：一个以 Vue 驱动的主题系统的简约静态网站生成工具，和一个为编写技术文档而优化的默认主题。它是为了支持 Vue 子项目的文档需求而创建的。

由 VuePress 生成的每个页面，都具有相应的预渲染静态 HTML，它们能提供出色的加载性能，并且对 SEO 友好。然而，页面加载之后，Vue 就会将这些静态内容，接管为完整的单页面应用程序(SPA)。当用户在浏览站点时，可以按需加载其他页面。

## 运行原理(how it works)

VuePress 网站实际上是由 [Vue](http://vuejs.org/), [Vue Router](https://github.com/vuejs/vue-router) 和 [webpack](http://webpack.js.org/) 驱动的单页面应用程序。如果你以前使用过 Vue，那么在编写或开发自定义主题时（甚至可以使用 Vue DevTools 来调试你的自定义主题！），你会融入到熟悉的开发体验中！

在构建过程中，我们会创建应用程序的服务器渲染版本，并且实际上是通过访问每个路由，来渲染相应的 HTML。这种方式受到 [Nuxt](https://nuxtjs.org/) 的 `nuxt generate` 命令以及 [Gatsby](https://www.gatsbyjs.org/) 等其他项目的启发。

每个 markdown 文件都使用 [markdown-it](https://github.com/markdown-it/markdown-it) 编译为 HTML，然后作为 Vue 组件的模板进行处理。这允许你直接在 markdown 文件中使用 Vue，在需要嵌入动态内容时，这种使用方式非常有用。

## 特性(features)

- [内置 markdown 扩展](./markdown.md)，针对技术文档进行了优化
- [能够利用内嵌在 markdown 文件中的 Vue 代码](./using-vue.md)
- [以 Vue 驱动的自定义主题系统](./custom-themes.md)
- [自动生成 Service Worker](../config/README.md#serviceworker)
- [Google Analytics 集成](../config/README.md#ga)
- [基于 Git 的"最近更新"](../default-theme-config/README.md#最近更新)
- [多语言支持](./i18n.md)
- 一个默认主题包括：
  - 响应式布局
  - [可选的主页](../default-theme-config/README.md#主页-homepage)
  - [简单、开箱即用、基于标题的搜索功能](../default-theme-config/README.md#内置搜索-built-in-search)
   - [Algolia 搜索](../default-theme-config/README.md#algolia-search)
  - 可定制的[导航栏](../default-theme-config/README.md#导航栏-navbar)和[侧边栏](../default-theme-config/README.md#侧边栏-sidebar)
  - [自动生成的 GitHub 链接和页面编辑链接](../default-theme-config/README.md#git-仓库和编辑链接)

## 待实现特性(todo)

VuePress 的开发仍在进行中。有几件目前不支持，但计划做的功能：

- 插件支持
- 博客支持

欢迎贡献！

## 为什么不使用下面这些工具？

### Nuxt

VuePress 能做的事情，Nuxt 也同样能够实现，但是，它是为构建应用程序而设计的。而 VuePress 专注于以内容为中心的静态网站，并且为开箱即用的技术文档，提供量身定制的功能。

### Docsify / Docute

二者都是伟大的项目，也都是以 Vue 驱动。但它们完全是运行时驱动(runtime-driven)的项目，因此不适合 SEO 优化。如果你不关心 SEO 优化，也不想因为安装依赖而扰乱心神，这些仍然是不错的选择。

### Hexo

Hexo 一直在为 Vue 文档提供服务 - 事实上，离我们的主站完全迁移到 VuePress，可能还要经过一段时间。其中最大的问题是，它的主题系统是非常静态和基于字符串的 - 我们确实需要利用 Vue 来实现布局和交互。此外，无法对 Hexo 的 markdown 渲染，进行极其灵活的配置。

### GitBook

我们大部分的子项目文档中已经使用了 GitBook。GitBook 的主要问题是有大量文件时，它的开发重载性能简直令人无法容忍。它的默认主题也只有一个非常有限的导航结构，并且主题系统也不是基于 Vue 的。GitBook 背后的团队也更注重将其打造为一个商业产品，而不是开源工具。
