function checksubarray(arr){
    for(let i=0; i<arr.length; i++){
        let sum=0;
        for(let j=i; j<arr.length; j++){
            sum+=arr[j]
            if(sum==0)return true;
        }
    }
    return false
}

function checksubarrayOptimised(arr){
    let pref=Array(arr.length).fill(0);
    pref[0]=arr[0]
    for(let i=1; i<arr.length; i++){
        pref[i]=pref[i-1]+arr[i]
    }
    let mp={}
    for(let i=0; i<pref.length; i++){
        if(pref[i]==0)return true;
        if(mp[pref[i]])return true;
        mp[pref[i]]=1
    }
    return false
}

function checksubarrayOptimised1(arr){
    let mp={}
    let sum=arr[0];
    mp[sum]=1; 
    for(let i=1; i<arr.length; i++){
        if(sum==0)return true;
        sum+=arr[i]
        if(mp[sum]) return true
        mp[sum]=1;
    }
    if(sum==0)return true;
    return false
}

console.log(checksubarrayOptimised1([3,-2,-1]))