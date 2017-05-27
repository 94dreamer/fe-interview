## HTML

- 前端需要注意哪些SEO

```
1. 标签使用合理，注意语义化，结构清晰可读的html源码能够被更好的爬虫抓取并分析。
2. 保证静态链接，而不是js内控制location.href跳转。
3. 路由层级不要太深，导致爬虫需要爬取层级过深。
4. 像信息列表的展示，显示的可以控制数量，但是尽量在html里面多一些，然后后面的div进行overflow隐藏。
5. 单个模块要到做到多链接，图片和标题都带上url链接，而不是用一个<a href="xxx.com"></a>包裹。
6. 重要的信息列表的展示第一次展现尽量不要用js动态加载。
7. 注意<img />标签的alt属性一定要带上图片关键信息，善用标题标签的title属性。
8. 像一般的作弊手段，关键字重复甚至css作弊，搜索引擎都能够识别出来，数量多了也会降低权重作为惩罚。
9. 不用<a></a>标签包裹大量层级的div，这样会影响分析链接权重。
10. 增加跳转入口和友链，打通跳转。
11. 善用<head>内的<title>和<meta>标签，title不用太长，关键信息放前面，防止被截取丢失，keywords关键词要精确。
...
```
更多：[前端攻城狮学SEO](http://www.94dreamer.com/index.php/Home/Article/index/id/62)

- <img>的title和alt有什么区别

```
title是鼠标移上去的提示，alt是图片加载错误或者未成功时候的代替文字。
```

- 语义化的理解

```
让人和机器更好地阅读和理解HTML代码。
- 合理地使用带有语义标签。
- 适度的标签嵌套。
- 合理的使用标签属性
- 符合W3C标准的编写规范
```

- html5有哪些新特性、移除了那些元素？

```
主要是多了 图像、媒体、位置、储存等功能的增加。
- 绘图 canvas svg
- 媒介 video audio
- localStorage sessionStorage
- header nav section article aside footer 等新语义话标签
- 新表单 input type类型更多
- 新技术 webworker websocket Geolocation

移除了
- 纯表现的元素：basefont big center font s strike tt u
- 对可用性产生负面影响的元素：frame frameset noframes

怎么让 IE低版本支持HTML5新标签
- IE8/7/6 支持通过document.createElement 方法创建标签
- 当然也可以使用成熟的垫片 html5shim
```

- Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?

```
- 告知浏览器该以什么标准去解析HTML文档
- HTML5需要写<!DOCTYPE HTML>
```

- 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？行内元素和块级元素有什么区别？

```
- 行内：span i small strong em 
- 行内块：img input select
- 块级：div section ul h4 p
- 空元素：br link script meta
```

- HTML全局属性(global attribute)有哪些

```
class data-* draggable id lang style title 
```

- 如何在页面上实现一个圆形的可点击区域？

```
div{
    border-raduis:50%;
}
```