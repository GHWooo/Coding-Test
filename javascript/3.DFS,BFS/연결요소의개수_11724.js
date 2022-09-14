// 해결
const fs = require('fs');
[nm, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, m] = nm.split(' ').map(Number);
input = input.map(x => x.split(' ').map(Number));

let connect = Array.from({length: n+1}, ()=>[]);
input.map(([x, y])=>{connect[x].push(y); connect[y].push(x);});
let visited = [];
let count = 0;

const dfs = (n) => {
    visited[n] = 1;
    for(i of connect[n]){
        if(visited[i] !== 1) dfs(i);
    }
}
while(n > 0){
    if(visited[n] !== 1){
        dfs(n); count++;
    }
    n--;
}
console.log(count);