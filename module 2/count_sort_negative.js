function count_sort(arr){
    let max_el=-Infinity;
    let min_el=Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max_el){
            max_el=arr[i]
        }
    if(min_el>arr[i]){
        min_el=arr[i];
    }
    }
    console.log(max_el);
    console.log(min_el)
    let range = max_el-min_el+1;
    let freq=Array(range).fill(0);
    for(let i=0; i<arr.length; i++){
        let curr_element=arr[i];
        freq[curr_element-min_el]++
    }
    for(let i=1; i<freq.length; i++){
        freq[i]+=freq[i-1]; 
    }

    let output=Array(arr.length);
    for(let i=arr.length-1; i>=0; i--){
        let index_of_last_occ=freq[arr[i]-min_el]-1;
        let element =arr[i];
        output[index_of_last_occ]=element;
        freq[arr[i]-min_el]--;
    }
    return output;
}

let arr=[2,1,-3,4,-3,-2,-1,5,6,10,6]
const output=count_sort(arr);
console.log(output)