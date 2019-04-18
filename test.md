# 前端笔试测试题

## 一、基础

``` 
1.函数检测一个变量是一个String类型
2.用js去除字符串空格，至少两种方法
3.replace()函数的作用
4.lastIndexOf()函数的作用
5.什么是跨域?跨域请求资源的方法有哪些?
6.判断-一个字符串中出现次数最多的字符，统计这个次数
7.jquery中addClass,removeClass,toggleClass的使用。
8.简述一下src与href的区别
9.Web Storage与Cookie相比存在的优势:
```

``` 
1、请说出三种减低页面加载时间的方法?
2、CSS选择符有哪些?哪些属性可以继承?优先级算法如何计算?
3、你所了解到的 Web攻击技术?

4、请详细说下你对vue生命周期的理解?
5、vue如何实现父子组件通信，以及非父子组件通信?
```
## 二、简答题

``` 
1、web 前端开发，如何提高页面性能优化?
2. mvvm框架是什么?它和其它框架(jquery)的区别是什么?哪些场景适合?
3、Vue的双向数据绑定原理是什么?
```
## 三、小程序

``` 
1、简单描述下微信小程序的相关文件类型?
2.怎么解决小程序的异步请求问题?
3.小程序页面间有哪些传递数据的方法?
```

## 四、逻辑与运算

``` 
1、写下能使<div>CENTER</dv>在<body>内 垂直水平居中的样式。
2、列出Javascript的基本数据类型。
3、请看下面的代码:
function MemberManager (members) {
    this.members = members;

    MemberManager.prototype.addMember = function (newMember) {this.members.push(newMember);

    var allMembers = [
        {'name': 'A', 'age': 21]，{' name': 'B', 'age': 18}
    ];
    var memberManager = new MemberManager(allMembers);
    var memberC = {' name': 'C, 'age': 20};
    memberManager.addMember(memberC);
    allMembers = al IMembers.slice(1);
    var memberD = I'name': 'D', 'age': 19};
    memberManager.addMember(memberD); 
    console.log(allMembers);
    console.log(memberManager. members);

现在allMembers与memberManager.members分别有哪些成员?

4、请看下面的代码：
function Foo() {
    print = function () {
        console.log(1);
    };
    return this;
}
Foo.print = function () {
    console.log(2);
};
Foo.prototype.print = function () {
    console.log(3);
}
var print = function () {
    console.log(4);
}
function print() {
    console.log(5);
}

请写出以下输出结果：

Foo.print();
print();
Foo().print();
print();
new Foo.print();
new Foo().print();

5、编写一个AngularJs 1.5的Hello World程序。
```

## 五、编码题
``` 
1、请实现对数组内数字进行快速排序井去重。
  
2、什么是闭包，请写出一个闭包并对应说明利弊，并请说明对页面有什么直接反映.
```
