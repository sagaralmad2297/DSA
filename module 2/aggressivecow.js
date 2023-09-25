function isPossible(mid,barn,c){
    let count=1;
    let lastPos=barn[0]
    for(let i=1; i<barn.length;i++){
        if(barn[i]-lastPos>=mid){
         count++
         lastPos=barn[i]
        }
        if(count>=c){
            return true
        }
    }
    return false;
}


let n=5;
 let barn=[1,2,4,8,9];
 barn.sort((a,b)=>a-b);
 let c=3;
 let lo=1;
 let ans=-1;
 let hi=barn[n-1]-barn[0];
 while(lo<=hi){
    let mid=lo+Math.floor((hi-lo)/2);
    if(isPossible(mid,barn,c)){
        ans=mid;
        lo=mid+1;
    }else{
        hi=mid-1;
    }
 }

 console.log(ans);
