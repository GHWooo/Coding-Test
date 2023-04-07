const fs = require('fs');
[n, ...list] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
list = list.map(Number);
list.sort((a, b) => a - b);
console.log(list.join('\n'));