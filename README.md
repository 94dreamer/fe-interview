## 笔试：

1. 写出下列代码的输出。

```
undefined == null;	//true					1 == true; //true
2 == true;		//	false					0 == false; //true
0 == '';			// true					NaN == NaN; //false
[] == false;		//	true					[] == ![]; //false
var a={};a>=0;	//false					null>0;//false
```
扩展：[]>=0 

2. 手写一个原生Ajax或者描述一下过程。

扩展：fetch了解过吗，相对于ajax有什么优势？

3. 手写或者描述一个排序算法（冒泡or快速）。

扩展：如果是写的代码就问下思路

4. 写出几行使用ES6特性的代码。

扩展：面试第七题（现在有使用模块化方案吗？es6的module和commonjs有什么区别？）

5. 用过哪些设计模式，描述一个设计模式使用的场景。


6. 写一段正则表达式代码，来清空页面location.href中的 type参数，type参数可能为1、2、4、5和map。（例如：http://crm.esf.sina.com.cn/salecustomer/list?city=bj&type=map&jobid=99996）。

扩展：这里面的这些| \d * ?符号是什么意思？

7. 如何巧妙把一个字符串快速输出100遍（比如’leo’输出成leoleoleoleoleoleo...）？

扩展：如何把这样一个对象按属性顺序输出
```
var obj={
	20170501:111,
	20170501:222,
	20170501:333,
	20170501:444,
};

for (let key of Object.keys(obj)) {
  console.log(key);
}
```


8.  js延迟加载的手段有哪些？

```
var body = document.getElementsByTagName('body')[0];
var scr = document.createElement('script');//创建一个script节点
scr.setAttribute('src','test1.js'); //给script节点添加路径
body.appendChild(scr);
```
扩展：defer和async属性的区别，延迟加载的用处？

9.  写出几个HTTP状态码和代表的含义？

扩展：什么时候返回304

10.  CSS如何触发硬件加速？

扩展：层级过多，有什么不好？

## 面试：

1. 自我介绍，并介绍自己的项目
2. 谈一谈你在项目中如何组织自己的代码，团队的代码规范应该要有什么？
3. 讲一下首屏优化
4. 了解过Web性能优化有哪些？Web明显感觉出现性能问题，怎么检测？
5. 了解哪些框架？如果了解过React，React是用什么技术，解决了每次改变状态都要重新渲染整个HTML的问题？props和state分别应该在什么时候使用？如果了解MVVM框架（vue、angular、avalon）？讲一下双向绑定有哪些实现？
6. Webpack有使用过吗？谈谈你对webpack的看法，比如它可以做哪些重要的事情？
7. 现在有使用模块化方案吗？es6的module和commonjs有什么区别？
8. Promise听说过吗？比使用回调函数有什么好处？
9. 移动端适配怎么做？
10. 跨域方法有哪些？
11. 前端路由如何控制？
12. 请解释什么是事件代理／事件委托？
13. Web储存方法有哪些？简单区别下。
14. 如何在代码中判断自身是否被压缩。（提示function的name属性）。