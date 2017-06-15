/**
 * Created by zhouzhen on 2017/6/14.
 */
//乱序 洗牌算法
function shuffle(arr) {
  var len = arr.length;
  for(var i=0;i<len-1;i++){
    var index=Math.floor(Math.random()*(len-i));
    var temp=arr[index];
    arr[index]=arr[len-i-1];
    arr[len-i-1]=temp;
  }
  return arr;
}

//在上面的算法里，我们每一次循环从前 len - i 个元素里随机一个位置，将这个元素和第 len - i 个元素进行交换，迭代直到 i = len - 1 为止。

console.log(shuffle([1,2,3,4,5,6]));
