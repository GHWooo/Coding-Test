// 실패
// dfs로 풀면 틀리기 때문에
// bfs로 풀어야 할 것 같지만 시간초과를 해결하지 못함.
const fs = require('fs');
[nm, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, m] = nm.split(' ').map(Number);
input = input.map(x=>x.split(' ').map(Number));

let visited = [];
let trust = Array.from({length: n+1}, ()=>[]);
input.map(([x, y])=>trust[x].push(y));
let result = [];
let max = 0;

const dfs = (num) => {
    let count = 1;
    if(!trust[num].length){
        visited[num] = 1; return count;
    }
    for(i of trust[num]){
        if(visited[i]){
            visited[num] = count + visited[i];
            continue;
        }   
        count += dfs(i);
        visited[num] = count;
    }
    return count
}
for(let i = 1; i <= n; i++){
    result[i] = dfs(i);
}

result.sort((a, b) => a - b);
console.log(result.join(' '));