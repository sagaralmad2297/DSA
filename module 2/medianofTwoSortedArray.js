function median(a,b){
    let m=a.length;
    let n=b.length;
    if(m>n){
        return median(b,a);
    }
    let lo=0, hi=m;
    while(lo<=hi){
        let partitionM=lo+Math.floor((hi-lo)/2);
        console.log(partitionM,"partion M")
        let partitionN=Math.floor((m+n+1)/2)-partitionM
        console.log(partitionN,"partion N");
        let maxLeftM, maxLeftN, minRightM,minRightN;
        if(partitionM == 0){
            maxLeftM=-Infinity;
        }else{
            maxLeftM=a[partitionM-1];
            console.log(maxLeftM,"maxleftM")
        }
        if(partitionN == 0){
            maxLeftN=-Infinity
        }else{
            maxLeftN=b[partitionN-1];
            console.log(maxLeftN,"maxleftN")
        }
        if(partitionM ==m){
            minRightM = Infinity
        }else{
            minRightM=a[partitionM]
            console.log(minRightM,"minright M")
        }
        if(partitionN == n){
            minRightN=Infinity
        }else{
            minRightN=b[partitionN];
            console.log(minRightN,"minright N")
        }
        if(maxLeftM<=minRightN && maxLeftN<=minRightM){
            if((m+n)%2==0){
                return Math.floor((Math.max(maxLeftM,maxLeftN)+Math.min(minRightM,minRightN))/2)

            }else{
                return Math.max(maxleftM,maxLeftN);
            }
        }else if(maxLeftM>minRightN){
            hi=partitionM-1;
        }else{
            lo=partitionM+1;
        }
        

    }
    return -1;

} 

console.log(median([7,12,14,15],[1,2,3,4,9,11]))