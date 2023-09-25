function count_sort(arr){
    let max_el=-Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max_el){
            max_el=arr[i]
        }
    }
    let freq=Array(max_el+1).fill(0);
    for(let i=0; i<arr.length; i++){
        let curr_element=arr[i];
        freq[curr_element]++
    }
    for(let i=1; i<freq.length; i++){
        freq[i]+=freq[i-1];
    }
    console.log(freq);
    let output=Array(arr.length);
    for(let i=arr.length-1; i>=0; i--){
        let index_of_last_occ=freq[arr[i]]-1;
        console.log(index_of_last_occ);
        let element =arr[i];
        output[index_of_last_occ]=element;
        freq[arr[i]]--;
    }
    return output;
}

const arr=[3,1,2,3,4,9,1,6];
const output=count_sort(arr);
console.log(output);

