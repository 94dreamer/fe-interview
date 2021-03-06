# ECMAScript

## JS 执行原理

- ECMAScript 是 JS 语言的标准化规范。
- V8 基于 ECMAScript 定义的规范来实现对 JS 的编译和执行。
- 先编译，后执行。
- 转换成 AST，然后再转换成字节码。
- 未执行的函数不会转换成字节码。

## 前端的内存处理和垃圾回收是怎么样的？

### 1. 内存的生命周期：

内存分配：声明变量，函数，对象时候，js 引擎会自动分配内存
内存使用：调用的时候，使用的时候
内存回收：

### 2. 垃圾回收

1. 内存分类：调用栈和堆
2. 传统机制：引用计数和标记清除（window,DOM,栈）
3. 代际假说：新生代翻转清除和晋升，老生代标记清除和标记整理
4. 增量和并发标记：三色计数法的增量标记，辅助线程并行标记

### 3. 常见的内存泄露

1. 全局变量
2. 未被清除的定时器和回调
3. 闭包
4. dom 的引用

### 4. 如何避免内存内泄漏

- 减少不必要的全局变量
- 使用完数据后，及时解除引用

### 5. 实现 sizeOf 函数，传入一个参数 object，计算这个 Object 占用了多少个字节

```js
const testData = {
  a: 111,
  b: "ccc",
  2222: false,
};
// number: 8 byte
// number: 每个长度 2 byte
// boolean: 4 byte

function calculator(obj) {
  // 递归和类型判断 相同引用不占用空间
}
```

[实现视频](https://www.bilibili.com/video/BV19X4y13752)

### 6. 如何检测一个网站出现了内存泄漏

Chrome 控制台的内存快照

## this 的指向是如何确定的？有哪些管理 this 指向预期的方法？bind 如何实现？

## 声明函数到执行，js 引擎会经过什么过程？

## 什么是变量提升？为什么会有变量提升？

## 为什么函数能访问外部变量？

## 如何解决递归调用层级过深的问题？

## 解释原型链

- JS 是基于对象的语言，没有类的存在，同时想轻量级实现继承。
- 于是用一套基于构造函数和 prototype 以及引用类型的隐藏属性**proto**实现了模拟的继承。
- 实现继承，可以利用构造函数额外添加 prototype 的方法和属性实现，实例化的对象的**proto**指向构造函数的 prototype。
- 在使用对象的属性和方法时候，首先会从自身找起，如果没找到循着**proto**指向的原型对象上去找，一直找到 Object 本身，这根由**proto**串起来的链条被称为原型链。

## 解释作用域

- 每个编程语言都有作用域，作用域一方面是为了增加代码局部性，降低命名冲突和不可预见的编程难度，一方面也促进了更有效的垃圾回收。
- JS 的作用域是通过函数上下文生成的，函数内查找变量，会先在函数上下文的语法环境中查找，然后向外层上下文去找。
- 后期添加了块级作用域，通过函数上下文的词法环境来实现。词法环境也是栈的形式。

## WeakMap/Set

- Set 不重复的集合
- Map 允许任何类型值作为 key 的枚举对象
- WeakSet 集合中的对象的引用为弱引用
- WeakMap key 是弱引用的 Map，两者都没有 size 且不可被枚举，因为 GC 会让对象产生可能变化。

## 箭头函数本质有什么区别

- 特征：this 声明时确定、不能作为构造函数、没有 arguments、没有 prototype 属性
- 箭头函数也拥有函数上下文，不过上下文中缺失了 this、arguments、prototype

## Promise 解决了什么问题

- 回调函数的编程难度
- 使用了微任务
