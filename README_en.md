[![vuepress](https://img.shields.io/badge/vuepress-1.0.0--alpha.42-blue.svg)](https://v1.vuepress.vuejs.org/)
[![valine](https://img.shields.io/badge/valine-1.3.4-blue.svg)](https://valine.js.org/)
[![element-ui](https://img.shields.io/badge/element-2.6.1-blue.svg)](http://element-cn.eleme.io/)

[中文文档](https://github.com/hirCodd/vuepress-blog/blob/master/README.md)|[English](https://github.com/hirCodd/vuepress-blog/blob/master/README_en.md)

## vuepress: 1.0.0-alpha.42

## Quick Start
```bash
git clone https://github.com/hirCodd/vuepress-blog.git
```
## Local Development

    yarn install // install lib
    yarn dev // run dev

## Local Demo
> If you see next code:

    VuePress dev server listening at http://localhost:8080/

> Open Browser, get this addrss: localhost:8080

## Remote Demo
[demo](https://www.finen.top/)

## Develop

> If you want to develop this blog, you can fork or clone this project. 

## Function
- [x] Archives
- [x] Tags Cloud
- [x] Simple Categories

## Comments

### Comment1: Valine.js
[Valine.js](https://valine.js.org/)

### Comment2: gittalk
[Gittalk](https://gitalk.github.io/)

### Comment3 gitment
[Gitment](https://imsun.github.io/gitment/)


    this code on the directory: `.vuepress/theme/components/Comments.vue`，yan can use gittalk or gitment easily.



## Forbid Comment
> on the xx.md, you can config these properties
```js
    ---
    title: git
    comments: true or false 
    post: true //archives or tags: true
    tags:
      - xxx
    date: 2019/03/21 11:24:30
    ---

    if (element.frontmatter.post == true) {} // archives
    if (element.frontmatter.post == true && element.frontmatter.tags.includes(tag)) {} // tags
``` 
    
## vuePress-Document

[Vuepress](https://vuepress.docschina.org/)

## Valine.js-Document
[Valine.js](https://valine.js.org/)

## Browser Support
Most browsers(Firefox,Chrome...)

## LiCENSE
[MIT](https://github.com/hirCodd/vuepress-blog/blob/master/LICENSE)