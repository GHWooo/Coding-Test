//solved
const fs = require('fs');
let n = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
const max = Math.max(...n);
console.log(max + '\n' + (n.indexOf(max)+1))