# React

## setState 和 useState 之后到视图变化会经过什么阶段？

1. 调度 Scheduler 调度任务的优先级，高优任务进入协调阶段
2. 协调 Reconciler 负责找出变化的组件
3. 渲染 Renderer 负责将变化的组件渲染到页面上

## 虚拟 DOM diff 的过程是怎么样的？

两个树 DFS 去比较的过程。
本身是 O(n3)的复杂度。
React 启发式算法降到了 O(n)的复杂度

- 只对同级元素进行 Diff。
- 两个不同类型的元素会产生不同的树。如果深度遍历过程中同一层级的组件类型不相等，不会去继续比较下级。子节点的树完全废弃掉。
- children 是数组的情况，会利用开发者设置的 key 达到最小编辑路径算法。

## diff 中的 key 是如何发挥作用的？

## 说一下对 fiber 的理解

背景：
React diff 过程过久会让用户响应和动画的体验降低。
React 运用时间片轮转调度算法优化这个问题。
需要解决两方面的问题。
第一个，让 DOM Diff 过程可中断，但是树形结构的 DFS 的递归遍历是不可中断的。
所以引入了新的数据结构，在 vdom 原基础上增加了节点访问下一个兄弟节点和父节点的引用。

第二个，时间片轮转调度算法的具体调度怎么实现呢？如何判断调和过程可以继续执行呢？

关键在 RequestIdleCallback，以浏览器是否有空余时间作为任务中断的标准

为什么不使用协程 Generator 来实现？

- 因为需要外部保存函数状态。
- 有传染性，对所有涉及的函数都需要改造，成本大。

第三个，有兼容性问题
todo

## 怎么理解 React Class 组件生命周期的废弃？

componentWillMount/componentWillRecieveProps/componentWillUpdate

- 这三个钩子经常被错误使用，出现了 getDerivedStateFromProps 与 getSnapshotBeforeUpdate 替代
- React 从 Legacy 模式迁移到 Concurrent 模式后，这些钩子的表现会和之前不一致。

## 怎么理解 Hooks 的出现？

- 组件用 Class 过重，有生命周期，又很少被利用
- Class 组件的状态复用困难
- 让 Function 组件能够保存状态
- 践行代数效应

## Hooks 为什么不能嵌套在条件判断中？

会让 hooks 的执行错乱。
hooks 是挂在当前 fiber 上的线性结构。
todo

## useMeno 和 useCallback 为什么能提升性能？

## useCallback 和 useMeno 分别有什么作用？

## React 的性能优化可以在那些方面？

良好的渲染速度、响应交互和视图更新速度、较小位置偏移量。

- PureComponent
- shouldUpdate
- key

## Redux 的生态和原理

## Redux 的组成是什么样的？

## Redux 的中间件是如何实现的？异步处理怎么做

## React-Redux 是如何实现的？
