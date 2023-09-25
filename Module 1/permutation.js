function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp
}

function permutation(arr,i){
    if(i==arr.length-1){
        console.log(arr)
        return
    }
    for(let idx=i; idx<arr.length;idx++){
        swap(arr, i,idx)
        permutation(arr,i+1)
        swap(arr,i,idx)
    }
}

function permutation1(arr,i){
    if(i==arr.length-1){
        console.log(arr)
        return;
    }
    let visited={};
    for(let idx=i; idx<arr.length;idx++){
        if(!visited[arr[idx]]){
            visited[arr[idx]]=arr[i];
            swap(arr, i,idx)
        permutation(arr,i+1);
        swap(arr,i,idx)
        }
        
    }
}


//permutation(['a','b','c'],0)
permutation1(['a','b','a'],0)


