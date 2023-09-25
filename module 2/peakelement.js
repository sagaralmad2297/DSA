function peakelement(arr){
    let start=0;
    let end=arr.length-1;
    let ans=-1;
    while(start<end){
        let mid=start+Math.floor((end-start)/2);
        if(arr[mid]>arr[mid+1]){
           end=mid
        }else{
            start=start+1;
            ans=mid+1
        }
    }
    return ans;
}

console.log(peakelement([1,2,3,4,3,6]))