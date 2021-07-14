# React

### setState和useState之后到视图变化会经过什么阶段？

1. 调度Scheduler 调度任务的优先级，高优任务进入协调阶段
2. 协调Reconciler 负责找出变化的组件
3. 渲染Renderer 负责将变化的组件渲染到页面上

### 虚拟DOM diff的过程是怎么样的？

两个树DFS去比较的过程。
本身是O(n3)的复杂度。
React启发式算法降到了O(n)的复杂度
- 只对同级元素进行Diff。
- 两个不同类型的元素会产生不同的树。如果深度遍历过程中同一层级的组件类型不相等，不会去继续比较下级。子节点的树完全废弃掉。
- children是数组的情况，会利用开发者设置的key达到最小编辑路径算法。

### 说一下对fiber的理解

背景：
React diff过程过久会让用户响应和动画的体验降低。
React运用时间片轮转调度算法优化这个问题。
需要解决两方面的问题。
第一个，让DOM Diff过程可中断，但是树形结构的DFS的递归遍历是不可中断的。
所以引入了新的数据结构，在vdom原基础上增加了节点访问下一个兄弟节点和父节点的引用。

第二个，时间片轮转调度算法的具体调度怎么实现呢？如何判断调和过程可以继续执行呢？

关键在 RequestIdleCallback，以浏览器是否有空余时间作为任务中断的标准

为什么不使用协程Generator来实现？
- 因为需要外部保存函数状态。
- 有传染性，对所有涉及的函数都需要改造，成本大。

第三个，有兼容性问题
todo

### 怎么理解React Class组件生命周期的废弃？

componentWillMount/componentWillRecieveProps/componentWillUpdate
- 这三个钩子经常被错误使用，出现了getDerivedStateFromProps与getSnapshotBeforeUpdate替代
- React从Legacy模式迁移到Concurrent模式后，这些钩子的表现会和之前不一致。


### 怎么理解Hooks的出现？

- 组件用Class过重，有生命周期，又很少被利用
- Class组件的状态复用困难
- 让Function组件能够保存状态
- 践行代数效应

### Hooks为什么不能嵌套在条件判断中？

会让hooks的执行错乱。
hooks是挂在当前fiber上的线性结构。
todo

### useMeno和useCallback为什么能提升性能？


### React的性能优化可以在那些方面？
良好的渲染速度、响应交互和视图更新速度、较小位置偏移量。

- PureComponent
- shouldUpdate
- key 


### Redux的组成是什么样的？

### Redux的中间件是如何实现的？

### React-Redux是如何实现的？