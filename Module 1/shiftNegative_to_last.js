function shiftNegative(arr){
    arr.sort((a,b)=>b-a)
    return arr;
}

function shiftNegative1(arr){
    let temp=[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]>=0){
            temp.push(arr[i])
        }
    }
     for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
            temp.push(arr[i])
        }
     }
    for(let i=0;  i<arr.length; i++){
        arr[i]=temp[i]
    }
    return arr;
}
  function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
  }
function shiftNegative2(arr){
    let i=0; 
    j=arr.length-1;
    while(i<=j){
        if(arr[i]>=0 && arr[j]>=0){
          i++
        }else if(arr[i]<0 && arr[j]<0 ){
            j--
        }else if(arr[i]>=0 && arr[j]<0){
          j--
        }
        else if(arr[i]<0 && arr[j]>=0){
            swap(arr, i,j)
            j--
        }
    }
    return arr;
}
console.log(shiftNegative2([2,3,-77,-5,6,8,-22,-44]))
