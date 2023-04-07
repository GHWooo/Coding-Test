//solved
const fs = require('fs');
[a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
if(a > b) console.log('>');
if(a < b) console.log('<');
if(a === b) console.log('==');