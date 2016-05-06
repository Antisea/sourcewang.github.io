---
layout: post
title: php + web site
---

模块化一个web网站

## 判断脚本是运行在真实的服务器上还是测试环境的服务器上

{% highlight php %}

$host = substr($_SERVER['HTTP_HOST'], 0, 5);		//检查前5个字符

if (in_arra($host, array('local', '127.0', '192.1'))) {
	$local = true;	
} else {
	$local = false;
}

{% endhighlight %}

## 善用switch

`$p = $_GET['p'];`  
`switch($p){}`	

## 搜索项

**用户在提交表单的时候来到某个页面，其搜索项会存在地址URL中，在重定向时，这些项也应该被传递**

## mod_rewrite 优化SEO

mod_rewrite(apache) 是一种用于给服务器发送指令的工具，当用户访问一个链接URL的时候，服务器会提供另外的资源。

mod_rewrite 可以使用正则表达式

**mod_rewrite 实现方式**
1. 修改全局配置文件httpd.conf（通常优先考虑）
2. 修改`.htaccess`（发音：H-T access）文件，用来规范当前目录和子目录内apache如何运行
3. TBD（权限问题）

**PCRE：perl-compatible regular expressions**

## 浏览器缓存

利用 PHP 的header() 函数可以调整缓存--包括we浏览器缓存和代理服务器缓存
1. Last-Modified --> 最后修改时间
3. Expires --> 过期时间
4. Pragma --> 编译提示
2. Cache-Control --> 缓存控制

> 如果缓存系统发现Last-Modified 的值比页面缓存版本的时间更接近当前时间，他就知道应该使用来自于服务器的更新页面版本

> Expires 用来表面缓存的版本应该过期而不能使用
> 设置Expires 为一个以前的时间，就会强制使用服务器上的页面。
> EX: `header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");`

> Pragma 声明了页面数据应该被如何处理。
>> 可以避免对页面进行缓存。EX：`header("Pragma: no-cache");`

Cache-Control:

  |指令				|含义														|
  |-----------------|-----------------------------------------------------------|
  |public	        |可以在任何地方缓存											|
  |-----------------|-----------------------------------------------------------|
  |private	        |只能被浏览器缓存											|
  |-----------------|-----------------------------------------------------------|
  |no-cache	        |不能再任何地方缓存											|
  |-----------------|-----------------------------------------------------------|
  |must-revalidate	|缓存必须检查更新版本										|
  |-----------------|-----------------------------------------------------------|
  |proxy-revalidate	|代理缓存必须检查更新版本									|
  |-----------------|-----------------------------------------------------------|
  |max-age			|内容能够被缓存的时间（s）									|
  |-----------------|-----------------------------------------------------------|
  |s-maxage			|覆盖共享缓存的max-age值设置								|

***
***

## 创建构造函数
1. **其名称永远是 `__construct()`**
2. **当创建对象时，他会被立即调用**
3. **它不能有返回语句（return）**

{% highlight php %}

class ClassName {
	function __construct() {
		//function code
		}
	}

{% endhighlight %}

## 创建析构函数
1. **析构函数不能接受任何参数**
2. **unset($obj); 的时候会被调用**

{% highlight php %}

class ClassName {
		function __destruct() {
				//function code
			}
	}

{% endhighlight %}

## 其他

> 很多人不知道www.example.com/dir 实际上会被重定向到 www.example.com/dir/
而fopen()函数不支持重定向，必须在文件夹后面加一个斜线 / 。

> CSV : comma separated value

> 如果需要获得某个ip地址对应的域名，可以使用 `gethostbyaddr()` 函数

* php脚本需要与客户端沟通内容输出的格式
+ 需要返回普通文本类型的数据 `header('Content-Type: text/plain');`
**要确保在输出任何内容之前调用header() 函数**
+ 需要输出csv 格式的数据 `header('Content-Type: text/csv');`
+ 更复杂的数据如xml，json，可以用 `header('Content-Type: text/xml');` 和 `header('Content-Type: text/json');`
> 让php输出json格式的数据，我们需要调用json_encode() 函数

<h4 style="color:red;">PHP中，创建子类的对象时，父类的构造函数不会被自动调用</h4>

**类里的大部分方法都可以重写。唯一的例外就是被定义了final的方法：**  
`finaml function myFunc() {...}`  

> 定义为final的方法不能被任何子类所重写
类也可以声明为final，这意味着它不能被扩展

## 范围解析操作符 ::

{% highlight php %}

ClassName::methodName();
ClassName::propertyName();

{% endhighlight %}

1. 在使用类的时候，父类和子类具有相同的名称的属性和方法时，可以避免混淆
2. 在类外使用时，在没有创建对象的情况下使用该操作符访问类的成员
 - 类外时指定类名
 - 类中使用特点关键字 self
3. 要引用父类中的一个成员，可以使用关键字parent和范围解析操作符

{% highlight php %}

class SomeClass{
		function __construct() {
				self::doThis();			//会触发当前类的doThis()方法
			}

		protected function doThis() {
				echo 'done!';
			}
	}

class SomeOtherClass extends SomeClass {
		function __construct() {
				parent::doThis();
			}
	}

{% endhighlight %}


