function firstNonRepeat(str){
    for(let i=0; i<str.length; i++){
        let flag=false;
        for(let j=0; j<str.length; j++){
            if(i==j)continue
            if(str[j]== str[i]){
                flag=true;
                break
            }
        }
        if(flag==false){
            return str[i]
        }
    }
    return undefined;
}

function firstNonRepeat1(str){
    let mp={};
    for(let i=0; i<str.length; i++){
        if(!mp[str[i]]){
            mp[str[i]]=1;
        }else{
            mp[str[i]]++
        }
    }
    for(let i=0; i<str.length; i++){
        if(mp[str[i]]==1){
            return str[i]
        }

    }
    return undefined
}

console.log(firstNonRepeat1('nnaaeww'))