function linersearch(arr,ele){
    for(let i=0; i<arr.length; i++){
        if(arr[i]==ele){
            return i;
        }
    }
    return -1;
}

function linersearch1(arr,ele){
    let result =[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]==ele){
            result.push(i);
        }
    }
    return result
}


console.log(linersearch1([2,5,4,8,2,5,0,5,1],5));
