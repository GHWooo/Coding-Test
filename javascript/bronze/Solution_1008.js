// solved
const fs = require('fs');
[a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
console.log(a / b);