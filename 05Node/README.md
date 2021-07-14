# Node

## Node 的运行机制

libuv 提供了 eventLoop 这种非阻塞 IO 任务处理机制。
eventLoop 会去 6 个阶段查找任务。
Node 应用了 V8 来解释执行 JS。
Node 提供了网络、文件等线程去处理这些任务。

- timers
- I/O callbacks
- idle,prepare
- poll
- check
- close callbacks

## Node 的 eventLoop 和浏览器的区别

## Node 的 Buffer 的本质是什么？

## Node 的 Stream 的本质是什么？

## Node 的 vm 是什么东西

## Node 的 Cluster 和 child_process 是怎么样运用来开启多进程并保证负载均衡的？

## Node 的父子进程的通信方式是怎么样的？

IPC：管道和 Socket
libuv 通过管道和 socket 实现。

## 什么是守护进程? 如何实现守护进程?

退出终端，程序不退出
nohup

## PM2 重启机制，服务崩溃了怎么办

## Koa 的洋葱模型和中间件的原理是什么？

## Node BFF 的职责

- 统一接口转发，包含跨域和接入服务化
- 充当 Web 服务器，提供 SPA 初始化吐出和 SSR 能力
- 提供额外的前端服务，包括业务聚合和上传下载能力

## 怎么理解 serverless

1. 背景：物理机=>虚拟机=>doker=>serverless
2. 价值：都是在降低企业、云服务厂商大规模应用部署的资源利用的成本和应用维护难度。

> [如何通过饿了么 Node.js 面试](https://github.com/ElemeFE/node-interview/tree/master/sections/zh-cn)
