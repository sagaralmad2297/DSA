let ans=0;
let vis=[];
function isSafe(row,col){ 
    for(let i=row-1; i>=0; i--){
        if(vis[i][col]==true)return false;
    }
    for(let i=row-1, j=col-1; i>=0 && j>=0; i--,j--){
        if(vis[i][j]==true)return false
    }
    for(let i=row-1, j=col+1; i>=0 && j<vis.length; i--,j++){
        if(vis[i][j]==true) return false
    }
    return true
}

function nqueen(i,n){
    if(i==n){
        ans+=1
        return
    }
    for(let j=0; j<n; j++){
        if(isSafe(i,j)){
            vis[i][j]=true
            nqueen(i+1,n)
            vis[i][j]=false
        }
    }
}

function solve(){
    let n=5;
    for(let i=0; i<n; i++){
        let arr=Array(n).fill(false)
        vis.push(arr)
    }
    nqueen(0,n)
    console.log(ans)
}

solve()