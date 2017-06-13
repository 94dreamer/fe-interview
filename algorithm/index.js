/**
 * Created by zhouzhen on 2017/6/13.
 */
//冒泡排序
function bubbleSort(arr) {
  let len=arr.length;
  for(let i=0;i<len-1;i++){ //轮数
    for(let j=0;j<len-1-i;j++){ //从0到几
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]] //ES6结构赋值交换变量
      }
    }
  }

}

//快速排序
function quickSort(arr) {
  if(arr.length==0){
    return [];
  }
  let arrMin=[];
  let arrMax=[];
  let pointer=arr[0];
  for(let i=1;i<arr.length;i++){
    if(arr[i]<arr[0]){
      arrMin.push(arr[i]);
    }else{
      arrMax.push(arr[i]);
    }
  }
  return quickSort(arrMin).concat(pointer,arrMax);//递归
}


const arr=[27,12,23,6,97,2];

// bubbleSort(arr);

var Arr=quickSort(arr);


console.log(Arr);