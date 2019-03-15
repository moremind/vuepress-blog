---
title: qduoj自动化加题程序
comments: true
tags:
- qduoj
- python
---

## 缘由
QDUOJ的开发以及众多OJ的题库，使得我们自动化添加题目更加轻松。前提是您需要获得各OJ的测试数据。请注意本方法只用在您的机器上运行即可，不用再OJ服务器运行！

## 概况
目前主要模块分为

爬虫部分-WebSpider
* 自动化加题部分-AddProblem
* 用了爬虫scrapy,并且爬虫获取到的数据相对而言文档更容易解析与添加。如果您能够通过pandoc转文件后，将文本提取出来也可以。