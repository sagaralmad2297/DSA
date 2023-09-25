function binarysearch(arr,n){
    let start=0; 
    let end=arr.length-1;
    while(start<=end){
        let mid=start+Math.floor((end-start)/2)
        if(arr[mid]==n){
        if(mid+1<arr.length && arr[mid+1]==n){
            return true
        }
        if(mid-1>=0 && arr[mid-1]==n)return true
        return false
        }else if(arr[mid]<n){
            start =mid+1;
        }else{
            end=mid-1;
        }
    }
    return false
}

console.log(binarysearch([1,2,2,2,3,4,4,4,5,5,6,7,8,9,9],7))