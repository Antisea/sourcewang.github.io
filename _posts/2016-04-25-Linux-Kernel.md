---
layout: post
title: 关于Linux的一些知识点记录
---

linux kernel arch -- 持续更新

## Sendfile

### Sendfile机制：

> 用户将请求发给内核，内核根据用户的请求调用相应的用户进程，进程在处理时需要资源，此时再把请求发给内核（进程没有直接IO的能力），
由内核加载数据。内核查找到数据之后，会把数据复制给用户进程，由用户进程对数据进行封装，之后交给内核，内核在进行tcp/ip 首部的
封装，最后在发送给客户端。这个功能用户进程只是发生了一个封装报文的过程，却要绕一大圈。

> 因此ngix 引入了sendfile 机制，使得内核在接收到数据之后，不再依靠用户进程给予封装，而是自己查找自己封装，减少了一个很长一段
时间的浪费，这是一个提升性能的核心点。

> 简单来说，就是资源的处理，直接通过内核层进行数据传递，避免了数据传递到应用层，应用层再传递到内核层的开销。

> 目前高并发的处理一般都是采用sendfile 模式，通过直接操作内核层数据减少应用于内核层数据传递

## buffers与cached的异同

* 在Linux操作系统中，当应用程序需要读取文件中的数据时，操作系统先分配一些内存，将数据从磁盘读入到这些内存中，然后再将数据分发给应用程序；当需要往文件中写数据时，操作系统先分配内存接收用户数据，然后再将数据从内存写到磁盘上。然而，如果有大量数据需要从磁盘读取到内存或者由内存写入磁盘时，系统的读写性能就变得非常低下，因为无论是从磁盘读数据，还是写数据到磁盘，都是一个很消耗时间和资源的过程，在这种情况下，Linux引入了buffers和cached机制。

* buffers与cached都是**内存操作**，用来保存系统曾经打开过的文件以及文件属性信息，这样当操作系统需要读取某些文件时，会首先在buffers与cached内存区查找，如果找到，直接读出传送给应用程序，如果没有找到需要数据，才从磁盘读取，这就是操作系统的缓存机制，通过缓存，大大提高了操作系统的性能。但buffers与cached缓冲的内容却是不同的。

* **buffers是用来缓冲块设备**的，它只记录文件系统的元数据（metadata）以及 tracking in-flight pages，而**cached是用来给文件做缓冲**。更通俗一点说：buffers主要用来存放目录里面有什么内容，文件的属性以及权限等等。而cached直接用来记忆我们打开过的文件和程序。

## MDK3D

`setenv sourcewang 'tftp 41000000 sourcewang/uImage;tftp 42000000 sourcewang/uInitrd;tftp 43000000 sourcewang/board.dtb;bootm 41000000 42000000 43000000'`

`run sourcewang`

`source build/envsetup.sh`

`make linux` -> gen uImage and l602.dtb

`make buildroot` -> uInitrd(file system)

`ifconfig eth0 10.193.208.220 netmask 255.255.255.0`

`route add default gw 10.193.208.1`

`mount -f nfs 10.193.208.131:/tftpboot/sourcewang /mnt -o nolock`


