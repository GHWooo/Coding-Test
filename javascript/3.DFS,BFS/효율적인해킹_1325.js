// 실패
// dfs로 풀면 틀리기 때문에
// bfs로 풀어야 할 것 같지만 시간초과를 해결하지 못함.
const fs = require('fs');
[nm, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, m] = nm.split(' ').map(Number);
input = input.map(x=>x.split(' ').map(Number));

let trust = Array.from({length: n+1}, ()=>[]);
input.map(([x, y])=>trust[y].push(x));
let result = [];
let queue = [];
let max = 0;

const bfs = (num) => {
    let visited = [];
    queue.push(num);
    visited[num] = 1;
    let count = 1;
    while(queue.length){
        const q = queue.shift();
        for(i of trust[q]){
            if(!visited[i]){
                visited[i] = 1;
                count++;
                queue.push(i);
            }
        }
    }
    return count;
}
for(let i = 1; i <= n; i++){
    const temp = bfs(i);
    if(max === temp){
        result.push(i);
    }
    else if(max < temp){
        max = temp;
        result = [i];
    }
}
result.sort((a, b) => a - b);
console.log(result.join(' '));