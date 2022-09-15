//solved
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, ...arr] = input;
n = Number(n);
arr = arr.map((i)=>Number(i));
arr.sort(function(a, b){
    return b - a
});

const result = [];

for(let i = 0; i < n; i++){
    result.push(arr[i] * (i+1));
}

console.log(Math.max(...result));