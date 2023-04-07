// solved

const fs = require('fs');
[a, b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);

console.log(`${a + b}\n${a - b}\n${a * b}`);