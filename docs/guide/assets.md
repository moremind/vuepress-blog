# 静态资源处理

## 相对 URLs

所有 markdown 文件都会被编译到 Vue 组件中并由 webpack 处理，因此你**应该更倾向于**使用相对 URL 引用任意资源：

``` md
![An image](./image.png)
```

这将和 `* .vue` 文件模板中的运作的方式相同。该图片资源将通过 `url-loader` 和 `file-loader` 进行处理，并被复制到生成的静态构建文件中的合适位置。

另外，你可以使用 `~` 前缀来明确指出这是一个 webpack 模块请求，这将允许你使用 webpack 别名或 npm 依赖关系引用文件：

``` md
![Image from alias](~@alias/image.png)
![Image from dependency](~some-dependency/image.png)
```

webpack 别名可以通过 `.vuepress/config.js` 中的 [configureWebpack](/config/#configurewebpack) 进行配置。例如：

``` js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}
```

## 公共文件

有时，你可能需要提供静态资源，这些资源并没有在任何 markdown 或主题组件中直接引用 - 例如，favicons 和 PWA 图标。在这种情况下，你可以将它们放在 `.vuepress/public` 中，并且它们将被复制到生成目录的根目录。

## 基准 URL

如果你的网站部署到非根 URL，则需要在 `.vuepress/config.js` 中设置 `base` 选项。例如，如果你打算将你的网站部署到 `https://foo.github.io/bar/`，那么`base`应该设置为 `"/bar/"`（它应该始终以斜杠开始和结束）。

使用基准 URL，如果你想在 `.vuepress/public` 中引用图片，则必须使用像 `/bar/image.png` 这样的 URL。但是，如果你有朝一日会决定更改 `base` ，这样的路径就显得很脆弱了。为了解决这个问题，VuePress 提供了一个内置的帮助器 `$withBase`（注入到 Vue 的原型中），它可以生成正确的路径：

``` vue
<img :src="$withBase('/foo.png')" alt="foo">
```

请注意，你不仅可以在主题组件中使用上述语法，还可以在 markdown 文件中使用上述语法。

另外，如果设置了 `base`，它会自动作为前缀拼接到 `.vuepress/config.js` 选项中的所有静态资源 URL 中。
