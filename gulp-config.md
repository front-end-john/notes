# gulpfile.js

``` 
// var combiner = require('stream-combiner2');
// var uglify = require('gulp-uglify');
var gulp = require('gulp');
// var del = require('del');
var minimist = require('minimist');
var GulpSSH = require('gulp-ssh');

// 获取通过命令行传进来的值
var knownOptions = {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'production' }
};
var options = minimist(process.argv.slice(2), knownOptions);
var env = options.env;

// 载入配置文件
var config = require(`./config.${env}.js`);
var sshConfig = config.ssh;

// 打开ssh通道
var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: sshConfig
});

console.log('sshConfig:', sshConfig);

gulp.task('default', ['deployFile'], function() {
  // 将你的默认的任务代码放在这

});

/**
 * 上传文件
 */
gulp.task('deployFile', ['execSSH'], () => {
  console.log('5s后开始上传文件...');
  setTimeout(function() {
    return gulp
      .src('./dist/**')
      .pipe(gulpSSH.dest(config.remoteDir));
  }, 5000);
});

/**
 * 执行命令
 */
gulp.task('execSSH', () => {
  console.log('删除服务器上现有文件...');
  return gulpSSH.shell(config.commands, {filePath: 'commands.log'})
    .pipe(gulp.dest('logs'));
});

```

#gulp 配置部署代码到服务器

[了解gulp](https://www.gulpjs.com.cn/)

``` 
config.${env}.js

var fs = require('fs');
var appName = 'home';
module.exports = {
  version: '1.0.0',
  env: 'dev server',
  // 上传配置
  ssh: {
    host: '', // 主机ip地址
    username: '', // 主机名
    privateKey: fs.readFileSync('./utils/dev') // 私钥
    password: '' // 密码
  },
  remoteDir: `/home/ubuntu/${appName}`,
  commands: [
    // 删除现有文件
    `rm -rf /home/ubuntu/${appName}/static/`,
    `rm -f /home/ubuntu/${appName}/index.html`
  ]
};

// 执行 gulp --env dev 上传代码到dev服务器

```
