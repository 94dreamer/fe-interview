## JavaScript

- apply 和 call 什么含义，什么区别？什么时候用。

```
apply和call都是盗用对象的方法，以另外一个对象替换它。
不同的是
apply 传参是这样的 obj.func.apply(obj,[ar1,ar2,ar3]); 接受一个数组作为第二个参数
call 传参是这样的 obj.func.call(obj,ar1,ar2,ar3);
```

- 闭包

- 说说对作用域链的理解

- JavaScript原型，原型链 ? 有什么特点？

- 请解释什么是事件代理

- Javascript如何实现继承？

- 谈谈This对象的理解

- 事件模型

- new操作符具体干了什么呢?

- Ajax原理

- 模块化开发怎么做？

- 异步加载JS的方式有哪些？

- js延迟加载的方式有哪些？

```
defer async属性
按需异步加载，动态创建script插入DOM

```

- 那些操作会造成内存泄漏？

- XML和JSON的区别？

- 谈谈你对webpack的看法

- 常见web安全及防护原理

- 用过哪些设计模式？

单例模式／监听器模式／代理模式

- javascript有哪些方法定义对象

- 常见兼容性问题？

- 说说你对promise的了解

- 你觉得jQuery源码有哪些写的好的地方

- offsetWidth/offsetHeight,clientWidth/clientHeight与scrollWidth/scrollHeight的区别

- Node的应用场景

- 谈谈你对AMD、CMD的理解

- web开发中会话跟踪的方法有哪些

- javascript 代码中的”use strict”;是什么意思 ? 使用它区别是什么？说说严格模式的限制

- 对web标准、可用性、可访问性的理解

- 如何通过JS判断一个数组？

instanceof Ararry.isarray()

- 谈一谈你理解的函数式编程？

- 谈一谈箭头函数与普通函数的区别？

    写法简洁明了
    可以节省一层上下文环境，有时候可以少绑定一层this
    如果只有一行代码，可以直接省略一个return

- 谈一谈函数中this的指向吧？

指向当前上下文环境，如果时函数内部的this，要注意指向的是 调用该函数时的上下文环境，而不是该函数创建时候的上下文环境。

- 异步编程的实现方式？

- Js动画与CSS动画区别及相应实现

- JS 数组和对象的遍历方式，以及几种方式的比较

- 说一下双向绑定数据的原理



- 完成 extname 函数，它会接受一个文件名作为参数，你需要返回它的扩展名。
    例如，输入 emoji.png，返回 .png。

```
const extname = (filename) => {
  /* TODO */
  var reg=/.+(\.[a-z]+)/;
  return filename.match(reg)?filename.match(reg)[1]:'';
}
```

- 说说严格模式的限制

```
不能使用with扩展作用域
变量必须声明后再使用
不能使用arguments.callee 和 caller
禁用this指向全局
不能使用前缀0表示八进制数，否则报错
不能删除不可删除的属性，否则报错
```

- 设立”严格模式”的目的，主要有以下几个：

```
消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
消除代码运行的一些不安全之处，保证代码运行的安全；
提高编译器效率，增加运行速度；
为未来新版本的Javascript做好铺垫
```

- 说说你对AMD和Commonjs的理解

```
CommonJS是服务器端模块的规范，Node.js采用了这个规范。CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。AMD规范则是非同步加载模块，允许指定回调函数。
AMD推荐的风格通过返回一个对象做为模块对象，CommonJS的风格通过对module.exports或exports的属性赋值来达到暴露模块对象的目的。
```