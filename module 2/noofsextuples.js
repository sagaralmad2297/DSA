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

function count(arr){
    let m=[];
    let n=[];
    for(let a=0; a<arr.length; a++){
        for(let b=0; b<arr.length; b++){
            for(let c=0; c<arr.length; c++){
                m.push((arr[a]*arr[b])+arr[c])
            }
        }
    }
    for(let d=0; d<arr.length; d++){
        if(arr[d]==0)continue;
        for(let e=0; e<arr.length; e++){
            for(let f=0; f<arr.length; f++){
                n.push((arr[f]+arr[e])*arr[d])

                
            }
        }
    }
    m.sort((a,b)=>a-b);
    n.sort((a,b)=>a-b);
    let ans=0; 
    for(let i=0; i<m.length; i++){
        const element=m[i]
        let ub=upperbond(n,element);
        let lb=lowerbond(n,element);
        if(ub==-1 || lb==-1)continue;
        ans+=(ub-lb);
    }
    return ans;
}

console.log(count([5,7,10]))