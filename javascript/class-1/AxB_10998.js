//solved
const fs = require('fs');
[a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(a * b);