---
title: Java百度翻译API
copyright: true
date: 2018-03-28 22:57:32
comments: true
post: true
categories:
- Java
tags:
- Java API
---

## 百度翻译工具包的下载

> **以下是提供两个百度翻译翻译的工具包下载地址：**

> 1.百度翻译开发者平台：

[百度开发者平台](http://appcdn.fanyi.baidu.com/api/demo/java.zip)

> 2.csdn的百度翻译工具包：


[百度翻译工具包](http://download.csdn.net/download/hookjony/9957737)


> 备注：经过本人测试，百度翻译官网下载下来的可能有问题——MD5 类有错误，所以大家可以到本人上传的第2个资源链接中下载需要使用的工具类。因为CSDN不在具有免费的资源下载，所以大家还是需要给我贡献小小的1积分，再此谢谢大家。

----------

## 百度翻译API——新建项目以及各个包文件的导入
### gson 包的下载

> gson 包的下载：

[gson下载](https://download.csdn.net/download/hookjony/9957777)

## 新建项目并且导入百度翻译工具包

![新建java项目](https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/images/20170830200128921.png)

> 新建完成之后可以直接下载下来的百度翻译工具包下的com文件夹导入到项目中（或者将com文件夹拖入到src目录下），本文导入项目再次不在一一赘述，因为更加方便打方式是可以拖入。


----------


### 导入gson包以及json包
> 在项目下新建文件夹libs，并且将gson包以及json包导入libs目录下，如果需要看源码，请导入各自的源码即可。（笔者建议大家导入源码，方便大家学习）

>导入后的目录结构如下
![项目目录结构](https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/images/20170831112115079.png)


----------


### 编写Main函数
```java
package com.baidu.translate.test;

import java.util.Scanner;
import com.baidu.translate.demo.TransApi;
import com.google.gson.Gson;

public class Main {

	private static final String APP_ID = ""; // your ID
	private static final String SECURITY_KEY = "";  //your key

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		TransApi api = new TransApi(APP_ID, SECURITY_KEY);

		String query = "";
		
		//通过Scanner工具类完成用户输入
		System.out.println("请输入需要翻译的语句(all->English):");
		Scanner scanner = new Scanner(System.in);
		query = scanner.nextLine();
		
		//通过api将语句转化为json 数据
		String json = api.getTransResult(query, "auto", "en");
		
		//通过gson解析
		Gson gson = new Gson();
		TranslateData data = gson.fromJson(json,TranslateData.class);
		String dst = data.getTrans_result().get(0).getDst();
		
		System.out.println(dst);
	}
}
```
> **上述函数的APP_ID 以及SECURITY_KEY 需要到百度开发者平台申请**

> **百度翻译开发者平台：http://api.fanyi.baidu.com/api/trans/product/index**


----------


## 解析Json数据的类
### TranslateData 类
```java
package com.baidu.translate.test;

import java.util.List;

public class TranslateData {
	String from;
	String to;
	List <TranslateResult> trans_result;
	
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public List<TranslateResult> getTrans_result() {
		return trans_result;
	}
	public void setTrans_result(List<TranslateResult> trans_result) {
		this.trans_result = trans_result;
	}
	
	@Override
	public String toString() {
		return "TranslateData [from=" + from + ", to=" + to + ", trans_result=" + trans_result + "]";
	}
	
}

```
### TranslateResult类

```java
package com.baidu.translate.test;

public class TranslateResult {
	String src;
	String dst;
	
	public String getSrc() {
		return src;
	}
	public void setSrc(String src) {
		this.src = src;
	}
	public String getDst() {
		return dst;
	}
	public void setDst(String dst) {
		this.dst = dst;
	}
	@Override
	public String toString() {
		return "TransalateResult [src=" + src + ", dst=" + dst + "]";
	}
}

```
