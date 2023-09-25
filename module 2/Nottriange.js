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

let arr=[5,2,9,6]
arr.sort((a,b)=>a-b);
console.log(arr)
let ans=0;
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        let ub= upperbond(arr,arr[i]+arr[j],j+1)

        if(ub== -1)continue;
        ans+=(arr.length-ub);
        



    }

}
console.log(ans)