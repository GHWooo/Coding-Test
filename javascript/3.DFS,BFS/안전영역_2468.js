//solved
const fs = require('fs');
[n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const terrain = input.map(x=>x.split(' ').map(Number));

const dfs = (x, y, h, visited) =>{
    visited[x][y] = 0;
    for([nx, ny] of [[x+1, y],[x-1, y],[x, y+1],[x, y-1]]){
        if(nx>-1 && ny>-1 && nx<n && ny<n){
            if(visited[nx][ny] > h) dfs(nx, ny, h, visited);
        }
    }
}
const search = () => {
    const result = [];
    let height = 0;
    while(1){
        let visited = [];
        terrain.map(x=>visited.push(x.slice()));
        let count = 0;
        for(let i = 0; i < visited.length; i++){
            for(let j = 0; j < visited[i].length; j++){
                if(visited[i][j] > height){
                    dfs(i, j, height, visited); count++;
                }
            }
        }
        if(count === 0) break;
        result.push(count); height++;
    }
    console.log(Math.max(...result));
}
search();
