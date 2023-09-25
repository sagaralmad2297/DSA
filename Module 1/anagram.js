function rearrangeanagrambunch(arr){
let temp=[]
for(let i=0; i<arr.length; i++){
    temp.push({str:arr[i],idx:i});
}
for(let i=0; i<temp.length; i++){
    temp[i].str=temp[i].str.split('').sort().join('');
}
temp.sort((a,b)=>{
    return a.str.localeCompare(b.str);
})
output=[];
for(let i=0; i<temp.length; i++){
    output.push(arr[temp[i].idx])
}
return output
}

function rearrangeanagrambunch1(arr){
    let mp={}
    for(let i=0; i<arr.length; i++){
        let curr=arr[i]
        curr=curr.split('').sort().join('')
        if(!mp[curr]){
            mp[curr]=[arr[i]]
        }else{
            mp[curr].push(arr[i])
        }
    }
    //console.log(mp);
    let result=[];
    Object.values(mp).forEach(val=>{
        result=result.concat(val)
    })
    return result
}

const input=['data','atad','number','tada','adat','bernum']
//const result=rearrangeanagrambunch(input);
//console.log(result);
console.log(rearrangeanagrambunch1(input))