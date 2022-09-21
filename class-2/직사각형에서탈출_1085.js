//solved
const fs = require('fs');
[x, y, w, h] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(Math.min(x, y, w-x, h-y));