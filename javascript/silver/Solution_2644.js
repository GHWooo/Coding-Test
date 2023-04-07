//solved
const fs = require('fs');
[n, purpose, m, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = parseInt(n); m = parseInt(m);
[start, end] = purpose.split(' ').map(Number);
let relation = Array.from({length: n+1}, ()=>[]);
input.map(x=>{
    [a, b] = x.split(' ').map(Number);
    relation[a].push(b); relation[b].push(a);
});

let visited = [];
let queue = [[start, 0]];
while(queue.length > 0){
    [current, count] = queue.shift();
    if(current === end){
        console.log(count); process.exit();
    }
    for(i of relation[current]){
        if(!visited[i]){
            visited[i] = 1;
            queue.push([i, count+1]);
        }
    }
}
console.log(-1);