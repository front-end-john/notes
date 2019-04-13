# 前端笔记

## 一、运算题目
[question](https://github.com/front-end-john/notes/projects/1)

## 二、nginx 配置

### example
```
http://www.ruanyifeng.com/blog/2012/11/require_js.html
http://javascript.ruanyifeng.com/tool/requirejs.html
```
### config nginx
```
vim /usr/local/etc/nginx/nginx.conf // 编辑

1.启动       
1.1进入安装路径   cd /usr/local/Cellar/nginx/1.15.11/bin   
1.2启动 sudo ./nginx      
1.3重启 sudo ./nginx -s reload       
1.4 判断配置文件是否正确 sudo ./nginx -t  
 显示下面内容代表配置正确
 nginx: the configuration file /usr/local/etc/nginx/nginx.conf syntax is ok
 nginx: configuration file /usr/local/etc/nginx/nginx.conf test is successful    
1.5 nginx停止  首先查询nginx主进程号  
    ps -ef|grep nginx                    正常停止   
    sudo kill -QUIT 主进程号   快速停止   
    sudo kill -TERM 主进程号
```
