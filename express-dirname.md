# express 目录结构介绍
[参考](https://segmentfault.com/a/1190000006793550)
```
看下demo应用的目录结构。大部分时候，我们的应用目录结构跟这个保持一致就可以了。也可以根据需要自行调整，express并没有对目录结构进行限制。
从目录结构可以大致看出，express应用的核心概念主要包括：路由、中间件、模板引擎。
  express-demo tree -L 1
.
├── app.js # 应用的主入口
├── bin  # 启动脚本
├── node_modules # 依赖的模块
├── package.json # node模块的配置文件
├── public # 静态资源，如css、js等存放的目录
├── routes # 路由规则存放的目录
└── views # 模板文件存放的目录

5 directories, 2 files

```
