---
title: 三步十分钟搭建个人网站
date: 2020-09-29 09:34:55
tags:
  - GitHub
  - Blog
  - 域名
---

> 其实用了不止十分钟,,,😳

# 01 域名注册

```markdown
https://buy.cloud.tencent.com/domain
```

1. 登录腾讯云
1. 购买域名
1. 实名认证

   - 个人实名认证
   - 域名实名认证

`便宜的域名第一年只要几块钱哦`

# 02 GitHub 配置

1. 登录 `GitHub`
1. 创建仓库
   > 假设你的 `GitHub` 用户名为 `zhangsan` ，那么你新创建的仓库的名字应该是 `zhangsan.github.io`
1. 配置仓库 > 点击进入你的仓库，在 `Code` 那一行的最后有一个 `Settings`，点击进入
   找到 `GitHub Pages` 那一项，点击 `Change theme` 按钮，选择一个主题
   找到 `Custom domain` 那一项，填入你刚注册的[域名](不填的话可以直接访问`zhangsan.github.io`看效果 "注") 保存
1. 查看文件
   - 正常情况下仓库下面会有 3 个文件产生
     - `CNAME`
     - `_config.yml`
     - `index.md`

# 03 配置域名解析

```markdown
https://console.cloud.tencent.com/domain
```

1. 获取地址

   - ping zhangsan.github.io
   - 记录下 IP 地址
   - 添加记录
     |主机记录| 记录类型 |线路类型 |记录值 |MX |优先级 TTL (秒) |...|
     | :--------- | :--: | :--: |:--: |:--: |:--: |-----------: |
     |WWW |A |默认 |ping 拿到的 IP |- |600| ...|
     |@| A |默认 |ping 拿到的 IP |- |600 |...|

1. 等待 `600` 秒，接下来你就可以访问自己的域名网站了。当然，这只是刚开始，后面要把网站做成什么样子，还是要自己来`淦`
