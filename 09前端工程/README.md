# 前端工程

## 一、理解的前端工程化

## 二、性能优化怎么做？如何拿到首屏渲染时间，如何衡量每个页面的渲染时间是否符合预期

### 加载优化手段

1. 只请求当前需要的资源
   异步加载、懒加载、polyfill

2. 缩减资源体积

- 打包压缩 webpack4
- gzip 1.2M 300K
- 图片格式的优化/根据屏幕不同分辨率展示图片/利用 cdn 的图片裁剪/webp
- 尽量控制 cookie 大小

3. 时序优化

- js promise.all
- ssr
- prefetch，prerender，preload

4. 合理利用缓存

- cdn cdn 预热 cdn 刷新
-

## 三、质量保障的技术手段有哪些

### 1. 单元测和 UI 测试

- 性价比不高的断言测试

### 2. eslint

- 对规范和明显的语法错误做提示

### 3. TypeScript

- 是 js 的超集，支持强类型和静态代码分析

### 4. e2e 的 Cypress

- 类似无头浏览器去按照预先的编码自动执行操作，验证客户端的表现是否符合预期

### 5. 精准测试

- 改动文件影响范围的血缘关系图
- 打桩，检测运行是否有覆盖改动代码，输出覆盖率报告

## 错误监控怎么做？原理是什么？

- 通过收集客户端的运行错误并上报来提前感知问题和还原情况

## CI/CD 做了哪些？

## docker 是怎么用的

## 部署和回滚是怎么做的？

> 引用

- [从 0 到 1 实现一套 CI/CD 流程](https://juejin.cn/book/6897616008173846543)

## GraphQL 了解过吗？

优点：

- 支持按需获取字段，响应数据符合剃刀原则。
- 通过聚合接口缩短调用链路，减少人工聚合代码。

缺点：

1. debug 不方便，出了问题和数据异常不太好排查是哪个原子接口的,页面请求了多个 GraphQL 也不直观。
2. 适用场景有限，普通的接口聚合是可以做的，但是多个原子服务有时序性和依赖性的时候就搞不了了。
