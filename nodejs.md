#nodejs学习笔记

``` 
REPL模式(Read-Evaluate-Print-Loop,输入-求值-输出-循环），即交互式命令行解析器

Nodejs提供点号（.）开头的元命令，如 
    .help ----会显示帮助菜单
    .clear ----清除当前运行的内容
    .exit ----退出 Node
eq1:解析器设置并显示对象

> myObj = {};
{}

> myObj.list = ["a","b","c"];
[ 'a', 'b', 'c' ]

> myObj.doThat = function(first,second,third){console.log(first);};
[Function]

> myObj
{ list: [ 'a', 'b', 'c' ], doThat: [Function] }

eq2:编写首个服务器程序，存放d盘mydev目录下
1.

var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end('Hello World\n');
}).listen(8124, '127.0.0.1');

2.
var http = require('http');
http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.write("Hello World");
  res.end();
}).listen(8888);

使用cmd命令访问并运行hello.js
H:\Users\ifeng>d:

D:\>cd mydev

D:\mydev>node hello.js
然后打开浏览器访问http://127.0.0.1:8124/

eq3:创建TCP服务器

```
#nodejs项目笔记

``` 
$ git clone git@github.com:himiten/node_gw.git //克隆项目
$ cd node_gw/  //进入项目目录
$ npm install //安装package.json 里面的依赖

Browsersync + Gulp.js：
http://www.browsersync.cn/docs/gulp/

$ npm start //运行项目
官网项目运行与生成的流程：

第一步启动服务器：

通过npm start 命令项目开始启动服务器，start命令配置在package.json文件里面的
  "scripts": {
    "start": "nodemon ./bin/www",
    "compass": "compass watch --trace",
    "complie-react": "webpack -d --watch",
    "sync-browser": "gulp  browser-sync"
  },
app.js为官网的入口文件，代码最后使用module.exports = app这种方式用于返回一些全局共享的常量或者变量。
运行"start": "nodemon ./bin/www"时，www文件使用let app = require('../app')请求了app.js这个文件模块，
然后开始创建http服务器，服务器运行后进行监听server.on('listening', onListening),然后调用debug模块开始调试。

https://www.npmjs.com/package/express-dot-engine
app.js文件里面使用了express-dot-engine模版引擎进行渲染dot页面，这个模块会自动渲染views文件夹下面的dot模版
// view engine setup
let engine = require('express-dot-engine');
app.engine('dot', engine.__express);
app.set('view engine', 'dot');

app.set('views', path.join(__dirname, 'views'));

第二步浏览器渲染页面：
在浏览器上输入http://localhost:88/时，
开始获取官网的模版，routes文件夹下的index.js文件（routes为路由规则存放的目录）完成路由请求
/*gw page. */
router.get(['/','/index(.html)?'], function(req, res, next) {
    let userAgent=req.get('User-Agent').toLowerCase();
    if(mobileReg.test(userAgent)){
        res.render('gw/mobile/index', {});
    }else {
        res.render('gw/pc/index', {});
    }
});

res.render('gw/pc/index', {})这个方法渲染首页，文件为views下的gw/pc/index.dot文件


promises是处理异步操作的一种模式，之前在很多三方库中有实现，比如jQuery的deferred 对象。
当你发起一个异步请求，并绑定了.when(), .done()等事件处理程序时，其实就是在应用promise模式。

Fetch API

目前Chrome 42+, Opera 29+, 和Firefox 39+都支持Fetch。微软也考虑在未来的版本中支持Fetch。 
讽刺的是，当IE浏览器终于微响应实现了progress事件的时候，XMLHttpRequest也走到了尽头。 
目前，如果你需要支持IE的话，你需要使用一个polyfill库。whatwg-fetch

Compass是Sass的工具库（toolkit），使用Compass，需要安装ruby，然后安装compass，

http://jingyan.baidu.com/article/48b558e33558ac7f38c09aee.html

Compass用法指南
http://www.ruanyifeng.com/blog/2012/11/compass.html
安装compass
C:\Users\lenovo>gem install compass

```
