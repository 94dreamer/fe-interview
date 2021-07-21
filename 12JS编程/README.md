# JS 编程

## 原生API实现

### 类型判断

```js
function typeof(obj){
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
}
```

### 继承

```js

```

### 手写 bind 绑定

```js
function bind(context,...args){
  	return (...rest)=>{
      	return this.call(context,...args,...reset)
    }
}
```

### 实现 reduce

```js
Array.prototype.reduce2 = function (func, init) {
  let total = init;
  for (let i = 0; i < this.length; i++) {
    total = func(total, this[i], i, this);
  }
  return total;
};
const arr = [1, 2, 3, 4];
arr.reduce2((total, cur, index, arr) => {
  return total + cur;
}, 0);
```

### 数组去重

```js
function unique(arr) {
  const map = {};
  const newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = true;
      newArr.push(arr[i]);
    }
  }
}
```

```es6
const unique = (arr) => [...new Set(arr)];
```

### 数组扁平化

```js
const flat = (arr, index) => {
  const result = [];
  if (index === 0) return result;

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      result.connect(...flat(arr[i], index == null ? index : index - 1));
    }
  }
  return result;
};
```

### 浅拷贝

```js
const lowCopy = (obj) => {
  const newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
```

### 简单深拷贝 不考虑内置对象和函数

```js
const deepCopy = (obj) => {
  if (typeof obj !== "object") {
    return obj;
  } else {
    const newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = deepCopy(obj[key]);
      }
    }
    return newObj;
  }
};
```

### 复杂深拷贝 考虑函数和内置对象 以及 循环引用

```js
const isObject = (target) =>
  (typeof target === "object" || typeof target === "function") &&
  target !== null;

function deepClone(target, map = new WeakMap()) {
  if (map.get(target)) {
    return target;
  }
  let constructor = target.constructor;
  // 获取当前值的构造函数；name是类型
  if (/^(RegExp|Date)$/i.test(constructor.name)) {
    // 创建一个新的实例
    return new contructor(target);
  }
  if (isObject(target)) {
    map.set(target, true); // 为循环引用的对象做标记
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = deepClone(target[props], map);
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}
```

### 发布订阅模式

```js
class SyncHook {
  constructor(arg = []) {
    this.arg = arg;
    this.tasks = [];
  }
  tap(name, callback) {
    this.tasks.push({
      name,
      callback,
    });
  }
  call(...arg) {
    arg.length = this.arg.length;
    this.tasks.forEach((task) => {
      task.callback(arg);
    });
  }
}
const hook = new SyncHook(1);
hook.tap("log", function (name) {
  console.log(name);
});
hooks.call("xxx");
```

### 解析 URL 参数为对象

```js
function parseParam(url) {
  const params = {};
  const paramsString = url.split("?")[1];
  if (!paramsString) return params;
  paramsString.split("&").forEach((byte) => {
    const arr = byte.split("=");
    params[arr[0]] = decodeURIComponent(arr[1]);
  });
  return params;
}
parseParam("https://bz1d7.feishu.cn/base/appcQf?table=tblxp&view=veJVd");
```

### 字符串模块

```js
function render(template, data) {
  const reg = /\{\{(\w+)\}\}/; // 模板字符串正则
  if (reg.test(template)) {
    const key = reg.exec(template)[1];
    template = template.replace(reg, data[key] == null ? "" : data[key]);
    return render(template, data);
  }
  return template;
}

let template1 = "我是{{name}}，年龄{{age}}，性别{{sex}}";
render(template1, { name: "布兰", age: 12 });
```

### 图片懒加载

```js
// 思路 给所有的图片图片加一个data-src属性，src为默认图 需要做的是监听所有图片的onLoad事件，如果距离 视区顶部的距离 < 屏幕高度，就可以替换 src了。
const imgList = [...document.querySelectorAll("img")];
const imgLazyLoad = (function () {
  return function () {
    for (let i = 0; i < imgList.length; i++) {
      let rect = imgList[i].getBoundingClientRect();
      if (react.top < window.innerHeight) {
        img.src = img.dataset.src;
        imgList.splice(i, 1);
        imgList.length === 0 &&
          document.removeEventListener("scroll", imgLazyLoad);
        i--;
      }
    }
  };
})();
document.addEventListener("scroll", imgLazyLoad);
```

### 函数防抖

> 一般用作搜索框输入，触发高频时间 N 秒后只会执行一次，如果 N 秒内事件再次触发，则会重新计时

```js
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    var args = arguments;
    timeout && clearTimeout(timeout);
    timeout = setTimout(function () {
      func.call(context, args);
    }, wait);
  };
}

input.oninput = debounce(function () {
  console.log("xxx");
}, 1000);
```

### 函数节流

> 触发高频事件，且 N 秒只执行一次

```js
function throttle(func, time) {
  let open = true;
  return function () {
    if (open) {
      open = false;
      setTimeout(function () {
        open = true;
      }, time);
      func(this, arguments);
    }
  };
}

button.onclick = throttle(function () {
  console.log("xxxx");
}, 1000);
```

### 函数柯里化

> 将使用多个参数的函数转换成一系列使用一个参数的函数的技术。
> 例子

```js
function add(a, b, c) {
  return a + b + c;
}
add(1, 2, 3);
let addCurry = curry(add);
addCurry(1)(2)(3);
```

> 实现 curry

```js
function curry(func) {
  let arr = [];
  return function () {
    arr.push(...arguments);
    arr.length >= func.length && func.call(this, ...arr);
    return arguments.callee;
  };
}
function curry2(fn) {
  let judge = (...args) => {
    if (args.length === fn.length) return fn(...args);
    return (...arg) => judge(...args, ...arg);
  };
  return judge;
}
```

### JSONP

> JSONP 核心原理：script 标签不受同源策略约束，所以可以用来进行跨域请求，优点是兼容性好，但是只能用于 GET 请求

```js
const jsonp = ({ url, params, callbackName }) => {
  // callbackName 随机生成
  const gennerateUrl = () => {
    let dataSrc = "";
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        dataSrc += `${key}=${params[key]}&`;
      }
    }
    dataSrc += `callback=${callbackName}`;
    return `${url}?${dataSrc}`;
  };
  return new Promise((resolve, reject) => {
    const scriptEle = document.createElement("script");
    scriptEle.src = gennerateUrl();
    document.body.appendChild(scriptEle);
    window[callbackName] = (data) => {
      resolve(data);
      document.removeChild(scriptEle);
    };
  });
};

jsonp("", { a: 1 }, "jsonp00001").then((data) => {});
```

### Ajax

> 监听 兼容

```js
const getJSON = function (url) {
  return new Promise((resolve, reject) => {
    const xhr = XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Mscrosoft.XMLHttp");
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== this.DONE) return;
      if (xhr.status === 20 || xh.status === 304) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText));
      }
    };
    xhr.send();
  });
};
```

## Promise

### 1. 手写一个 promise

> then 考虑链式调用，所以得返回一个新的 primise
> 处理异步问题，所以的先用 callback 先存起来

```js
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise{
   constructor(executor){
       this.status = PENDING;
       this.value = undefined;
       this.reason = undefined;
       this.onResolvedCallbacks=[];
       this.onRejectCallbacks=[];

	let resolve=(value)=>{
           if(this.status===PENDING){
               this.status = FULFILLED;
               this.value = value;
               this.onResolvedCallbacks.forEach(fn=>fn());
           }
       }

       let reject=(reason)=>{
           if(this.status === PENDING){
               this.status = REJECTED;
               this.reason = reason;
               this.onRejectedCallbacks.forEach(fn=>fn())
           }
       }

        try{
            executor(resolve,reject)
        }catch(error){
            reject(error);
        }
   }

   then(onFulfilled,rejectCB){
       // 每次调用then都返回一个新的promise
       let promise2 = new Promise((resolve,reject)=>{
           if(this.status === FULFILLED){
               setTimeout(()=>{
                   try{
                       let x = onFulfilled(this.value)
                       resolvePromise(promise2,x,reslove,reject);
                   }catch(e){
                       reject(e)
                   }
               },0)
           }
           if(this.status === REJECTED){
                setTimeout(()=>{
                    try{
                       let x = onRejected(this.reason)
                       resolvePromise(promise2,x,resolve,reject)
                    }catch(e)({
                       reject(e)
                    })
                })
            }

            if(this.status === PENDING){
                this.onResolveCallbacks.push(()=>{
                    setTimeout(()=>{
                        try{
                            let x = onFulfilled(this.value);
                            resolvePromise(promise,x,resolve,reject)
                        }catch(e){
                            reject(e)
                        }
                    })
                })
                this.onRejectedCallbacks.push(()=>{
                    setTimeout(()=>{

                    })
                })
            }
        });
       return promise2;
   }
}

const a = new Promise((reject)=>{reject()});

a().then(onFulfilled, onRejected);
```

### 2. 手写一个 PromiseAll

```js
function PromiseAll(promises) {
  return new Promise(function (resolve, reject) {
    const resultArr = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((data) => {
          resultArr[i] = data;
          count++;
          count === promises.length && resolve(resultArr);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}
```

### 3. 实现一个带并发限制的 promise 异步调度器

```js
class Scheduler {
  constructor(limit) {
    this.pList = [];
    this.limit = limit || 2;
    this.workList = [];
  }
  run() {
    if (this.workList.length === this.limit) return;

    while (this.workList.length < this.limit && this.pList.length > 0) {
      const work = this.pList.shift();
      this.workList.push(work()); // 取任务
    }
    Promise.race(this.workList).then(() => {
      this.workList.forEach((p, index) => {
        p.then(() => {
          this.workList.splice(index, 1);
        });
      });
      this.pList.length > 0 && this.run();
    });
  }
  add(promiseCreator) {
    if (!this.pList) this.pList = [];
    this.pList.push(promiseCreator);
    this.run();
  }
}
const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() =>
    timeout(time).then(() => {
      console.timeLog("answer time", order);
    })
  );
};
console.time("answer time");
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
```

[视频 00:43:00](https://www.bilibili.com/video/BV19X4y13752)

## 树

### 翻转一颗二叉树

```js
function reserveTree(node){
	if(!node.left && !node.right)return node;
  let temp = node.left;
 	node.left = reserveTree(node.right);
  node.right = reserveTree(temp);
  return node
}
```



### 手写 diff，实现两个树的 diff 算法。分别打印出新增、删除、修改的节点

### 给了一段很长很绕的代码，判断哪里可能会造成内存泄漏，在不修改源代码的基础上，如何优化，避免内存泄漏

### js 手写动画的优化方式

### 算法题：买卖股票的最佳时机

给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你最多可以完成 1 笔交易。
例如 prices = [1,5,11,2,4,3,0,9]

### 两大数相加

### 查找数组最大深度 5 分钟内做完

### 红 3 秒 绿灯 1s 黄灯 2 秒 不停闪烁

### 执行顺序，并解释为什么

```
setTimeout(function() {
  console.log(1)
}, 0)

async function async1() {
  console.log('2');
  await async2()
  console.log('3');
}

async function async2() {
  console.log('4');
}

async1()

requestAnimationFrame(() => console.log('5'));

new Promise(resolve => {
  console.log('6')
  resolve()
}).then(function() {
  console.log('7')
})

```

2 6 5 3 4 3 7 5 1

### 改写上一题的 async2 函数，在不使用 async 的前提下，保持输出顺序不变



### 给定一个整数数组，判断是否存在重复元素

```js
function isRepeat(arr){
  return new Set(arr).size !== arr.length
}
```

## 链表

### 1.给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次

```js
function deleteRepeat(head){
  const set = new Set([head.val])
  let current = head;
  while(current.next){
    if( set.has(current.next.val)){
       current.next = current.next.next
    }else{
      set.add(current.next.val)
      current = current.next
    }
  }
}
```

### 2. 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前；你应当保留两个分区中每个节点的初始相对位置

```js
//示例:
//输入: head = 1->4->3->2->5->2, x = 3
//输出: 1->2->2->4->3->5

```



## DOM



## 设计模式

### 1.实现 Event emitter

```js

```





> 引用

[最全的手写 JS 面试题](https://juejin.cn/post/6968713283884974088)
[死磕 36 个 JS 手写题（搞懂后，提升真的大）](https://juejin.cn/post/6946022649768181774)
