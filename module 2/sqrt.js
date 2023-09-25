function sqrt(x){
    let lo=1;
    let hi=x-1;
    ans=-1;
    while(lo<=hi){
        let mid=lo+Math.floor((hi-lo)/2);
        if(mid*mid==x)return mid;
        if(mid*mid<x){
            ans=mid
            lo=mid+1;
        }else{
            hi=mid-1;
        }
    }
    return ans
}

console.log(sqrt(99));