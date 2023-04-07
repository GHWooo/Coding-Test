//solved
const fs = require('fs');
[n, num] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
num = num.split('').map(Number);
console.log(num.reduce((a, b)=>a + b, 0));