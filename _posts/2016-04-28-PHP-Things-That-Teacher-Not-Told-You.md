---
layout: post
title: PHP老师没教过你的知识点
---

## 另类写法

{% highlight PHP %}
if(false == $result)		//异常写法 -> 编辑器会报告error
if($result == false)		//正常写法 -> 返回未知结果导致bug
{% endhighlight %}

## `<?php` 开始前不要有空行， `?>` 尽量省略

> 假如有一个文件在 `?>` 后有一个空行，那么你在使用 `session_start()` 等方法时，会返回一个 `headers already sent by xxx` ，这是因为 `session_start()` 
使用前不能有任何输出
> `<?php` 前的空行也是同理

## 字符串 + 数字

{% highlight PHP %}
var_dump('a' .0);		//err, 语法错误；解决方法，在 `.` 后面加上空格
{% endhighlight %}

## 字符串 和 数字 比较

{% highlight PHP %}
var_dump('abc' == 0);		//output:true
var_dump('1abc' == 0);		//output:false
{% endhighlight %}

> 如果字符串是数字开头，那么就取开头数字作为转换结果，否则为0

