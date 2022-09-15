// 해결
const fs = require('fs');
[n, ...cases] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

while(cases.length){
    [m, n, k] = cases.shift().split(' ').map(Number);
    let nowCase = cases.splice(0, k).map(x=>{
        return x.split(' ').map(Number);
    });
    let visited = Array.from({length: m}, ()=>[]);

    const dfs = (x, y) => {
        visited[x][y] = 1;
        for([nx, ny] of [[x+1, y], [x-1, y], [x, y+1], [x, y-1]]){
            if(nx > -1 && ny > -1 && nx < m && ny < n && visited[nx][ny]!==1){
                for([mx, my] of nowCase){
                    if(nx === mx && ny === my){
                        dfs(nx, ny); break;
                    } 
                }
            }
        }
    }
    let count = 0;
    for([x, y] of nowCase){
        if(!visited[x][y]){
            dfs(x, y);
            count++;
        }
    }
    console.log(count);
}