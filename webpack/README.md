# Webpack
### 手写一个精简的webpack
1. 读取webpack.config.js，获取config
2. 运行webpack的compiler，传入config
3. 从entry开始递归打包
    1. 先转换成ast然后transform成es5的代码
    2. 拿到ast分析import的依赖value
    3. 对values进行打包
4. 获取到所有的modules之后塞入模板内
5. 输出到output文件

### webpack的loader和plugin有什么区别？
- loader的触发机制是分析依赖到正则匹配的文件
- loader的本质是对source进行处理的函数
- plugin的触发机制是webpack的事件流程触发了plugin绑定的钩子函数
- plugin的本质是在webpack打包的流程中节点上获取compition对象做辅助流程的事务

### webpack的构建速度和生产内容优化
1. 分析工具
    - 内置的states.json 可以看到产物的json
    - speed-measure-webpack-plugin 可以看到每个loader和插件执行耗时和整个打包耗时
    - webpack-bundle-analyzer 可视化模块体积和构成
2. 构建速度优化
    - 多进程构建 thread-loader/parallel-uglify-plugin让loader和plugin利用Node多进程
    - 基础库分离 利用DLL-plugin进行分包
    - 利用缓存提升二次构建速度
    - 缩小构建目标 loader更精准的匹配
    - 减少文件搜索范围 优化resolve配置、合理使用alias
    - 使用更高版本的webpack和Node
3. 打包产物优化
    - CommonChunk
    - 动态import和代码分割
    - 合理的资源内联
    - treeShaking DCE/ES6
    - Scope Hoisting 尽可能把模块的代码按照引用顺序放在一个闭包里，然后重命名变量防止冲突
    - 动态Polyfill服务

### ESM和CJM有什么本质的区别？


### 

### 谈谈你对重构的理解?
#### What
需求是抽象，代码是实例。
重构就是按照对需求的抽象理解，把代码重新组织成抽象的实体。
#### Why

#### How

- 什么样的前端代码是好的

- 你觉得前端工程的价值体现在哪

```
为简化用户使用提供技术支持（交互部分）
为多个浏览器兼容性提供支持
为提高用户浏览速度（浏览器性能）提供支持
为跨平台或者其他基于webkit或其他渲染引擎的应用提供支持
为展示数据提供支持（数据接口）
```

- webpack的优化

```
1. 合理配置CommonsChunkPlugin
2. 通过externals配置来提取常用库
3. 利用DllPlugin和DllReferencePlugin预编译资源模块
4. 使用Happypack加速你的代码构建
5. 增强uglifyPlugin
```

- 前后端分离的理解

1. 前后端分离可能有一些前后端人员的冲突，但是基本上是围绕项目的稳定性和工作量。
2. 对于前后端分离的场景来说，后台应用系统更适合一些，前端后分离的优势在用户操作视图频繁的Web应用上能显露无疑。在前台的展示类网站，前后端分离的价值就不是那么大。
3. 通过职位划分 提高了业务分工的专精度，从此后端人员只需关心数据和脚本的正确性，提供RESTful API，前端人员专供数据在客户端显示和操作交互，各司其职。
4. 前后端分离通过AJAX的JSON通信，提高了用户调取服务器数据的操作流畅度，用客户端来分担了服务器的计算压力和带宽流量负担。
5. 对于多入口的产品，前后端分离让接口提供人员的工作更专一,稍加修改就可以给多种前端提供接口。
6. 前后端分离，让前后端各自的改造和重构优化可以互不影响。


- 对前端架构师的理解

    1. 负责前端团队的管理及与其他团队的协调工作，提升团队成员能力和整体效率；
    2. 带领团队完成研发工具及平台前端部分的设计、研发和维护；
    3. 带领团队进行前端领域前沿技术研究及新技术调研，保证团队的技术领先
    4. 负责前端开发规范制定、功能模块化设计、公共组件搭建等工作，并组织培训。