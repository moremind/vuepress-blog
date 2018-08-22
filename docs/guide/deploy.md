# 部署

以下指南基于几个共同的假设：

- 将文档放置在项目的 `docs` 目录中；
- 使用默认的构建输出位置（`.vuepress/dist`）。
- VuePress 是在项目本地的依赖中安装的，并且配置如下的 npm scripts:

``` json
{
  "scripts": {
    "docs:build": "vuepress build docs"
  }
}
```

## GitHub 页面

1. 在 `docs/.vuepress/config.js` 设置正确的 `base`。

   如果你打算部署到 `https://<USERNAME>.github.io/`，就可以省略这一步，因为 `base` 默认为 `"/"`。

   如果你打算部署到 `https://<USERNAME>.github.io/<REPO>/`（也就是说你的仓库地址是 `https://github.com/<USERNAME>/<REPO>`），设置 base 为 `"/<REPO>/"`。

2. 在你的项目中，创建一个有以下内容的 `deploy.sh` 文件（对高亮行适当注释），然后运行它完成部署：

``` bash{13,20,23}
#!/usr/bin/env sh

# 终止一个错误
set -e

# 构建
npm run docs:build

# 进入生成的构建文件夹
cd docs/.vuepress/dist

# 如果你是要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

::: tip
你可以在你的 CI 中，设置每次 push 代码时自动运行上述脚本。
:::

## GitLab 页面和 GitLab CI

1. 在 `docs/.vuepress/config.js` 设置正确的 `base`。

   如果你打算部署到 `https://<USERNAME>.gitlab.io/`，就可以省略这一步，因为 `base` 默认为 `"/"`。

   如果你打算部署到 `https://<USERNAME or GROUP>.gitlab.io/<REPO>/`（也就是说你的仓库地址是 `https://gitlab.com/<USERNAME>/<REPO>`），设置 base 为 `"/<REPO>/"`。

2. 在 `.vuepress/config.js` 中设置 `dest` 到 `public`.

3. 在你项目的根目录下创建一个名为 `.gitlab-ci.yml` 的文件，无论何时你提交更改，它都会帮助你自动构建和部署：

``` yaml
image: node:9.11.1

pages:
  cache:
    paths:
    - node_modules/

  script:
  - npm install
  - npm run docs:build
  artifacts:
    paths:
    - public
  only:
  - master
```


## Netlify

1. 在 Netlify 中, 从 GitHub 创建一个新项目，使用以下设置：

  - **构建命令：** `npm run docs:build` or `yarn docs:build`
  - **发布目录：** `docs/.vuepress/dist`

2. 点击部署按钮！

## Google Firebase

1. 确保你已经安装了 [firebase-tools](https://www.npmjs.com/package/firebase-tools)。

2. 在你项目的根目录下创建 `firebase.json` 和 `.firebaserc`，写入以下内容：

`firebase.json`:
```json
{
 "hosting": {
   "public": "./docs/.vuepress/dist",
   "ignore": []
 }
}
```

`.firebaserc`:
```js
{
 "projects": {
   "default": "<YOUR_FIREBASE_ID>"
 }
}
```

3. 执行 `yarn docs:build` 或 `npm run docs:build` 之后，使用 `firebase deploy` 命令来部署。

## Surge

1. 首先先安装好 [surge](https://www.npmjs.com/package/surge)。

2. 运行 `yarn docs:build` 或 `npm run docs:build`。

3. 要部署到 surge, 运行 `surge docs/.vuepress/dist` 命令。

你也可以通过 `surge docs/.vuepress/dist yourdomain.com` 来部署到 [自定义域名(http://surge.sh/help/adding-a-custom-domain)。

## Heroku

1. 首先要安装 [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)。

2. [在这里](https://signup.heroku.com)创建一个 Heroku 账号。

3. 运行 `heroku login` 并填写你的 Heroku 证书：

 ``` bash
 heroku login
 ```

4. 在你的项目根目录中，创建一个名为 `static.json` 的文件，里面有下述内容：

 `static.json`:
 ```json
 {
   "root": "./docs/.vuepress/dist"
 }
 ```

这就是你项目的配置，请参考 [heroku-buildpack-static](https://github.com/heroku/heroku-buildpack-static) 了解更多。

5. 配置 Heroku 的 git 远程仓库：

``` bash
# 版本变化
git init
git add .
git commit -m "My site ready for deployment."

# 用指定的名称创建一个新的 heroku 应用
heroku apps:create example

# 为静态站点设置构建包(buildpack)
heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git
```

6. 部署你的站点

``` bash
# 发布站点
git push heroku master

# 打开一个浏览器去opens a browser to view the Dashboard version of Heroku CI
heroku open
```

***

> 原文：[https://vuepress.vuejs.org/guide/deploy.html](https://vuepress.vuejs.org/guide/deploy.html)
