# sourcewang.github.io
隐约雷鸣，阴霾天空，但盼天有雨，能留你在此；隐约雷鸣，阴霾天空，即使天无雨，我亦留此处

npm install hexo-cli -g

npm install hexo-deployer-git --save

hexo g

hexo s

hexo d

git pull origin master --allow-unrelated-histories


git clone https://github.com/litten/hexo-theme-yilia.git themes/yilia



deploy:
  type: git
  repository: git@github.com:sourcewang/sourcewang.github.io.git
  branch: source
  
  
