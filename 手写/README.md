### 类型判断

```js
function typeof(obj){
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
}
```
### 继承

### 数组去重

```js
function unique(arr){
    const map={};
    const newArr=[]
    for(var i=0; i<arr.length ;i++ ){
        if(!map[arr[i]]){
            map[arr[i]]=true;
            newArr.push(arr[i]);
        }
    }
}
```

```es6
const unique = arr=>[...new Set(arr)]
```

### 数组扁平化
```js
const flat = (arr,index) =>{
    const result=[];
    if(index===0)return result;

    for(let i=0; i<arr.length;i++){
        if(!Array.isArray(arr[i])){
            result.push(arr[i]);
        }else{
            result.connect( ...flat(arr[i], index==null ?index: index-1) )
        }
    }
    return result;
}
```

### 浅拷贝
```js
const lowCopy=(obj)=>{
    const newObj={};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key]= obj[key];
        }
    }
    return newObj;
}
```

### 简单深拷贝 不考虑内置对象和函数
```js
const deepCopy=(obj)=>{
    if(typeof obj !== 'object' ){
        return obj
    }else{
        const newObj= obj instanceof Array ? [] : {}
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                newObj[key] = deepCopy(obj[key]);
            }
        }
        return newObj
    }
}
```

### 复杂深拷贝 考虑函数和内置对象 以及 循环引用
```js
const isObject = (target) => (typeof target === 'object' || typeof target === 'function' ) && target !==null;

function deepClone(target,map=new WeakMap()){
    if(map.get(target)){
        return target;
    }
    let constructor = target.constructor;
    // 获取当前值的构造函数；name是类型
    if(/^(RegExp|Date)$/i.test(constructor.name)){
        // 创建一个新的实例
        return new contructor(target);
    }
    if(isObject(target)){
        map.set(target,true); // 为循环引用的对象做标记
        const cloneTarget = Array.isArray(target) ? [] : {};
        for(let prop in target){
            if(target.hasOwnProperty(prop)){
                cloneTarget[prop] = deepClone(target[props],map)
            }
        }
        return cloneTarget;
    }else{
        return target;
    }
}
```

### 发布订阅模式
```js
class SyncHook{
    constructor(arg=[]){
        this.arg=arg;
        this.tasks=[];
    }
    tap(name,callback){
        this.tasks.push({
            name,
            callback
        })
    }
    call(...arg){
        arg.length = this.arg.length;
        this.tasks.forEach(task=>{
            task.callback(arg)
        })
    }
}
const hook = new SyncHook(1);
hook.tap('log',function(name){
    console.log(name);
})
hooks.call('xxx')
```

### 解析URL参数为对象
```js
function parseParam(url){
    const params ={}; 
    const paramsString=url.split('?')[1];
    if(!paramsString)return params;
    paramsString.split('&').forEach(byte=>{
        const arr= byte.split('=')
        params[arr[0]]= decodeURIComponent(arr[1]);
    });
    return params
}
parseParam('https://bz1d7.feishu.cn/base/appcQf?table=tblxp&view=veJVd')
```

### 字符串模块
```js
function render(template,data){
    const reg = /\{\{(\w+)\}\}/; // 模板字符串正则
    if(reg.test(template)){
        const key = reg.exec(template)[1];
        template = template.replace(reg, data[key]==null?'':data[key] );
        return render(template,data)
    }
    return template;
}

let template1='我是{{name}}，年龄{{age}}，性别{{sex}}'
render(template1,{name:'布兰',age:12})
```

### 图片懒加载
```js
// 思路 给所有的图片图片加一个data-src属性，src为默认图 需要做的是监听所有图片的onLoad事件，如果距离 视区顶部的距离 < 屏幕高度，就可以替换 src了。
const imgList = [ ...document.querySelectorAll('img') ];
const imgLazyLoad=(function(){
    return function(){
        for(let i=0;i<imgList.length;i++){
            let rect = imgList[i].getBoundingClientRect()
            if(react.top < window.innerHeight){
                img.src = img.dataset.src;
                imgList.splice(i,1);
                imgList.length===0 && document.removeEventListener('scroll', imgLazyLoad)
                i--
            }
        }
    }
})()
document.addEventListener('scroll', imgLazyLoad)
```

### 函数防抖
> 一般用作搜索框输入，触发高频时间N秒后只会执行一次，如果N秒内事件再次触发，则会重新计时
```js
function debounce(func, wait){
    let timeout;
    return function(){
        const context = this;
        var args=arguments;
        timeout && clearTimeout(timeout);
        timeout = setTimout(function(){
            func.call(context,args);
        },wait);
    }
}

input.oninput = debounce(function(){console.log('xxx')},1000)
```

### 函数节流
> 触发高频事件，且N秒只执行一次
```js
function throttle(func,time){
    let open=true;
    return function(){
        if(open){
            open = false;
            setTimeout(function(){
                open = true
            },time)
            func(this,arguments);
        }
    }
}

button.onclick=throttle(function(){
    console.log('xxxx');
},1000)
```

### 函数柯里化
> 将使用多个参数的函数转换成一系列使用一个参数的函数的技术。
> 例子
```js
function add(a,b,c){
    return a+b+c
}
add(1,2,3)
let addCurry = curry(add);
addCurry(1)(2)(3);
```
> 实现curry
```js
function curry(func){
    let arr=[];
    return function(){
        arr.push(...arguments)
        arr.length>=func.length && func.call(this,...arr);
        return arguments.callee;
    }
}
function curry2(fn){
    let judge=(...args)=>{
        if(args.length===fn.length)return fn(...args)
        return (...arg)=>judge(...args,...arg)
    }
    return judge
}
```

### JSONP
> JSONP 核心原理：script标签不受同源策略约束，所以可以用来进行跨域请求，优点是兼容性好，但是只能用于GET请求
```js
const jsonp=({ url, params , callbackName})=>{
    // callbackName 随机生成
    const gennerateUrl=()=>{
        let dataSrc = '';
        for(let key in params){
            if(params.hasOwnProperty(key)){
                dataSrc += `${key}=${params[key]}&`
            }
        }
        dataSrc += `callback=${callbackName}`
        return `${url}?${dataSrc}`
    }
    return new Promise((resolve,reject)=>{
        const scriptEle = document.createElement('script')
        scriptEle.src =gennerateUrl();
        document.body.appendChild(scriptEle);
        window[callbackName]=(data)=>{
            resolve(data);
            document.removeChild(scriptEle)
        }
    })
}

jsonp('',{a:1}, 'jsonp00001').then(data=>{})
```

### Ajax 
```
```

### Promise
```js

```

###
```

```  