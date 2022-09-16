// solved
const fs = require('fs');
[kn, ...lines] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[k, n] = kn.split(' ').map(Number);
lines = lines.map(Number);
const sum = lines.reduce((sum, currValue)=>sum+currValue);
let left = 1;
let right = parseInt(sum / n);
while(left <= right){
    const mid = parseInt((left+right)/2);
    let count = 0;
    for(len of lines) count += parseInt(len / mid);
    if(count >= n) left = mid+1;
    if(count < n) right = mid-1;
} 
console.log(right);
