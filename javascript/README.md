## JavaScript

- 完成 extname 函数，它会接受一个文件名作为参数，你需要返回它的扩展名。
    例如，输入 emoji.png，返回 .png。

```
const extname = (filename) => {
  /* TODO */
  var reg=/.+(\.[a-z]+)/;
  return filename.match(reg)?filename.match(reg)[1]:'';
}
```
