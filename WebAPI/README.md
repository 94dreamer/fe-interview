# WebAPI

### 说下对cookie的理解

背景：浏览器为了解决HTTP协议无状态的问题引入的信息储存技术

如何解决的：基于HTTP的header，当浏览器请求服务端时，在响应头Set-Cookie返回key-value形式的键值对。浏览器会为每个站点保存接受到的cookie信息。当浏览器下次再向该站点发起请求时候，会自动在HTTP的请求头中附带上对应的cookie。

有什么问题，又是如何解决的？

- 过期：cookie由Expires/Max-Age字段来标识过期时间
- 安全性：SameSite(CSRF)/HttpOnly(XSS document.cookie)/Secure(HTTPS)
- 自定义范围：domain/path

### iframe有那些缺点？

- 影响主页面加载，iframe会阻塞主页面的Onload事件
- 搜索引擎的检索程序无法解读这种页面，不利于SEO
- iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载
- 如果需要使用iframe，最好是通过javascript动态给iframe添加src属性值，这样可以绕开以上两个问题

### Canvas和SVG有什么区别？

svg输出的是DOM节点，而canvas是一整张画布，svg是矢量图形，拉伸不会失真，而canvas是像素图形。

### RequestAnimateFrame

背景：解决setTimeout延时性不稳定导致的动画卡顿的问题
特点：浏览器页面渲染的每一帧开始会调用RequestAnimateFrame的回调函数。

### RequestIdleCallback

背景：设置浏览器空闲时候取执行回调函数，能够拿到剩余的空闲时间。最大为50ms，这是在启发式认为20FPS是合格的刷新率的前提下。能够让开发者能够低优先级的执行某些任务而不影响延迟关键事件如输入响应和动画。
