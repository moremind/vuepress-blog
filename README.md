## 运行项目

    yarn install //安装依赖
    yarn dev //运行

## 本地演示
> 如果看到下面这行即说明开发运行正常

    VuePress dev server listening at http://localhost:8080/

> 打开浏览器，输入localhost:8080即可访问

## demo
[demo](https://www.finen.tech/)

## 广告？
> 因为使用了vuepress-theme-vue主题，所以需要删除一部分代码即可正常。在node_modules下搜索vuepress-theme-vue在Layout.vue中删除以下代码即可

    <CarbonAds slot="sidebar-top"/>
    <BuySellAds slot="page-bottom"/>

## 开发

> 如果您想用该项目部署您自己的blog，请fork本项目，然后clone到您本地即可更改。如果您懂vue.js,那您可以自己开发一部分插件。

## 评论功能
[Valine.js使用方法](https://valine.js.org/)


## 官网文档

[Vuepress文档](https://vuepress.docschina.org/)

## Valine.js食用方法
[Valine.js文档](https://valine.js.org/)

## 浏览器支持
Most browsers(Firefox,Chrome等) 和 Internet Explorer 11+.

## LiCENSE
MIT