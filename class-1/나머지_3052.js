//solved
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let visited = Array.from({length: 1001}, ()=>0);
for(i of input){
    const temp = i % 42;
    if(visited[temp] !== 1) visited[temp] = 1;
}
console.log(visited.reduce((a, b)=>a + b, 0));