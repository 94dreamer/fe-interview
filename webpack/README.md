# Webpack
### ESM和CJM有什么本质的区别？

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

### Webpack的热更新原理是怎么样的？ 
