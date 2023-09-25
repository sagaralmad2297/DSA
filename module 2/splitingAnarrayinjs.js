function getSplit(arr,k){
    let sumofArray=0;
    for(let i=0; i<arr.length; i++){
        sumofArray+=arr[i];
    }
    let lo=1;
    let hi=sumofArray;
    let result=1;

    while(lo<=hi){
        let mid=lo+Math.floor((hi-lo)/2);
        console.log(mid,'midd')
        let count =1;
        let sum=0, ans=0;
        for(let i=0; i<arr.length; i++){
            console.log(sum+arr[i]>mid,"**")
            if(sum+arr[i]>mid){
                ans=Math.max(ans,sum);
                sum=0;
                count++;
                if(count >k)break;
            }
            sum+=arr[i];
        }
        console.log(count,"----")
        ans=Math.max(ans,sum);
        if(count == k){
            result =ans;
        }
        if(count>k){
            lo=mid+1
        }else{
            hi=mid-1;
        }
        
    }
    return result
}

console.log(getSplit([1,3,2,4,10,8,4,2,5,3],4))

