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

function decimalPart(n,x,p){
    let temp=1;
    let ans=n;
    for(let i=0; i<p; i++){
        temp/=10;
        for(let j=0; j<=9; j++){
            let val=n+temp*j;
    
            if(val*val<=x){
                ans=val
            }
        }
        n=ans;
        
    }
    
    return ans;
    

}

let x=10;
let p=4;
let int=sqrt(x);
console.log(decimalPart(int,x,p));

