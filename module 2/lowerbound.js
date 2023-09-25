function lowerbond(arr,ele){
    let start=0; 
    let end=arr.length-1;
    let ans=-1;
    while(start<=end){
        let mid=start+Math.floor((end-start)/2);
        if(arr[mid]>=ele){
            ans=mid;
            end=mid-1;
        }else{
            start=mid+1
        }
    }
    return ans;
}

console.log(lowerbond([1,2,2,3,3,3,4,4,5,5,6,6],3))