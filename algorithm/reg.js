/**
 * Created by zhouzhen on 2017/6/14.
 */
/*冒泡排序*/

function bubbleSort(arr) {
  var len=arr.length;
  var temp;
  for(var i=0;i<len-1;i++){
    for(var j=0;j<len-1-i;j++){
      if(arr[j]>arr[j+1]){
        temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  return arr;
}

function qSort(arr) {
  if(!arr.length){
    return [];
  }
  var len=arr.length;
  var arrMin=[];
  var arrMax=[];
  var pointer=arr[0];
  for(var i=1;i<len;i++){
      if(arr[i]<pointer){
        arrMin.push(arr[i]);
      }else{
        arrMax.push(arr[i]);
      }
  }
  return qSort(arrMin).concat(pointer,qSort(arrMax));
}

function outOrder(arr) {
  var len=arr.length;
  var temp;
  var index;
  for(var i=0;i<len-1;i++){
    index=Math.floor(Math.random()*(len-i));
    temp=arr[index];
    arr[index]=arr[len-i-1];
    arr[len-i-1]=temp;
  }
  return arr;
}

console.log(bubbleSort([32,2,63,8,24,75]));

console.log(qSort([32,2,63,8,24,75]));

console.log(outOrder([1,2,3,5,6,7]));