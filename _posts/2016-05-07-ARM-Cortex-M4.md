---
layout: post
title: ARM Cortex M4 笔记
---

[基于ARM CortexM4 嵌入式实战开发精解](http://download.csdn.net/download/zhaoyaxuan001/9415180 "实战精解")

## 杂项

### RMII
 - Reduced Media Independant Interface,简化独立媒体接口
 - 是标准的以太网接口之一，比**MII**有更少的I/O传输

### CMSIS
 - Cortex Micro-controller Software Interface Standard
 - 一个统一的标准
 - 核内外设访问层CPAL（ARM实现） + 中间件访问层MWAL（ARM实现） + 设备外设访问层DPAL（芯片厂商实现）

## Use I2C/USART CMSIS Driver to get MPU9255 Sensor Data

MPU9255 是一个10轴的传感器，它包括3轴加速度，3轴陀螺仪，3轴磁力感应的传感器和一个能计算气压温度海拔的传感器（BMP180）

### 准备条件

* 一包stand library 的代码

### 移植过程

#### 主要就是初始化动作和IIC的读写操作

* 确保stm32f407 board 的IIC USART CLK都初始化OK

* 初始化范例代码可以查看 keil_install_dir/ARM/Pack/ARM/CMSIS/Documentation/General/html/index.html 从打开的页面中找到Driver->I2C Interface, 可看到相关示例

* 将stand library 版本的IIC读写函数进行相应的移植

