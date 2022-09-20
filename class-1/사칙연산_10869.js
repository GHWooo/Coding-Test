//solved
const fs = require('fs');
[a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const result = [a+b, a-b, a*b, parseInt(a/b), a%b];
console.log(result.join('\n'));