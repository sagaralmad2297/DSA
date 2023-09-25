function binaryserch(arr,ele){
    let start=0;
    let end=arr.length;
    while(start<=end){
        let mid= start+Math.floor((end-start)/2);
        if(arr[mid]==ele){
            return mid;
        }if(arr[mid]<ele){
            start=mid+1;
        }if(arr[mid]>ele){
            end=mid-1
        }
    }
    
    return -1
}

console.log(binaryserch([1,9,18,23,33,45,54,60],54));