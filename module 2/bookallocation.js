function canallocate(books,mid,s){
    let studentcount=1;
    let currentpage=0;
    for(let i=0; i<books.length; i++){
        if(currentpage+books[i]>mid){
            studentcount++
            currentpage=books[i]
            if( studentcount>s){
                return false
            }
        }else{
            currentpage+=books[i]
        }
    
    }
    return true
}

let arr=[12,34,67,90]
let students=2;
let lo=arr[0];
let hi=0;
let ans=-1;
for(let i=0; i<arr.length; i++){
    hi+=arr[i];

}
while(lo<=hi){
    let mid=lo+Math.floor((hi-lo)/2);
    if(canallocate(arr,mid,students)){
        ans=mid;
        hi=mid-1;
    } else{
        lo=mid+1;
    }
}

console.log(ans);