//solved
const fs = require('fs');
[nx, a] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, x] = nx.split(' ').map(Number);
a = a.split(' ').map(Number);
let result = [];
for(i of a){
    if(i < x) result.push(i);
}
console.log(result.join(' '));