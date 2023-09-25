function cyclicRotate(arr){
    let n=arr.length;
    let x=arr[n-1];
    for(let i=n-1; i>=1; i--){
        arr[i]=arr[i-1]
    }
    arr[0]=x
}
arr=[1,2,3,4,5]
cyclicRotate(arr)
console.log(arr)
