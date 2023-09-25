function logestConsecutive_sequence(arr){
let mp={}
for(let i=0; i<arr.length; i++){
    mp[arr[i]]=true
}
let ans=-1;
for(let i=0; i<arr.length; i++){
    if(mp[arr[i]-1]){
        continue
    }
    else{
     len=0; 
     x=arr[i]
     while(mp[x]){
        len++;
        x++;
     }
     ans=Math.max(ans,len)
    }
    
}
return ans;
}


let arr=[9,3,-1,-2,1,8,7,0,6,10]

console.log(logestConsecutive_sequence(arr));