function lowerbond(arr,ele){
    let start=0; 
    let end=arr.length-1;
    let ans=-1;
    while(start<=end){
        let mid=start+Math.floor((end-start)/2);
        if(arr[mid]>=ele){
            ans=mid;
            end=mid-1;
        }else{
            start=mid+1
        }
    }
    return ans;
}
function upperbond(arr,ele){
    let start=0; 
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



function subsets(arr){
    let n=arr.length;
    let countsubsets=(1<<n)
    let res=[];
    for(let num=0; num<countsubsets; num++){
        let sum=0;
        for(let i=0; i<arr.length; i++){
            if((num & (1<<i))!== 0)sum+=arr[i]
           
        }
        
       res.push(sum);
           
    }
    return res;
}

let arr=[1,-2,3];
let A=-1,B=2;
const left=arr.slice(0,arr.length/2);
const right=arr.slice(arr.length/2,arr.length);

const m=subsets(left);
const n=subsets(right);

m.sort((a,b)=>a-b);
n.sort((a,b)=>a-b);
let ans=0;
for(let i=0; i<m.length; i++){
    let lb=lowerbond(n,A-m[i]);
    let ub=upperbond(n,B-m[i]);
    if(ub==-1 || lb==-1)continue
    ans+=(ub-lb);
}
console.log(ans)