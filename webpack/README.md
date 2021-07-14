# Webpack

## ESM 和 CJM 有什么本质的区别？

CommonJS 是 Node 一开始实现的模块化方案，他有一些特点，没有异步请求模块问题。
CommonJS 利用这几个 api 来实现模块化，require/module/exports。
每一个模块会被函数包裹，传入参数，被其他模块 require 的时候才会去动态执行。

ES Modules 是 ECMAScript 借鉴社区的模块化方案形成的。
主要的特征是静态分析引入依赖，在编译时候就确定了。
ES6 的模块不是对象，import 命令会被 JavaScript 引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载，所以无法实现条件加载。也正因为这个，使得静态分析成为可能。
ES Modules 支持编译时候去除无用代码。

区别：

CommonJS 运行时加载，输出的是值拷贝，通过函数传参确定了。
ES Modules 编译时输出接口，输出值引用。支持静态分析

[前端模块化——彻底搞懂 AMD、CMD、ESM 和 CommonJS](https://www.cnblogs.com/chenwenhao/p/12153332.html)

## 手写一个精简的 webpack

1. 读取 webpack.config.js，获取 config
2. 运行 webpack 的 compiler，传入 config
3. 从 entry 开始递归打包
   1. 先转换成 ast 然后 transform 成 es5 的代码
   2. 拿到 ast 分析 import 的依赖 value
   3. 对 values 进行打包
4. 获取到所有的 modules 之后塞入模板内
5. 输出到 output 文件

## webpack 的 loader 和 plugin 有什么区别？

- loader 的触发机制是分析依赖到正则匹配的文件
- loader 的本质是对 source 进行处理的函数
- plugin 的触发机制是 webpack 的事件流程触发了 plugin 绑定的钩子函数
- plugin 的本质是在 webpack 打包的流程中节点上获取 compition 对象做辅助流程的事务

## webpack 的构建速度和生产内容优化

1. 分析工具
   - 内置的 states.json 可以看到产物的 json
   - speed-measure-webpack-plugin 可以看到每个 loader 和插件执行耗时和整个打包耗时
   - webpack-bundle-analyzer 可视化模块体积和构成
2. 构建速度优化
   - 多进程构建 thread-loader/parallel-uglify-plugin 让 loader 和 plugin 利用 Node 多进程
   - 基础库分离 利用 DLL-plugin 进行分包
   - 利用缓存提升二次构建速度
   - 缩小构建目标 loader 更精准的匹配
   - 减少文件搜索范围 优化 resolve 配置、合理使用 alias
   - 使用更高版本的 webpack 和 Node
3. 打包产物优化
   - CommonChunk
   - 动态 import 和代码分割
   - 合理的资源内联
   - treeShaking DCE/ES6
   - Scope Hoisting 尽可能把模块的代码按照引用顺序放在一个闭包里，然后重命名变量防止冲突
   - 动态 Polyfill 服务

## Webpack 的热更新是怎么做到的？原理是怎么样的？

### 过程

1. webpack 监听代码变化，执行编译
2. 通过 websocket 通知浏览器
3. HRM runtime 替换内存中的模块，如果无法更新就刷新页面

### 结构

- Webpack Compile：将 JS 编译成 Bundle
- HMR Server：将热更新的文件输出给 HMR Runtime
- Bundle Server：提供文件在浏览器访问
- HMR Runtime：会被注入到浏览器，更新文件的变化
- bundle.js：构建输出的文件

![HMR](./HMR.png)

## Webpack 如何实现 SSR 打包？

服务端

- 使用 react-dom/server 的 renderToString 方法将 React 组件渲染成字符串
- 服务端路由返回对应的模板

客户端

- 打包出针对服务端的组件

注意问题：

1. 浏览器的全局变量（node 中没有 document，window）
   - 组件适配：将不兼容的组件根据打包环境进行适配
   - 请求适配：将 fetch/ajax 改成 isomorphic-fetch 或者 axios
2. 样式问题（Node 无法解析 css）
   - 方案一：服务端打包通过 ingnore-lader 忽略掉 css 的解析
   - 方案二：将 style-loader 替换成 isomorpic-style-loader

## 为什么 SSR 比 CSR 快？

### SSR 的过程

在服务端完成了额外的业务数据请求，模板渲染，浏览器一拿到就可以进行 DOM 树、样式计算、合成、分层、绘制，生成真正的可见内容。

### CSR 的过程

在服务端完成了基本的用户数据请求，返回模板，浏览器拿到渲染的是空的页面，然后加载执行 JS，然后网络请求，插入 DOM，再开始重排。

#### 区别

- 内网机器拉取数据更快，减少客户端的网络请求。
- CSR 对于耗时的网络任务没有充分利用并行，时间浪费在串行的网络传输中，页面 DOM 更新，渲染后置。
