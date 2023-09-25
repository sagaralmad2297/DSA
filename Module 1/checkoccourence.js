function check(arr,ele){
    let ans=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]==ele){
            ans++
        }
    }
    return ans;
}

console.log(check([1,2,3,4,4,4,4,5,5,6],5))