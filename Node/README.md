### Node的运行机制
libuv提供了eventLoop这种非阻塞IO任务处理机制。
eventLoop会去6个阶段查找任务。
Node应用了V8来解释执行JS。
Node提供了网络、文件等线程去处理这些任务。

- timers
- I/O callbacks
- idle,prepare
- poll
- check
- close callbacks

### Node的eventLoop和浏览器的区别

### Buffer的本质是什么？

### Node的Stream的本质是什么？

### Node的Cluster和child_process是怎么样运用来开启多进程并保证负载均衡的？


### Node的父子进程的通信方式是怎么样的？
IPC：管道和Socket
libuv 通过管道和socket实现。

### 什么是守护进程? 如何实现守护进程?
退出终端，程序不退出
nohup

### Node BFF的职责
- 统一接口转发，包含跨域和接入服务化
- 充当Web服务器，提供SPA初始化吐出和SSR能力
- 提供额外的前端服务，包括业务聚合和上传下载能力

> [如何通过饿了么 Node.js 面试](https://github.com/ElemeFE/node-interview/tree/master/sections/zh-cn)