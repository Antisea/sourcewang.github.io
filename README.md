# 用法：

master 分支是网页源码
source 分支是你看到的网页

## 下载

`git clone -b master git@github.com:sourcewang/sourcewang.github.io.git`

## 安装

`npm install hexo-cli -g`

`npm install hexo-deployer-git --save`

## 测试 & 部署

`hexo g`

`hexo s`

`hexo d`

- _config.yml

```
deploy:
  type: git
  repository: git@github.com:sourcewang/sourcewang.github.io.git
  branch: source
```  

## 其他

~~git pull origin master --allow-unrelated-histories~~

~~git clone https://github.com/litten/hexo-theme-yilia.git themes/yilia~~

# 主题使用参见：

`https://github.com/ShanaMaid/hexo-theme-shana`

  
