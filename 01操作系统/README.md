# 操作系统

## 操作系统核心职责

管理者和魔术师，让每一个程序能够在自己变幻出来的的环境下，完成任务和享用资源。

## 操作系统的基本特征

- 并发：宏观上的同时运行多个程序，而并行指同一时刻运行多个指令，比如流水线、多核处理器或者分布式计算机系统
- 共享
- 虚拟：时间、空间
- 异步

## 操作系统的管理者角色的职责有哪些

- 进程管理

进程控制、进程同步、进程通信、死锁处理、处理机调度

- 内存管理

内存分配、地址映射、内存保护与共享、虚拟内存

- 文件管理

文件储存空间的管理、目录管理、文件读写管理和保护

- 设备管理

完成用户的 I/O 请求，缓存管理、设备分配、设备处理、虚拟设备

## 进程与线程的区别

- 进程定义：进程是资源分配的基本单位
- 进程优势：通过进程抽象让每一个程序感觉有一台自己独享的 CPU,不用去考虑和其他程序对 CPU 资源的竞争。进程也是操作系统去调度任务时候的一种颗粒度。
- 进程劣势：进程需要注意的是过度的线程带来的上下文切换会消耗很多不必要的损耗，并且进程间的共享和通信成本比较大。

- 线程共性：线程模型在进程基础上提供第二次并发，是不同层面并发模型的抽象。
- 线程优势：线程天然共享一块空间，线程可以利用多核处理器能力。
- 线程注意：线程间的资源是否共享的准则是，除非共享会引起程序错误，不然就共享。程序计数器、寄存器、栈、状态字这些线程上下文不能共享。

## 进程间通信的方式 IPC 有哪些

- 管道
- 套接字
- 信号
- 信号量
- 共享内存
- 消息队列

## 操作系统的调度算法有哪些

> 操作系统遵循朴素的生活哲学，时间调度来源于工业时期的机器工厂，调度是因为资源有限，追求面向综合应用的最优解。

- 先来先服务调度算法
- 时间片轮转算法
- 短任务有限算法
- 优先级调度算法
- 混合调度算法
- 实时调度算法
- 调度异常之优先级倒挂

## 操作系统的死锁是什么

死锁是什么：两个进程争夺资源相互等待，没有外力会一直挂起。

死锁的必要条件：（两个霸道总裁找女友)

- 互斥条件：资源要求使用者互斥，不能让多个进程同时使用，产生阻塞等待。
- 不剥夺条件：进程所获得的资源在未使用完之前，不能由其他进程强行夺走，只能主动释放
- 占有并请求：要新的资源被阻塞，对自己使用的资源保持不放
- 循环等待条件：存在一种进程资源的循环等待链，链中的每一个进程已获得的资源同时被下一个进程所请求。

死锁的解决方式：

- 预防：破坏其中的一个以上必要条件
- 避免:用类似银行家算法防止进入,对资源的申请管控
- 检测和解除：发生死锁再解决

## 操作系统的内存管理是怎么样的

> 参考资料

- 操作系统之哲学原理第 2 版
