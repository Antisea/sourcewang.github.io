---
layout: post
title: lighttpd 支持 pcre, zlib, openssl
---

Porting lighttpd server to arm board

## Lighttpd

Lighttpd version: 1.4.39   
GCC tool chain: arm-none-linux-gnueabi

在此之前，你必须首先交叉编译好pcre, zlib, openssl

### Configuration

* configure

{% highlight shell %}

#!/bin/sh
CFLAGS="-I/home/sourcewang/opt/pcre-8.36-arm/include -I/home/sourcewang/opt/zlib-1.2.8-arm/include" LDFLAGS="-L/home/sourcewang/opt/pcre-8.36-arm/lib -L/home/sourcewang/opt/zlib-1.2.8-arm/lib" ./configure --prefix=/home/sourcewang/opt/lighttpd-1.4.39-arm --host=arm-none-linux-gnueabi --without-bzip2 --with-openssl --with-openssl-includes=/home/sourcewang/opt/openssl-1.0.2f-arm/include --with-openssl-libs=/home/sourcewang/opt/openssl-1.0.2f-arm/lib

{% endhighlight %}

* make

* make install

### lighttpd.conf

1. check all kinds of dirs which contains of logdir, serverrootdir, confdir and so on
2. check username
 * username 默认为www-data 或nobody，将其修改成你当前登录的用户名或者是超级用户（必须是存在的用户）或者设为空
 * ipv6 disable 或者注释掉 / 若出现sendfile 错误，找到配置文件里面那一行，注释掉

### Enable cgi and fastcgi and https

由于lighttpd.conf include 了module.conf，请自行决定以下的修改是在哪个地方

##### CGI enable

{% highlight java %}

server.modules = (
	"mod_access",
	"mod_cgi",  //enable cgi module
	...
)

cgi.assign = (
	".cgi" => ""   //指定以.cgi 为后缀的文件用什么方式执行，空表示自动寻找能执行.cgi 文件的程式来执行
)

{% endhighlight %}

##### FASTCGI enable to run with php

修改fastcgi.conf

{% highlight java %}

server.modules += ("mod_fastcgi")

fastcgi.server = ( ".php" => 
	((
		"socket" => "/usr/bin/php.socket",     //这个php.socket是凭空生成的，只需要给他指定一个可存放的路径即可
		"bin-path" => "/usr/bin/php-cgi",      //一定要指到安装好的php路径下的php-cgi可执行档
		"bin-environment" => (
			"php-FCGI_CHILDREN" => "16",
			"php-FCG_MAX_REQUESTS" => "10000"
		),
		"min-procs" => 1,
		"max-procs" => 1,
		"idle-timeout" => 20
	))
)

{% endhighlight %}

##### OpenSSL support

* generate server.pem     自认证证书

`openssl req -new -x509 -keyout server.pem -out server.pem -days 3650 -nodes`

> [详细信息请查询lighttpd 官网](http://www.lighttpd.net "lighttpd 官网")

* modify lighttpd.conf

{% highlight java %}

$SERVER["socket"] == ":443" {
	ssl.engine = "enable"
	ssl.pemfile = "/your/server.pem/path"
	}

{% endhighlight %}

### start lighttpd server

`./sbin/lighttpd -f conf/lighttpd.conf`

### test cgi and php

##### cgi

1. gcc helloworld.c -o helloworld.cgi
2. cp helloworld.cgi to your server_root_dir_cgi-bin
3. access http(s)://your-server-ip/cgi-bin/helloworld.cgi

##### php

1. use simple function `phpinfo();` to check if php works well
2. access http(s)://your-server-ip/cgi-bin/phpinfo.php

### TBD

