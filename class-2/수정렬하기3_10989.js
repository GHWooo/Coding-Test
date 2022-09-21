//impossible with js
const fs = require('fs');
[n, ...N] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
N = N.sort((a, b) => a-b);
console.log(N.join('\n'));