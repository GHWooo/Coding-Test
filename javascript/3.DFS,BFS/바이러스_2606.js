// 해결
const fs = require('fs');
[n, m, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>x.split(' ').map(Number));
let connect = Array.from({length: parseInt(n)+1}, ()=>[]);
input.map(([x, y])=>{
    connect[x].push(y); connect[y].push(x);
});
let visited = [];
let count = 0;

const dfs = (num) => {
    count++;
    visited[num] = 1;
    for(i of connect[num]){
        if(!visited[i]) dfs(i);
    }
}
dfs(1);
console.log(count-1);