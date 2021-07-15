# WebAPI

## 说下对 cookie 的理解，有哪些特性？是否可以跨域进行设置 cookie？

// todo

背景：浏览器为了解决 HTTP 协议无状态的问题引入的信息储存技术

如何解决的：基于 HTTP 的 header，当浏览器请求服务端时，在响应头 Set-Cookie 返回 key-value 形式的键值对。浏览器会为每个站点保存接受到的 cookie 信息。当浏览器下次再向该站点发起请求时候，会自动在 HTTP 的请求头中附带上对应的 cookie。

有什么问题，又是如何解决的？

- 过期：cookie 由 Expires/Max-Age 字段来标识过期时间
- 安全性：SameSite(CSRF)/HttpOnly(XSS document.cookie)/Secure(HTTPS)
- 自定义范围：domain/path

## 事件流是什么？如果事件没有冒泡可能是什么原因？冒泡但是没有到最外层，有什么办法找到原因？

## 冒泡和捕获是什么？区别？target 是什么？

## iframe 有那些缺点？

- 影响主页面加载，iframe 会阻塞主页面的 Onload 事件
- 搜索引擎的检索程序无法解读这种页面，不利于 SEO
- iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载
- 如果需要使用 iframe，最好是通过 javascript 动态给 iframe 添加 src 属性值，这样可以绕开以上两个问题

## Canvas 和 SVG 有什么区别？

svg 输出的是 DOM 节点，而 canvas 是一整张画布，svg 是矢量图形，拉伸不会失真，而 canvas 是像素图形。

## RequestAnimateFrame 和应用场景

### 1.背景：解决 setTimeout 延时性不稳定导致的动画卡顿的问题
### 2.特点：
- 浏览器页面渲染的每一帧开始会调用 RequestAnimateFrame 的回调函数。
- requestAnimationFrame 是每次 loop 结束发现需要渲染，在渲染之前执行的一个回调函数，不是宏微任务。
- 同样会被长时间的宏任务延迟执行
### 3.场景：


## RequestIdleCallback

### 1.背景：设置浏览器空闲时候取执行回调函数，能够拿到剩余的空闲时间。
### 2.特点：
- 最大为 50ms，这是在启发式认为 20FPS 是合格的刷新率的前提下。
- 会在每次 check 结束发现距离下一帧的刷新还有时间，就执行一下这个。如果时间不够，就下一帧再说。
### 3.场景：能够让开发者能够低优先级的执行某些任务而不影响延迟关键事件如输入响应和动画。
