# 起步

::: warning 兼容性注意事项
VuePress 要求 Node.js >= 8。
:::

## 全局安装

如果你只是想随便用下 VuePress，你可以在全局安装它：

``` bash
# 全局安装
yarn global add vuepress # 或 npm install -g vuepress

# 创建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始编写文档
vuepress dev

# 构建
vuepress build
```

## 在已有项目中安装

如果你想要在一个已有项目中维护文档，就应该将 VuePress 安装为本地依赖。此设置还允许你使用 CI 或 Netlify 服务，在推送时自动部署。

``` bash
# 安装为本地依赖项
yarn add -D vuepress # 或 npm install -D vuepress

# 创建一个 docs 目录
mkdir docs
# 创建一个 markdown 文件
echo '# Hello VuePress' > docs/README.md
```

::: warning 警告
当将 VuePress 安装到以 webpack 3.x 作为依赖项的已有项目中时，推荐使用[Yarn](https://yarnpkg.com/en/) 而不是 npm。因为在这种情况下，Npm 无法生成正确的依赖关系树。
:::

然后，给 `package.json` 添加一些 scripts 脚本：

``` json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

你现在就可以开始编写文档了：

``` bash
yarn docs:dev # 或 npm run docs:dev
```

要生成静态资源，请运行：

``` bash
yarn docs:build # 或 npm run docs:build
```

默认情况下，构建的文件会位于 `.vuepress/dist` 中，该文件可以通过 `.vuepress/config.js` 中的 `dest` 字段进行配置。构建的文件可以部署到任何静态文件服务器。关于如何部署到一些常用服务，请参考 [部署指南](./deploy.md)。
