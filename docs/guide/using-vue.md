# 在 Markdown 中使用 Vue

## 浏览器 API 访问限制

由于 VuePress 应用程序在生成静态构建文件时，会通过 Node.js 进行服务器端渲染，所以任何 Vue 用法都必须符合 [编写通用代码](https://ssr.vuejs.org/zh/guide/universal.html) 的要求。简而言之，确保只在 `beforeMounted` 或 `mounted` 钩子函数中访问 浏览器特定 API / DOM API。

如果你正在使用或展示一个对于 SSR 不友好的组件（比如说包含了自定义指令），则可以将它们包装在内置的 `<ClientOnly>` 组件中：

``` md
<ClientOnly>
  <NonSSRFriendlyComponent/>
</ClientOnly>
```

请注意，这无法解决一些组件或库在**静态导入(import)**时就试图访问浏览器 API 的问题 - 为了使用在导入时使用浏览器环境的代码，你需要在合适的生命周期钩子函数中，动态导入(dynamically import)它们：

``` vue
<script>
export default {
  mounted () {
    import('./lib-that-access-window-on-import').then(module => {
      // use code
    })
  }
}
</script>
```

## 模板(templating)

### 插值

每个 markdown 文件首先被编译成 HTML，然后作为 Vue 组件传递给 `vue-loader`。这意味着你可以在文本中使用 Vue 风格的插值表达式：

**输入**

``` md
{{ 1 + 1 }}
```

**输出**

<pre><code>{{ 1 + 1 }}</code></pre>

### 指令

也可以运行指令：

**输入**

``` md
<span v-for="i in 3">{{ i }} </span>
```

**输出**

<pre><code><span v-for="i in 3">{{ i }} </span></code></pre>

### 访问网站和页面数据

编译后的组件没有任何私有数据，但是我们可以访问到 [网站元数据](./custom-themes.md#网站和网页元数据-site-and-page-metadata)。例如：

**输入**

``` md
{{ $page }}
```

**输出**

``` json
{
  "path": "/using-vue.html",
  "title": "Using Vue in Markdown",
  "frontmatter": {}
}
```

## 转义(escaping)

默认情况下，花括号代码块(fenced code blocks)会自动用 `v-pre` 包装。如果要在内联代码片段或纯文本内显示原始插值或特定于 Vue 的语法，则需要把段落包裹在 `v-pre` 自定义容器中：

**输入**

``` md
::: v-pre
`{{ This will be displayed as-is }}`
:::
```

**输出**

::: v-pre
`{{ This will be displayed as-is }}`
:::

## 使用组件（Using Components）

`.vuepress/components` 中的所有 `*.vue` 文件都会自动注册为 [全局(global)](https://vuejs.org/v2/guide/components-registration.html#Global-Registration)[异步(async)](https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components) 组件。例如：

```
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      ├─ OtherComponent.vue
      └─ Foo
         └─ Bar.vue
```

在所有 markdown 文件中，你都可以直接使用这些组件（其名称(name)是从文件名推断出的）：

``` md
<demo-1/>
<OtherComponent/>
<Foo-Bar/>
```

<demo-1></demo-1>

<OtherComponent/>

<Foo-Bar/>

::: warning 重要
确保自定义组件的名称，是由连字符(hyphen)拼接，或者遵循帕斯卡命名(PascalCase)。否则，它将被视为内联元素，然后被包裹在一个 `<p>` 标签内，这将导致 hydration 无法匹配，这是因为 `<p>` 中不允许放置块元素。（译注：查看 [SSR 客户端激活(client-side hydration)](https://ssr.vuejs.org/zh/guide/hydration.html)）
:::

## 在标题中使用 Vue 组件

你可以在标题中使用 Vue 组件，但是请注意以下两种方式的不同：

| Markdown | 输出的 HTML | 解析后的标题 |
|--------|-------------|----------------|
| <pre v-pre><code> # text &lt;Tag/&gt; </code></pre> | `<h1>text <Tag/></h1>` | `text` |
| <pre v-pre><code> # text \`&lt;Tag/&gt;\` </code></pre> | `<h1>text <code>&lt;Tag/&gt;</code></h1>` | `text <Tag/>` |

被 `<code>` 包装的 HTML 将按原样显示，只有未被包装的 HTML 才会被 Vue 解析。

::: tip
输出的 HTML 由 [markdown-it](https://github.com/markdown-it/markdown-it) 完成。而解析后的标题由 VuePress 完成，用于[侧边栏](../default-theme-config/README.md#侧边栏)以及文档的标题。
:::

## 使用预处理器

VuePress 已经为如下预处理器内置了相关的 webpack 配置：`sass`, `scss`, `less`, `stylus` 和 `pug`。要使用它们，你只需要在项目中安装对应的依赖即可。例如，要使用 `sass`，直接在项目中安装：

``` bash
yarn add -D sass-loader node-sass
```

接着，你就可以在 markdown 或者主题组件中使用如下代码：

``` vue
<style lang="sass">
.title
  font-size: 20px
</style>
```

使用 `<template lang="pug">` 需要安装 `pug` 和 `pug-plain-loader`：

``` bash
yarn add -D pug pug-plain-loader
```

::: tip
如果你是 Stylus 用户，那么不需要在项目中安装 `stylus` 和 `stylus-loader`，因为 VuePress 内部已经使用了 Stylus。

对于没有内置 webpack 配置支持的预处理器，除了安装必要的依赖外，还需要 [扩展内部 webpack 配置](../config/README.md#configurewebpack)。
:::

## 脚本和样式提升

有时候，你可能只需要当前页面应用一些 JavaScript 或 CSS。在这些情况下，你可以在 markdown 文件中，直接编写根级别的 `<script>` 和 `<style>` 标签，它们会从编译后的 HTML 中提取出来，并作为生成的 Vue 单文件组件的 `<script>` 和 `<style>` 标签。

<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
export default {
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = '这是通过内联脚本中的内嵌 CSS 样式渲染的。'
  }
}
</script>

## 内置组件

### OutboundLink <Badge text="stable"/>

(<OutboundLink/>) 用于表示这是一个外部链接。在 VuePress 中，每个外部链接后面，都跟着一个这样的组件。

### ClientOnly <Badge text="stable"/>

参考 [浏览器 API 访问限制](#browser-api-access-restrictions)。

### Content <Badge text="beta" type="warn"/>

- **Props**:

  - `custom` - boolean

- **用法**：

当前 `.md` 文件的编译后内容，会在这里进行渲染。当你使用 [自定义布局](../default-theme-config/README.md#自定义页面的-class) 时，这将非常有用。

``` vue
<Content/>
```

**也可以参考：**

- [自定义主题 > 获取渲染内容](./custom-themes.md#内容出口-content-outlet)


### Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>

- **Props**:

   - `text` - string
   - `type` - string, 可选值：`"tip"|"warn"|"error"`, 默认值是：`"tip"`.
   - `vertical` - string, 可选值：`"top"|"middle"`, 默认值是：`"top"`.

- **用法**：

这个组件可以用在标题文本的末尾，用来为某些 API 添加一些状态：

``` md
### Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>
```

**也可以参考：** 

- [在标题中使用 Vue 组件](#在标题中使用-vue-组件)
