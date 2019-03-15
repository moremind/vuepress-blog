---
title: vue
comments: true
---
## Vuepress网站
[vuepress](https://vuepress.vuejs.org/zh/)

## 开始搭建vuepress-blog

```sh
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .
```
接着，在 `package.json` 里加一些脚本:

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

    yarn docs:dev # 或者：npm run docs:dev


当然这对于大多数人来说都是很简单的问题，自vuepress公开以后，有太多筒子想要vuepress添加评论系统，可是目测大佬们并没有这个想法，不过对于vue.js生态环境而言，给我们很多自己动手的可能。下面请食用我的开发方法。
## 选择一个第三方评论系统
1. gitment
2. 来必立
3. Valine
前两者都是有厚实的长城，所以我建议各位就别想了，虽然有搭建过的blog。如果有想了解的请看[VuePress 集成第三方评论模块](https://hughfenghen.github.io/fe/vuepress-gitment.html)。

我选择了Valine，请大家看。
![comment.png][1]

> 看到上面是不是觉得挺好看...接下来开发
## Valine食用方法
[Valine.js食用方法](https://valine.js.org/)

## 开发代码
> 在Page.vue中写入以下代码：

```js
 mounted: function(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: '',// your appId
      appKey: '', // your appKey
      notify:false, 
      verify:false, 
      avatar:'mm', 
      placeholder: 'just go go' 
    });
  },
```
> 加入以上代码即可完成真个评论系统，然后 `yarn dev`即可看到效果！

## 我的开源项目地址
[vuepress-blog](https://github.com/hirCodd/vuepress-blog)  欢迎star！mmm

[我的blog](https://www.finen.tech/)

  [1]: https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/images/comment.png