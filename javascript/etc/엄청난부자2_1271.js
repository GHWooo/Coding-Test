// solved

const fs = require('fs');
[n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

console.log(`${n / m}\n${n % m}`);