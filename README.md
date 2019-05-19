[![vuepress](https://img.shields.io/badge/vuepress-1.0.0--alpha.42-blue.svg)](https://v1.vuepress.vuejs.org/)
[![valine](https://img.shields.io/badge/valine-1.3.4-blue.svg)](https://valine.js.org/)
[![element-ui](https://img.shields.io/badge/element-2.6.1-blue.svg)](http://element-cn.eleme.io/)

[中文文档](https://github.com/hirCodd/vuepress-blog/blob/master/README.md)|[English](https://github.com/hirCodd/vuepress-blog/blob/master/README_en.md)

## vuepress版本为1.0.0-alpha.42

## 欢迎使用主题[vuepress-theme-tassel](https://github.com/hirCodd/vuepress-theme-tassel)
## 快速开始
```bash
git clone https://github.com/hirCodd/vuepress-blog.git
```
## 运行项目

    yarn install //安装依赖
    yarn dev //运行

## 本地演示
> 如果看到下面这行即说明开发运行正常

    VuePress dev server listening at http://localhost:8080/

> 打开浏览器，输入localhost:8080即可访问

## demo
[demo](https://www.finen.top/)

## 开发

> 如果您想用该项目部署您自己的blog，请fork本项目，然后clone到您本地即可更改。如果您懂vue.js,那您可以自己开发一部分插件。

## 已完成功能
- [x] Archives
- [x] Tags Cloud
- [x] Simple Categories

## 评论功能

### 评论工具1 Valine.js
[Valine.js使用方法](https://valine.js.org/)

### 评论工具2 gittalk
[Gittalk](https://gitalk.github.io/)

### 评论工具3 gitment
[Gitment](https://imsun.github.io/gitment/)


    代码已经写好，在`.vuepress/theme/components/Comments.vue`中，依照网上配置可以很轻松使用Gitment或者Gittalk。



## 禁止评论
> 很多情况的页面都不想被评论，所以在每篇文档开头设置即可！如下：
```js
    ---
    title: git 进阶操作命令
    comments: true or false // true: 可以评论，false: 禁止评论
    post: true //是否作为archives或者tags的列表，true: 作为 false：禁止
    tags:
      - xxx
    date: 2019/03/21 11:24:30
    ---

    if (element.frontmatter.post == true) {} // archives
    if (element.frontmatter.post == true && element.frontmatter.tags.includes(tag)) {} // tags
``` 
    
## vuePress官网文档

[Vuepress文档](https://vuepress.docschina.org/)

## Valine.js食用方法
[Valine.js文档](https://valine.js.org/)

## 浏览器支持
Most browsers(Firefox,Chrome等)

## LiCENSE
[MIT](https://github.com/hirCodd/vuepress-blog/blob/master/LICENSE)
