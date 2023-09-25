function binaryserch(arr,ele){
 return helper(arr,ele,0,arr.length-1)
}

function helper(arr,ele,start,end){
    if(start>end)return -1;
    let mid=Math.floor((start+end)/2)
    if(arr[mid]==ele)return mid
    if(arr[mid]>ele){
        return helper(arr,ele,start,mid-1)
    }else{
        return helper(arr,ele,mid+1,end)
    }

}
console.log(binaryserch([1,9,18,23,33,45,54,60],1));