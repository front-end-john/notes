# gulp 配置部署代码到服务器

## gulpfile.js 配置

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

# config.${env}.js 配置

[了解gulp](https://www.gulpjs.com.cn/)

``` 
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

``` 
let gulp = require('gulp');
let compass = require('gulp-compass');

/**
 * 编译 scss
 */
gulp.task('compass', () => {
  /**
   * admin scss文件改变才编译
   */
  gulp.watch('./src/sass/*.scss').on('change', () => {
    gulp.src('./src/sass/admin.scss')
      .pipe(compass({
        config_file: './admin.rb',
        css: 'public/static/css',
        sass: 'src/sass'
      })).pipe(gulp.dest('./public/static/css'));
  });
});
```

``` 
小程序gulp配置
const fs = require("fs");

const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const tap = require("gulp-tap");
const arg = require("minimist")(process.argv.slice(2));
const imagemin = require('gulp-imagemin');

const re = /\/\*no-compile-start\*\/([\D\d]*)\/\*no-compile-end\*\//g;

gulp.task('sass', () => gulp.src(['./src/**/*.scss', '!./src/base/**/*'])
  .pipe(tap(file => {
    let content = file.contents.toString();
    content = content.replace(re, ($0, $1) => {
      $1 = $1.trim();
      return `/*no-compile-start*//*${$1}*//*no-compile-end*/`;
    })
    file.contents = Buffer.from(content, 'utf-8');
  }))
  .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
  .pipe(rename({
    extname: '.wxss'
  }))
  .pipe(tap(file => {
    let content = file.contents.toString();
    content = content.replace(re, ($0, $1) => {
      return $1.replace(/\/\*|\*\//g, '');
    })
    file.contents = Buffer.from(content, 'utf-8');
  }))
  .pipe(gulp.dest('./dist'))
);

gulp.task('iview', () => gulp.src('./iview.config.js')
  .pipe(tap(file => {
    const configs = eval(file.contents.toString());
    configs.forEach(iview => {
      gulp.src(`./src/iview/${iview}/**/*`, { base: './src/iview' }).pipe(gulp.dest('./dist/components'));
    });
    console.log(configs.join() + ' 组件copy success');
  }))
)

gulp.task('copy', () => gulp.src(
  [
    './src/**/*',
    '!./src/iview',
    '!./src/image/**/*',
    '!./src/**/*.scss',
    '!./src/app.json',
    '!./src/vendor/env.js',
    '!./src/base'
  ]
).pipe(gulp.dest('./dist')));

gulp.task('app.json', () => gulp.src('./src/app.json')
  .pipe(tap(file => {
    
    const content = JSON.parse(file.contents.toString());
    const ROUTE = eval(fs.readFileSync('./src/constants/routes.js', 'utf-8'));
    content.pages = Object.values(ROUTE).map(route => route.substr(1));
    file.contents = Buffer.from(JSON.stringify(content), 'utf-8');
  }))
  .pipe(gulp.dest('./dist'))
)

gulp.task('env', () => gulp.src('./src/vendor/env.js')
  .pipe(tap(file => {
    let env = arg.env;
    file.contents = Buffer.from(`exports.env="${env}";`, 'utf-8');
  }))
  .pipe(gulp.dest('./dist/vendor'))
)

gulp.task('watch', () => {
  gulp.watch(['./src/**/*', './iview.config.js'], ['copy', 'sass', 'app.json', 'iview']);
});

gulp.task('default', ['watch', 'env', 'app.json', 'iview']);

gulp.task('imgmin', () => gulp.src('./src/image/**/*')
  .pipe(imagemin({optimizationLevel: 7}))
  .pipe(gulp.dest('dist/image'))
);

gulp.task('dist', ['copy', 'sass', 'app.json', 'env']);
```
