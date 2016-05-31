---
layout: post
title: Cross Compiler
toolchain: arm-none-linux-gnueabi-
---
[TOC]

# Cross Compiler For ARM

# Lighttpd 

{% highlight SHELL %}

#!/bin/sh
CFLAGS="-I/home/sourcewang/opt/pcre-8.36-arm/include -I/home/sourcewang/opt/zlib-1.2.8-arm/include" LDFLAGS="-L/home/sourcewang/opt/pcre-8.36-arm/lib -L/home/sourcewang/opt/zlib-1.2.8-arm/lib" ./configure --prefix=/home/sourcewang/opt/lighttpd-1.4.39-arm --host=arm-none-linux-gnueabi --without-bzip2 --with-openssl --with-openssl-includes=/home/sourcewang/opt/openssl-1.0.2f-arm/include --with-openssl-libs=/home/sourcewang/opt/openssl-1.0.2f-arm/lib

{% endhighlight %}

# OpenSSL

{% highlight SHELL %}

#!/bin/sh
CC=arm-none-linux-gnueabi-gcc ./Configure linux-elf --openssldir=/home/sourcewang/opt/openssl-1.0.2f-arm/openssl no-asm shared --prefix=/home/sourcewang/opt/openssl-1.0.2f-arm

{% endhighlight %}

# PHP

{% highlight SHELL %}

#!/bin/sh
./configure --prefix=/tftpboot/sourcewang/opt/php-5.6.18 --with-config-file-path=/tftpboot/sourcewang/opt/php-5.6.18/ --enable-soap --enable-sysvmsg --with-openssl-dir=/tftpboot/sourcewang/opt/openssl-1.0.2f/ --enable-ftp --enable-sockets --with-pcre-dir

{% endhighlight %}

# cURL

{% highlight SHELL %}

#!/bin/sh
LDFLAGS=-R/home/sourcewang/opt/openssl-1.0.2f-arm/lib ./configure --prefix=/home/sourcewang/opt/curl-7.20.0-arm --host=arm-none-linux-gnueabi --with-ssl=/home/sourcewang/opt/openssl-1.0.2f-arm

{% endhighlight %}

# WolfSSL

# PCRE

# ZLIB

# Wpa_supplicant


# Samba

{% highlight SHELL %}
make && make install
{% endhighlight %}


