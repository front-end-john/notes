# 前端笔记
[包的描述](https://github.com/front-end-john/notes/blob/master/packages-desc.md)

[express 目录结构介绍](https://github.com/front-end-john/notes/blob/master/express-dirname.md)

[react学习资料](https://github.com/front-end-john/notes/blob/master/react.md)

[nodejs学习笔记+项目笔记](https://github.com/front-end-john/notes/blob/master/nodejs.md)

[gulp 配置部署代码到服务器](https://github.com/front-end-john/notes/blob/master/gulp-config.md)

[gitignore配置以及不起作用解决办法](https://github.com/front-end-john/notes/blob/master/gitignore.md)

[微信相关](https://github.com/front-end-john/notes/blob/master/wechat.md)

[Vue学习资料](https://github.com/front-end-john/notes/blob/master/vue.md)
## 一、运算题目
[question](https://github.com/front-end-john/notes/projects/1)

[前端笔试测试题](https://github.com/front-end-john/notes/blob/master/test.md)

## 二、git命令和nginx 配置

### gradle配置环境变量

``` 
/usr/local/Cellar/gradle/4.7

GRADLE_HOME=/usr/local/Cellar/gradle/4.7
export GRADLE_HOME
export PATH=$PATH:$GRADLE_HOME/bin

```
### webstorm 格式化代码及常用快捷键

``` 
windows 下 webstorm 格式化代码的快键键 Ctrl+Alt+l
 
mac 下 webstorm 格式化代码的快捷键 Option+Command+l

```

### git学习笔记
``` 
安装和配置git:
参考:http://jingyan.baidu.com/article/a65957f4e91ccf24e77f9b11.html

$ cat id_rsa //查看公钥，然后复制配置到自己的github帐号上
$ git clone git@github.com:himiten/node_gw.git //克隆项目
常用 Git 命令清单
http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html

git之切换分支

查看本地分支    git branch        
查看远程分支    git branch -r     
切换分支           git checkout -b  dev origin/dev
查看所属分支    git branch -a

git checkout master

git强制提交
git add .
git commit -m "your comment"
git push -u origin master -f
```

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
    浏览器访问URL： 
    http://localhost:443 或 http://localhost:443/js-vue-ui
```

```
nginx 配置，解决访问子路由页面匹配不到目录问题，访问／则跳到同一个index.html：
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
## 四、tomcat端口占用
```
John-Hu-:WebContent root# ps aux|grep tomcat
root              2041   0.0  0.0  2432804    796 s000  S+   11:35上午   0:00.00 grep tomcat
john-hu           1920   0.0  3.0  8400784 502552   ??  S    11:20上午   0:24.05 
John-Hu:WebContent root# kill -9 1920
```
## 五、scp命令上传代码到服务器
```
本地代码上传到dev服务器
tar -zcvf  home.tar.gz home   			打包压缩pick_fee/home

代码部署到Dev服务器
scp home.tar.gz ubuntu@192.168.0.1:/home/ubuntu/pick_fee/public    		上传到dev环境
在public下解压:  tar -zxvf home.tar.gz   

代码部署到生产服务器
ssh ubuntu@192.168.1.1
scp home.tar.gz ubuntu@192.168.1.1
```
## 六、macOS系统相关操作命令

``` 
复制文件夹内所有文件到另一个文件夹
    cp -rf /home/user1/* /root/temp/
    将 /home/user1目录下的所有东西拷到/root/temp/下而不拷贝user1目录本身。
    即格式为：cp -rf 原路径/ 目的路径/
```

```
修改文件属主
http://jingyan.baidu.com/article/b87fe19e9ae09b5219356848.html

sh-3.2# ls -l
total 8
-rw-r--r--   1 root     wheel  423  2 19 15:43 .gitignore
drwxr-xr-x  17 root     wheel  578  2 19 17:18 React-SPA
drwxr-xr-x  11 root     wheel  374  2 19 20:19 SmallApp
drwxrwxrwx+ 11 root     wheel  374  3  7 17:44 ccb
drwxr-xr-x  21 root     wheel  714  3  3 10:36 duck-js
drwxr-xr-x   8 john-hu  wheel  272  3  7 17:17 skywalker
-rw-r--r--   1 root     wheel    0  3  7 17:48 test

sh-3.2# chown john-hu ccb
sh-3.2# ls -l
total 8
-rw-r--r--   1 root     wheel  423  2 19 15:43 .gitignore
drwxr-xr-x  17 root     wheel  578  2 19 17:18 React-SPA
drwxr-xr-x  11 root     wheel  374  2 19 20:19 SmallApp
drwxrwxrwx+ 11 john-hu  wheel  374  3  7 17:44 ccb
drwxr-xr-x  21 root     wheel  714  3  3 10:36 duck-js
drwxr-xr-x   8 john-hu  wheel  272  3  7 17:17 skywalker
-rw-r--r--   1 root     wheel    0  3  7 17:48 test

sh-3.2# chown -R john-hu ccb  //递归更改目录下所有文件的用户属性
```
## 七、mac终端命令大全介绍
```
OSX 的文件系统 
OSX 采用的Unix文件系统，所有文件都挂在跟目录 / 下面，所以不在要有Windows 下的盘符概念。 
你在桌面上看到的硬盘都挂在 /Volumes 下。 
比如接上个叫做 USBHD的移动硬盘，桌面上会显示出一个硬盘图标，它实际在哪里呢？ 
在终端里执行 ls /Volumes/USBHD, 看看显示出的是不是这个移动硬盘的内容。 
根目录位置是 / 核心 Mach_kernel 就在这里， 
驱动所在位置 /Systme/Library/Extensions 
用户文件夹位置 /User/用户名 
桌面的位置 /User/用户名/Desktop 
文件通配符为星号 * 
注意：在 Unix系统中是区别大小写字符的，A.txt 不等于 a.txt。 
根目录标志 / 不是可有可无，cd /System 表示转到跟目录下的System中，而cd System 表示转到当前目录下的 System中 
—————————————————————————————————————————————— 
如何进入命令行操作模式 
再图形界面下，用finder 打开 应用程序 》实用程序》终端 
如果连图形界面都进不去了（比如安错了显示驱动），开机时按 F8，用－s参数启动，然后输入命令 mount -uw / 

获得权限 
为了防止误操作破坏系统，再用户状态下时没有权限操作系统重要文件的，所以先要取得root权限 
sudo －s 
然后输入密码，输入密码时没有任何回显，连星号都没有，只管输完回车就行了。 
—————————————————————————————————————————————— 
基本命令 
列出文件 
ls 参数 目录名 
例: 想看看跟目录下有什么， 
ls / 
想看看驱动目录下有什么， 
ls /System/Library/Extensions 
参数 -w 显示中文，-l 详细信息， -a 包括隐藏文件 
转换目录 
cd 
例：想到驱动目录下溜达一圈 
cd /System/Library/Extensions 
建立新目录 
mkdir 目录名 
例：在驱动目录下建一个备份目录 backup 
mkdir /System/Library/Extensions/backup 
在桌面上建一个备份目录 backup 
mkdir /User/用户名/Desktop/backup 
拷贝文件 
cp 参数 源文件 目标文件 
例：想把桌面的Natit.kext 拷贝到驱动目录中 
cp -R /User/用户名/Desktop/Natit.kext /System/Library/Extensions 
参数R表示对目录进行递归操作，kext在图形界面下看起来是个文件，实际上是个文件夹。 
把驱动目录下的所有文件备份到桌面backup 
cp -R /System/Library/Extensions/* /User/用户名/Desktop/backup 
删除文件 
rm 参数 文件 
例：想删除驱动的缓存 
rm -rf /System/Library/Extensions.kextcache 
rm -rf /System/Library/Extensions.mkext 
参数－rf 表示递归和强制，千万要小心使用，如果执行了 rm -rf / 你的系统就全没了 

移动文件 
mv 文件 
例：想把AppleHDA.Kext 移到桌面 
mv /System/Library/Extensions/AppleHDA.kext /User/用户名/Desktop 
想把AppleHDA.Kext 移到备份目录中 
mv /System/Library/Extensions/AppleHDA.kext /System/Library/Extensions/backup 
更改文件权限 
chmod 参数 权限 文件 
例：把驱动目录下所有文件设定到root读写，其他用户只读 
chmod -R 755 /System/Library/Extensions 
参数R 表示递归，755表示各用户的权限 
更改文件属主 
chown 参数 用户:组 文件 
例：把驱动目录下的所有文件属主改成根用户 
chown -R root:wheel /System/Library/Extensions 
参数R 表示递归操作 
修复整个系统中文件的权限 
diskutil repairpermissions / 
严格的说这不是一个unix 命令，而是osx一个软件，记得修改或添加的驱动就执行一次。 
文本编辑 
nano 文件名 
例：编辑natit Info.plist 
nano /System/Library/Extensions/Natit.kext/Info.plist 
编辑完成后 用 Ctrl ＋O 存盘，Ctrl＋X 退出 
另一个文本编辑软件是 vi，操作有些古怪，熟了是非常好用的，而且在所有类Unix系统中都它，走遍天下都不怕了。 
运行脚本命令 
sh 脚本文件名 
例 修改驱动后所有需要的操作存成一个脚本，以后修改了驱动后只要运行一次这个脚本就可以了，方便吧 
1. 终端中运行nano /clean 
2. 把下列代码粘贴到 nano 中 
rm -rf /System/Library/Extensions.kextcache 
rm -rf /System/Library/Extensions.mkext 
chown -R root:wheel /System/Library/Extensions 
chmod -R 755 /System/Library/Extensions 
diskutil repairpermissions / 
kextcache -k /System/Library/Extensions/ 
3. Ctrl ＋O 存盘，Ctrl＋X 退出 
4. 以后只要动了驱动，就在终端中运行一次 sh /clean 
———————————————————————————————————— 
小技巧 
用 Tab 键自动补齐命令 
比如想到 /System 目录中去，输入 cd /Sy 然后按一下Tab 键，命令就会自动补齐成 cd /System 
操作带名字中带有空格的文件和目录 
空格在命令中写成 空格， 比如要进入 My Documents，命令为 cd My Documents 
查看命令的详细帮助 
man 命令名 
比如要看看 ls 命令的详细用法，执行 man ls 
———————————————————————————————————— 
典型操作流程 
(假设已经制作好清理脚本，记得每次操作前 sudo -s 获得系统权限) 
假设下载了一个显卡驱动 Natit.zip，在桌面解压得到了一个Natit.kext，该怎么做呢？ 
为了保险起见，先把所有驱动备份了再说 
mkdir /User/用户名/Desktop/backup 在桌面上建立备份文件夹 
cp -R /System/Library/Extensions/* /User/用户名/Desktop/backup 备份驱动文件 
现在可以安心安装了 
cp -R /User/用户名/Desktop/Natit.kext /System/Library/Extensions 把它 拷贝到系统驱动目录位置 
sh /clean 执行清理脚本，操作完成 
重新开机失败，进不去桌面了，发现不应该安这个驱动，怎么恢复呢？ 
开机按F8，用 -s 参数启动 
执行 mount -uw / 
rm -rf /User/用户名/Desktop/Natit.kext 删除这个驱动 
sh /clean 执行清理脚本，操作完成 
重启，回到原先状态了，不死心啊，没有特效怎么行呢，又听说需要修改 Natit的 Info. plist 文件才行，好，再来 
cp -R /User/用户名/Desktop/Natit.kext /System/Library/Extensions 把它 拷贝到系统驱动目录位置 
nano /System/Library/Extensions/Natit.kext/Info.plist 
编辑完成后 用 Ctrl ＋O 存盘，Ctrl＋X 退出 
sh /clean 执行清理脚本，操作完成 
重启，这回对了，显卡特效都有了，该弄声卡了，天知道会出什么事，得把现有成果保护好。 
mkdir /User/用户名/Desktop/gooddrivers 专为有效驱动建个目录 
cp -R /System/Library/Extensions/Natit.kext /User/用户名/Desktop/gooddrivers 备份 
这个声卡要求把 AppleHDA.kext 删除和编辑 AppleAzaliaAudio.kext中的Info.plist 文件，谁知道以后会不会还用AppleHDA呢，不如暂时禁用吧。 
mkdir /System/Library/Extensions/disabled 建立个禁用目录 
mv /System/Library/Extensions/AppleHDA.kext /System/Library/Extensions/disabled 移动过去 
nano /System/Library/Extensions/Natit.kext/AppleAzaliaAudio.kext/Info.plist 
编辑完成后 用 Ctrl ＋O 存盘，Ctrl＋X 退出 
sh /clean 执行清理脚本，操作完成 
成功了，也把修改好的驱动备份一下把 
复制内容到剪贴板代码: 

以下是unix的命令行,供参考 
目录操作 
命令名 
功能描述 
使用举例 
mkdir 
创建一个目录 
mkdir dirname 
rmdir 
删除一个目录 
rmdir dirname 
mvdir 
移动或重命名一个目录 
mvdir dir1 dir2 
cd 
改变当前目录 
cd dirname 
pwd 
显示当前目录的路径名 
pwd 
ls 
显示当前目录的内容 
ls -la 
dircmp 
比较两个目录的内容 
dircmp dir1 dir2 
文件操作 
命令名 
功能描述 
使用举例 
cat 
显示或连接文件 
cat filename 
pg 
分页格式化显示文件内容 
pg filename 
more 
分屏显示文件内容 
more filename 
od 
显示非文本文件的内容 
od -c filename 
cp 
复制文件或目录 
cp file1 file2 
rm 
删除文件或目录 
rm filename 
mv 
改变文件名或所在目录 
mv file1 file2 
ln 
联接文件 
ln -s file1 file2 
find 
使用匹配表达式查找文件 
find . -name "*.c" -print 
file 
显示文件类型 
file filename 
选择操作 
命令名 
功能描述 
使用举例 
head 
显示文件的最初几行 
head -20 filename 
tail 
显示文件的最后几行 
tail -15 filename 
cut 
显示文件每行中的某些域 
cut -f1,7 -d: /etc/passwd 
colrm 
从标准输入中删除若干列 
colrm 8 20 file2 
paste 
横向连接文件 
paste file1 file2 
diff 
比较并显示两个文件的差异 
diff file1 file2 
sed 
非交互方式流编辑器 
sed "s/red/green/g" filename 
grep 
在文件中按模式查找 
grep "^[a-zA-Z]" filename 
awk 
在文件中查找并处理模式 
awk '{print $1 $1}' filename 
sort 
排序或归并文件 
sort -d -f -u file1 
uniq 
去掉文件中的重复行 
uniq file1 file2 
comm 
显示两有序文件的公共和非公共行 
comm file1 file2 
wc 
统计文件的字符数、词数和行数 
wc filename 
nl 
给文件加上行号 
nl file1 >file2 
安全操作 
命令名 
功能描述 
使用举例 
passwd 
修改用户密码 
passwd 
chmod 
改变文件或目录的权限 
chmod ug+x filename 
umask 
定义创建文件的权限掩码 
umask 027 
chown 
改变文件或目录的属主 
chown newowner filename 
chgrp 
改变文件或目录的所属组 
chgrp staff filename 
xlock 
给终端上锁 
xlock -remote 
编程操作 
命令名 
功能描述 
使用举例 
make 
维护可执行程序的最新版本 
make 
touch 
更新文件的访问和修改时间 
touch -m 05202400 filename 
dbx 
命令行界面调试工具 
dbx a.out 
xde 
图形用户界面调试工具 
xde a.out 
进程操作 
命令名 
功能描述 
使用举例 
ps 
显示进程当前状态 
ps u 
kill 
终止进程 
kill -9 30142 
nice 
改变待执行命令的优先级 
nice cc -c *.c 
renice 
改变已运行进程的优先级 
renice +20 32768 
时间操作 
命令名 
功能描述 
使用举例 
date 
显示系统的当前日期和时间 
date 
cal 
显示日历 
cal 8 1996 
time 
统计程序的执行时间 
time a.out 
网络与通信操作 
命令名 
功能描述 
使用举例 
telnet 
远程登录 
telnet hpc.sp.net.edu.cn 
rlogin 
远程登录 
rlogin hostname -l username 
rsh 
在远程主机执行指定命令 
rsh f01n03 date 
ftp 
在本地主机与远程主机之间传输文件 
ftp ftp.sp.net.edu.cn 
rcp 
在本地主机与远程主机 之间复制文件 
rcp file1 host1:file2 
ping 
给一个网络主机发送 回应请求 
ping hpc.sp.net.edu.cn 
mail 
阅读和发送电子邮件 
mail 
write 
给另一用户发送报文 
write username pts/1 
mesg 
允许或拒绝接收报文 
mesg n 
Korn Shell 命令 
命令名 
功能描述 
使用举例 
history 
列出最近执行过的 几条命令及编号 
history 
r 
重复执行最近执行过的 某条命令 
r -2 
alias 
给某个命令定义别名 
alias del=rm -i 
unalias 
取消对某个别名的定义 
unalias del 
其它命令 
命令名 
功能描述 
使用举例 
uname 
显示操作系统的有关信息 
uname -a 
clear 
清除屏幕或窗口内容 
clear 
env 
显示当前所有设置过的环境变量 
env 
who 
列出当前登录的所有用户 
who 
whoami 
显示当前正进行操作的用户名 
whoami 
tty 
显示终端或伪终端的名称 
tty 
stty 
显示或重置控制键定义 
stty -a 
du 
查询磁盘使用情况 
du -k subdir 
df 
显示文件系统的总空间和可用空间 
df /tmp 
w 
显示当前系统活动的总信息
```
