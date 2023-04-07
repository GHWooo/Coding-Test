// solved
const fs = require('fs');
[nm, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, m] = nm.split(' ').map(Number);
let trees = input.split(' ').map(Number).sort((a, b)=>b-a);
let left = 0;
let right = trees[0]-1;
while(left <= right){
    let count = 0;
    const mid = parseInt((left + right)/2);
    for(tree of trees){
        if(tree <= mid) break;
        count += (tree-mid);
    }
    if(count >= m) left = mid+1;
    if(count < m) right = mid-1;
}
console.log(right);