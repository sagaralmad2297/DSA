function check(arr){
    let lo=0;
    let hi=arr.length-1;
    while(lo<=hi){
        let mid=lo+Math.floor((hi-lo)/2);
        if(arr[mid]==mid){
            lo=mid+1
        } else if(arr[mid]==mid-1){
            hi=mid-1;
        }
    }
    return hi
}

console.log(check([0,1,2,3,4,4,5,6,7]))