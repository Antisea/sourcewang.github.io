---
layout: post
title: left 与 transform 的性能对比
---

left vs tarnsform

## 触发重新布局

* 使用left 写的整个过程中，浏览器一直在进行绘制处理。而相对而言，使用tarnsform 时，仅仅是在动画开始和结束时进行了绘制。
因此对于动画的性能上，tarnsform 更加出色

* 触发重新布局

> 我们在改变一些属性时，如果跟layout 相关，则会触发重新布局，导致渲染和绘制所需要的时间加长，因此我们在写动画时应该尽量
规避这些属性：

* width, height, margin, padding, border, display, top, right, bottom, left, positon, float, overflow 等

> 不会触发重新布局的属性有：

* transform (translate, rotate, scale), color, background 等

