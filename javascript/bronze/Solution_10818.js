//solved
const fs = require('fs');
[n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.split(' ').map(Number);
console.log(Math.min(...input), Math.max(...input));