function getFreq(str,ch){
 let mp={}
 for(let i=0; i<str.length; i++){
    if(!mp[str[i]]){
        mp[str[i]]=1;
    }else{
        mp[str[i]]++
    }
 }
 if(mp[ch]){
    return mp[ch]
 }
 else{
    return 0
 }
}

function getFreq1(str,ch){
    let count=0; 
    for(let i=0; i<str.length; i++){
        if(str[i]==ch){
            count++
        }
    }
    return count
}

console.log(getFreq1('sagarrrrrrrrrr','r'));