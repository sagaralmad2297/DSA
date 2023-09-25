function count_sort(arr){
let min_el=Infinity;
let max_el=-Infinity;
for(let i=0; i<arr.length;i++){
    if(arr[i]<min_el){
        min_el=arr[i];
    }
    if(arr[i]>max_el){
        max_el=arr[i];
    }
}
let frequency =Array(max_el+1).fill(0);
for(let i=0; i<arr.length; i++){
    let curr_element=arr[i];
    frequency[curr_element]++;
}
let output =[];
for(let i=0; i<frequency.length; i++){
    while(frequency[i]>0){
        output.push(i);
        frequency[i]--;
    }
}
return output
}

const arr=[3,1,2,3,4,9,1,6];
const output=count_sort(arr);
console.log(output);
