function isAnagram(s1,s2){
if(s1.length !== s2.length){
    return false;
}
sortedS1=s1.split('').sort().join('');
sortedS2=s2.split('').sort().join('');
return sortedS1 == sortedS2;
}

function isAnagram1(s1,s2){
    if(s1.length !==s2.length){
        return false
    }
    let mp={}
    for(let i=0; i<s1.length; i++){
        if(!mp[s1[i]]){
            mp[s1[i]]=1;
        }else{
            mp[s1[i]]++;
        }
    }
    for(let i=0; i<s2.length; i++){
        if(mp[s2[i]]){
            mp[s2[i]]--
            if(mp[s2[i]]==0){
                delete mp[s2[i]]
            }
        }else{
            return false
        }
    }
    return Object.keys(mp).length==0;
}

console.log(isAnagram1('silent','listen'))