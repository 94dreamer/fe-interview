## CSS

- display: none;与visibility: hidden;的区别

```
1. 都会隐藏元素，但是visiblity:hidden会依旧占据文档位置
2. display会造成子孙元素的不渲染，而visibility:hidden只是继承，子孙元素可以重置该属性显示。
```

- 如何创建块级格式化上下文(block formatting context),BFC有什么用

```
规则：
    浮动元素float不是none）
    绝对定位元素（position取之为absolute或fixed）
    display取为 table-cell inline-block flex inline-flex
    overflow不是visible的元素
作用：
    可以包含浮动元素
    不被浮动元素覆盖
    阻止父子元素的margin的折叠
```

- 清除浮动的几种方式，各自的优缺点

```
父元素div形成BFC
结尾处加空div标签clear:both
父级div定义伪类:after和zoom
父级div定义overflow:hidden
父级div也浮动，需要定义宽度
```

- css3有哪些新特性

```
新增CSS3选择器
圆角 border-radius
多列布局
阴影和反射
渐变
旋转 位移 翻转 变形
```

- display:inline-block 什么时候不会显示间隙？

```
- 移除间隙
- 使用margin负值
- 使用font-size:0
- letter-spacing
- word-spacing
```

- ::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用

```
单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素
用于区分伪类和伪元素
```

- 如果需要手动写动画，你认为最小时间间隔是多久，为什么？

```
1000/60 = 16.7 ms
```

- CSS在性能优化方面的实践

```
- css压缩与合并 Gizp压缩
- css文件放到head里，不要用@import
- 初始化样式尽量提升（可以考虑少部分关键css使用内部样式表）
- 选择器使用合理 适度嵌套
- 尽量使用缩写 减少代码量
```

- base64的原理及优缺点

```
优点：
    减少网络请求
    图片更改不用重新上传
缺点：
   增大了css文件体积 消耗CPU进行编码
   IE6 7不支持
```

- postcss的作用

- 几种常见的CSS布局

```
- 流体布局
- 圣杯布局
- 双飞翼布局
```

- stylus/sass/less区别

```
均具有“变量”、“混合”、“嵌套”、“继承”、“颜色混合”五大基本特性
```

- postcss的作用

```
postcss可以对sass处理过后的css再处理 最常见的就是autoprefixer
```

