function upperbond(arr,ele,st){
    let start=st; 
    let end=arr.length-1;
    let ans=-1;
    while(start<=end){
        let mid=start+Math.floor((end-start)/2);
        if(arr[mid]>ele){
            ans=mid;
            end=mid-1;
        }else{
            start=mid+1
        }
    }
    return ans;
}

let a=[4,8,2,6,2];
let b=[4,8,2,6,2];
let c=[];
for(let i=0;i<a.length; i++){
    c.push(a[i]-b[i])
}
c.sort((a,b)=>a-b);
let ans=0;
for(let i=0; i<c.length; i++){
    let ub=upperbond(c,-c[i],i+1)
        if(ub==-1)continue
        ans+=c.length-ub
    }
    console.log(ans)
