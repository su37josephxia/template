name: Publish to Aliyun

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    # 下载代码
    - uses: actions/checkout@v2
    # 安装Nodejs
    - name: Setup Node.js 13.2.0
      uses: actions/setup-node@v1
      with:
        node-version: 13.2.0
    # 安装依赖和编译
    - name: Build project
        run: yarn && yarn build
    # 部署到阿里云
    # - name: Deploy to Aliyun
    #   uses: easingthemes/ssh-deploy@v2.1.1
    #   env:
    #     SSH_PRIVATE_KEY: ${{ secrets.ACCESS_TOKEN }}
    #     ARGS: "-avzr --delete"
    #     SOURCE: "vuepress/.vuepress/dist"
    #     REMOTE_HOST: "47.98.252.43"
    #     REMOTE_USER: "root"
    #     TARGET: "/root/lego"