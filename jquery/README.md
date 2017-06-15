## JQuery

- 你觉得jQuery或zepto源码有哪些写的好的地方


	jquery源码封装在一个匿名函数的自执行环境中，有助于防止变量的全局污染，然后通过传入window对象作为局部变量使用，好处是当jQuery中访问window对象的时候，就不用重复查找作用域链，可以更快访问window对象。  
	jquery将一些原型属性和方法封装在了jquery.prototype中，为了缩短名称，又赋值给了jquery.fn。  
	jquery实现的链式调用可以节约代码，所返回的都是同一个对象，可以提高代码效率。

- jQuery 的实现原理？

	

- jQuery.fn 的 init 方法返回的 this 指的是什么对象？ 为什么要返回 this？

- jQuery.extend 与 jQuery.fn.extend 的区别？

- jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？

- jQuery 的队列是如何实现的？队列可以用在哪些地方？

- jQuery 中的bind(), live(), delegate(), on()的区别？

- 是否知道自定义事件？ jQuery 里的 fire 函数是什么意思，什么时候用？

- jQuery 通过哪个方法和 Sizzle 选择器结合的？

- jQuery 中如何将数组转化为 JSON字符串，然后再转化回来？

- jQuery 一个对象可以同时绑定多个事件，这是如何实现的？

- 针对 jQuery的优化方法？

- jQuery 的 slideUp 动画，当鼠标快速连续触发, 动画会滞后反复执行，该如何处理呢?

- jQuery 和 Zepto 的区别？ 各自的使用场景？

- jQuery对象的特点