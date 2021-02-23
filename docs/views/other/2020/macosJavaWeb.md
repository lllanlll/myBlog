---
title: macos搭建javaWeb
date: 2020-02-20
tags:
 - 杂项配置等   
categories: 
 - other
---

## 在macos上搭建javaweb开发环境

适用于追求一个vscode完成所有开发的同学 ～

<!-- more -->


#### 一.资源下载

**1.1jdk**

**建议下载jdk11 更稳定(LTS) https://www.oracle.com/java/technologies/javase-jdk11-downloads.html**

**若下载速度过慢 可用华为镜像:**

**https://repo.huaweicloud.com/java/jdk/**

**1.2tomcat 下载9就行**

**http://tomcat.apache.org/** 
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200220124208628.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI0MjcwMTA5,size_16,color_FFFFFF,t_70)

**1.3编辑器**

**使用Visual Studio Code**

**https://code.visualstudio.com/Download 选择对应os下载**



#### **二**.**环境配置**

- **jdk环境变量配置**

  **（1）确认本机所使用的shell是哪个：zsh/bash**
   **在命令行中输入`echo $SHELL` ，**
   **如果输出`/bin/bash`则为bash，**
   **如果输出结果为 `/bin/zsh`则为zsh。**

  **（2）根据上面不同的结果修改不同的shell配置文件**
   **若为bash，则打开 `~/.bash_profile`，若为zsh打开`~/.zshrc`。**

  **在相应的文件末尾添加以下内容，并保存，**

  ```jsx
  export JAVA_HOME=$(/usr/libexec/java_home)
  ```

  **在`~/`目录，命令行执行`source`命令，`source .bash_profile` 或 `source .zshrc`。**

  **（3）执行`java -version`出现JDK的版本信息即已配置成功。**

  **![在这里插入图片描述](https://img-blog.csdnimg.cn/2020022012430249.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI0MjcwMTA5,size_16,color_FFFFFF,t_70)**

- **vscode**插件安装及配置java开发环境

  **注:插件安装方式**

  **a.打开vscode**

  **b.点击扩展程序图标![在这里插入图片描述](https://img-blog.csdnimg.cn/20200220124317782.png)**

  **c.![\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-XhRI9jDc-1582173683689)(/Users/linjh/Library/Application Support/typora-user-images/image-20200220121652170.png)\]](https://img-blog.csdnimg.cn/20200220124344128.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI0MjcwMTA5,size_16,color_FFFFFF,t_70)**

  


  ****

- **[Language Support for Java(TM) by Red Hat](https://link.zhihu.com/?target=https%3A//marketplace.visualstudio.com/items%3FitemName%3Dredhat.java)运行 Java 代码的**

- **[Debugger for Java](https://link.zhihu.com/?target=https%3A//marketplace.visualstudio.com/items%3FitemName%3Dvscjava.vscode-java-debug)调试的，不调试可以不装**

- **[Java Test Runner](https://link.zhihu.com/?target=https%3A//marketplace.visualstudio.com/items%3FitemName%3Dvscjava.vscode-java-test)运行单元测试，不测试可以不装**

- **[Maven for Java](https://link.zhihu.com/?target=https%3A//marketplace.visualstudio.com/items%3FitemName%3Dvscjava.vscode-maven)一个标准化的 Java 工程一定不是几个文件组成，maven 是在Java环境下构建应用程序的软件 需要同时本地安装Maven**

- **Tomcat for Java 在Tomcat上运行**

  **d.安装完插件之后在打开code->首选项->设置**

  **在搜索设置栏输入json 然后点击**

  *![\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-d8w340CY-1582173683689)(/Users/linjh/Library/Application Support/typora-user-images/image-20200220122421797.png)\]*](https://img-blog.csdnimg.cn/20200220124430297.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI0MjcwMTA5,size_16,color_FFFFFF,t_70)*

  ***在settings.json中编辑***

  **加入：(注：加在最外层大括号里即可)**

```json
 "java.home": "/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home",
```

- **使用Tomcat**

  **1.创建一个jsp文件index.jsp**

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>index</title>
</head>
<body>
Hello World!<br/>
<%
out.println("你的 IP 地址 " + request.getRemoteAddr());
%>
<p>当前时间:<%= new java.util.Date().toLocaleString()%></p>
</body>
</html>
```

​	**2.点击左下角tomcat栏的➕选择tomcat文件夹路径**

*![\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-jzZX4b2R-1582173683690)(/Users/linjh/Library/Application Support/typora-user-images/image-20200220123059469.png)\]*](https://img-blog.csdnimg.cn/2020022012445447.png)*

​	**一般放在/usr/local下**

**![在这里插入图片描述](https://img-blog.csdnimg.cn/20200220124520555.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI0MjcwMTA5,size_16,color_FFFFFF,t_70)**

**3.使用command+shift+p调出vscode命令行 输入tomcat会显示**

**![\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-SIk5XSZ9-1582173683690)(/Users/linjh/Library/Application Support/typora-user-images/image-20200220123414593.png)\]](https://img-blog.csdnimg.cn/20200220124538505.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI0MjcwMTA5,size_16,color_FFFFFF,t_70)**

**点击生成War包 会发现左侧文件中多处.war文件**

**4.右键左下角添加的tomcat 点击运行**

**![\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-RyPlDgZL-1582173683691)(/Users/linjh/Library/Application Support/typora-user-images/image-20200220123542400.png)\]](https://img-blog.csdnimg.cn/20200220124554838.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI0MjcwMTA5,size_16,color_FFFFFF,t_70)**

**然后右键.war文件 选择**

**![\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-KgR6OVho-1582173683691)(/Users/linjh/Library/Application Support/typora-user-images/image-20200220123619926.png)\]](https://img-blog.csdnimg.cn/20200220124614152.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI0MjcwMTA5,size_16,color_FFFFFF,t_70)**

**会发现在tomcat栏下面出现了一个文件 右键它选择**

**![\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-mTw2CQSn-1582173683691)(/Users/linjh/Library/Application Support/typora-user-images/image-20200220123704264.png)\]](https://img-blog.csdnimg.cn/20200220124638308.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI0MjcwMTA5,size_16,color_FFFFFF,t_70)**

#### **5**.若提示404

![\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-L3Oi5WR4-1582173683692)(/Users/linjh/Library/Application Support/typora-user-images/image-20200220123804985.png)\]](https://img-blog.csdnimg.cn/20200220124653661.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI0MjcwMTA5,size_16,color_FFFFFF,t_70)

**则注意路径是否正确 将路径转至jsp文件位置即可 如下图**

![\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-HSGZ7gRT-1582173683692)(/Users/linjh/Library/Application Support/typora-user-images/image-20200220123855996.png)\]](https://img-blog.csdnimg.cn/20200220124705696.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI0MjcwMTA5,size_16,color_FFFFFF,t_70)

#### 三.开始使用~