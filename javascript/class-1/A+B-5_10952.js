//solved
const fs = require('fs');
let cases = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
cases = cases.map(x=>x.split(' ').map(Number));
let result = [];
for(let i = 0; i < cases.length-1; i++) result.push(cases[i][0] + cases[i][1]);
console.log(result.join('\n'));