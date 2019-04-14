# 前端笔记

## 一、运算题目
[question](https://github.com/front-end-john/notes/projects/1)

## 二、nginx 配置

### 前端想要了解的Nginx
```
https://juejin.im/post/5cae9de95188251ae2324ec3
```
### Vue下路由History模式打包后页面空白
```
https://juejin.im/post/5b39e8ac6fb9a00e406aa7d1
```
### use nginx
```
vim /usr/local/etc/nginx/nginx.conf // 编辑

1.启动       
1.1进入安装路径   cd /usr/local/Cellar/nginx/1.15.11/bin   
1.2启动 sudo nginx    
1.3 判断配置文件是否正确 sudo nginx -t
显示下面内容代表配置正确
     nginx: the configuration file /usr/local/etc/nginx/nginx.conf syntax is ok
     nginx: configuration file /usr/local/etc/nginx/nginx.conf test is successful 
1.4重启 sudo nginx -s reload  
1.5 快速关闭 sudo nginx -s stop
1.6 等待进程处理完成后关闭 sudo nginx -s quit
1.7 nginx停止  
    首先查询nginx主进程号  ps -ef|grep nginx                    
    正常停止    sudo kill -QUIT 主进程号   
    快速停止    sudo kill -TERM 主进程号
```
## 三、nginx服务器配置vue-router history模式
### example
[nginx服务器配置vue-router history模式（去除url中的#号）](https://juejin.im/post/5c243179e51d450cfe736fb3)

[vue router react router使用History模式的nginx配置](https://juejin.im/post/5c71004351882524c84f23a0)

### js-vue-ui项目配置history 模式

```
nginx 配置:
location / {
     #root   html;#项目路径
     root /develoment/git/code/www/js-vue-ui; #项目路径
     index  index.html index.htm;
     try_files $uri $uri/ /index.html; #匹配不到任何静态资源，跳到同一个index.html
 }

 location /code {
     alias /develoment/git/code;
     index index.html;
 }
 location /js-vue-ui {
     alias /develoment/git/code/www/js-vue-ui;
     index  index.html index.htm;
     try_files $uri $uri/ /index.html; #匹配到js-vue-ui，跳到index.html
 }
```

```
router.js 配置:
  base: '/js-vue-ui',  // 浏览器URL 基础路径
  mode: 'history'
```

``` 
vue.config.js 配置：
  publicPath: './', // css js img 使用相对路径
```