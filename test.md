# 前端笔试测试题

## 一、基础

``` 
1.函数检测一个变量是一个String类型
    String类型有两种生成方式：
    （1）var str = “hello world”;
    （2）var str = new String（“hello world”）
    function IsString(str){
         return (typeof str == "string"|| str.constructor == String);
    }
    var str = " ";
    alert(IsString(1));//false
    alert(IsString(str));//true
    alert(IsString(new String(str)))//true
    
2.用js去除字符串空格，至少两种方法
    https://www.cnblogs.com/a-cat/p/8872498.html

3.replace()函数的作用
    replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
    语法：stringObject.replace(regexp/substr,replacement)
    
4.lastIndexOf()函数的作用
    lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
    语法：stringObject.lastIndexOf(searchvalue,fromindex)

5.什么是跨域?跨域请求资源的方法有哪些?
    https://www.cnblogs.com/minigrasshopper/p/8573519.html

6.判断一个字符串中出现次数最多的字符，统计这个次数
    http://www.cnblogs.com/xiaojiangk/p/9718601.html
    
7.jquery中addClass,removeClass,toggleClass的使用。
    https://www.w3cplus.com/blog/117.html
    
8.简述一下src与href的区别
    https://www.jianshu.com/p/d676d12c835b
9.Web Storage与Cookie相比存在的优势:
    与Cookie相比，Web Storage存在不少的优势，概括为以下几点：
    1. 存储空间更大：能提供5MB的存储空间（不同浏览器的提供的空间不同），Cookie仅4KB
    2. 存储内容不会发送到服务器：当设置了Cookie后，Cookie的内容会随着请求一并发送的服务器，这对于本地存储的数据是一种带宽浪费。而Web Storage中的数据则仅仅是存在本地，不会与服务器发生任何交互。
    3. 更多丰富易用的接口：Web Storage提供了一套更为丰富的接口，使得数据操作更为简便。
    4. 独立的存储空间：每个域（包括子域）有独立的存储空间，各个存储空间是完全独立的，因此不会造成数据混乱。
```

``` 
1、请说出三种减低页面加载时间的方法?
    https://www.jianshu.com/p/a2228ebf6391
    
2、CSS选择符有哪些?哪些属性可以继承?优先级算法如何计算?
    https://www.jianshu.com/p/494eac4d98e1
3、你所了解到的 Web攻击技术?
    https://www.cnblogs.com/morethink/p/8734103.html
    
4、请详细说下你对vue生命周期的理解?
    https://www.jianshu.com/p/fa3e7e70e03e
5、vue如何实现父子组件通信，以及非父子组件通信?
    https://www.cnblogs.com/ccyinghua/p/7874651.html
```
## 二、简答题

``` 
1、web前端开发，如何提高页面性能优化?
    https://baijiahao.baidu.com/s?id=1589713089431651995&wfr=spider&for=pc
2. mvvm框架是什么?它和其它框架(jquery)的区别是什么?哪些场景适合?
    一个model+view+viewModel框架，数据模型model，viewModel连接两个
    
    区别：vue数据驱动，通过数据来显示视图层而不是节点操作。
    
    场景：数据操作比较多的场景，更加便捷
3、Vue的双向数据绑定原理是什么?
    vue.js 是采用数据劫持结合发布者-订阅者模式的方式，
    通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
    具体步骤：
    
    第一步：需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter
    这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化
    
    第二步：compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，
    添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
    
    第三步：Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是:
    1、在自身实例化时往属性订阅器(dep)里面添加自己
    2、自身必须有一个update()方法
    3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。
    
    第四步：MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，
    通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，
    最终利用Watcher搭起Observer和Compile之间的通信桥梁，
    达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。
```
## 三、小程序

``` 
1、简单描述下微信小程序的相关文件类型?
    https://www.jianshu.com/p/523c192219ce
2.怎么解决小程序的异步请求问题?
    https://www.jianshu.com/p/adcf14d2cfa7
3.小程序页面间有哪些传递数据的方法?
    https://blog.csdn.net/reborncgy/article/details/80868114
```

## 四、逻辑与运算
[js五种继承优缺点](https://www.cnblogs.com/gfweb/p/9512886.html)

``` 
1、写下能使<div>CENTER</dv>在<body>内 垂直水平居中的样式。
    https://www.w3cplus.com/css/elements-horizontally-center-with-css.html
2、列出Javascript的基本数据类型。
    Undefined、Null、Boolean、Number和String
    https://www.cnblogs.com/mybwhy/p/7245234.html?utm_source=itdadao&utm_medium=referral
3、请看下面的代码:
    function MemberManager (members) {
      this.members = members;
    }
    MemberManager.prototype.addMember = function (newMember) { // MemberManager.prototype 原型继承，声明addMember
      this.members.push(newMember);
    };
    var allMembers = [
      {'name': 'A', 'age': 21}, {'name': 'B', 'age': 18}
    ];
    // 原型继承缺点: 当父级的属性有引用类型的时候,任意一个实例修改了这个属性,其他实例都会受影响
    var memberManager = new MemberManager(allMembers); // new 一个实例，memberManager成员有 A、B
    var memberC = {'name': 'C', 'age': 20};
    memberManager.addMember(memberC); // memberManager成员有 A、B、C
    console.log('allMembers:', allMembers);// allMembers成员有 A、B、C
    
    allMembers = allMembers.slice(1); // slice(start, end) 方法可从已有的数组中返回选定的元素。allMembers成员有B
    var memberD = {'name': 'D', 'age': 19};
    memberManager.addMember(memberD); // memberManager成员有 A、B、C、D
    
现在allMembers与memberManager.members分别有哪些成员?
    allMembers:  [{"name":"B","age":18},{"name":"C","age":20}]
    memberManager.members: [{"name":"A","age":21},{"name":"B","age":18},{"name":"C","age":20},{"name":"D","age":19}]

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

  Foo.print(); // 2
  print(); // 4
  Foo().print(); // 1  此处变量提升，Foo().print() 覆盖了父级的print()
  print(); // 1
  new Foo.print(); // 2
  new Foo().print();// 3

5、编写一个AngularJs 1.5的Hello World程序。
   代码在./test/angular.html

```

## 五、编码题
``` 
1、请实现对数组内数字进行快速排序井去重。
  https://blog.csdn.net/lihchweb/article/details/72902731
  https://www.cnblogs.com/Freewayy/p/6160521.html
  
2、什么是闭包，请写出一个闭包并对应说明利弊，并请说明对页面有什么直接反映.
    https://www.cnblogs.com/cxying93/p/6103375.html
```
