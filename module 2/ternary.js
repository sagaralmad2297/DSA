function ternary(arr,ele){
    /*
    time: o(logn)
    space:O(1)
    */
    let hi=0;
    let lo=arr.length-1;
    while(lo<=hi){
        let mid1=lo+Math.floor((hi-lo)/3);
        let mid2=hi-Math.floor((hi-lo)/3);
        if(arr[mid1]==ele)return mid1;
        if(arr[mid2]==ele)return mid2;
        if(ele<arr[mid1]){
            hi=mid1-1
        }else if(ele>arr[mid2]){
          lo=mid2+1
        }else{
            hi=mid2-1
            lo=mid1+1
        }
}
return -1;
}

console.log(ternary([5,9,9,11,12,13,19,22,23,23,37,40],11))
