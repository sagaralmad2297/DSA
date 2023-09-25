function canPaint(mid,arr,p){
    let count=1;
    let currlength=0;
    for(let i=0; i<arr.length; i++){
        if(currlength+arr[i]>mid){
            count++
            currlength=arr[i]
            if(count>p){
                return false
            }
        }else{
            currlength+=arr[i]
       }
    }
    return true;
}

let arr=[10,20,30,40];
let lo=arr.length-1;
let hi=0;
let p=2;
ans=-1;
for(let i=0; i<arr.length; i++){
    hi+=arr[i];
}
while(lo<=hi){
    let mid=lo+Math.floor((hi-lo)/2);
    if(canPaint(mid,arr,p)){
        ans=mid;
        hi=mid-1;

    }else{
        lo=mid+1;
    }
}

console.log(ans)