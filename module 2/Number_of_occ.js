function check(arr,x){
    let ans=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]==x)ans++
    }
    return ans;
}

console.log(check([4,5,4,4,4,2,7,8,9,],5))