let grid=[
    [0,0,1,1,1],
    [1,0,0,0,1],
    [1,0,1,0,0],
    [0,0,0,0,0]
];
let vis=[];

function isSafe(i,j,n,m){
    return i>=0 && j>=0 && i<n && i<m && grid[i][j]==0 && vis[i][j]==false;
}

function RatMaze(i,j,n,m){
    if(i==n-1 && j==m-1){
       return 1;
    }
    vis[i][j]=true;
    let ans=0;
    if(isSafe(i+1,j,n,m)){
        ans+=RatMaze(i+1,j,n,m)//down
    }
    
    if(isSafe(i,j+1,n,m)){
        ans+=RatMaze(i,j+1,n,m)//right
    }
    if(isSafe(i-1,j,n,m)){
        ans+=RatMaze(i-1,j,n,m)//up
    }
    if(isSafe(i,j-1,n,m)){
        ans+=RatMaze(i,j-1,n,m)//left
    }
    vis[i][j]=false
    return ans
}

function solve(){
    for(let i=0; i<grid.length; i++){
        let arr=Array(grid[i].length).fill(0)
    
        vis.push(arr);
    }
   
  let ans= RatMaze(0,0,grid.length,grid[0].length)
  console.log(ans)
}

solve();

