function binarysearchOnSortedRotated(arr,x){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let mid=start+Math.floor((end-start)/2);
        if(arr[mid]==x)return mid
         else if(arr[mid]>=arr[start]){
            //case 1
            if(x>=arr[start] && x<arr[mid] ){
                end=mid-1;
            }else{
                start=mid+1
            }
         }else{
            if(x>arr[mid] && x<=arr[end]){
                start=mid+1;
            }else{
                end=mid-1;
            }
         }
    }
    return -1
}

console.log(binarysearchOnSortedRotated([4,5,6,7,8,9,10,3,2],3))