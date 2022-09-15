// 해결
const fs = require('fs');
[n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = parseInt(n);
input = input.map(x=>x.split(' ').map(Number));

let tree = Array.from({length: n+1}, ()=>[]);
input.map(([x, y])=>{
    tree[x].push(y); tree[y].push(x);
});
parent = [];
let current = 1;

const dfs = (current) => {
    for(node of tree[current]){
        if(!parent[node]){
            parent[node] = current; dfs(node);
        }    
    }
}
while(current <= n){
    if(!parent[current]) dfs(current); 
    current++;
}
parent.shift(); parent.shift();
console.log(parent.join('\n'));