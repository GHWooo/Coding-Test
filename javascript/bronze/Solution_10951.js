//solved
const fs = require('fs');
let cases = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
cases = cases.map(x=>x.split(' ').map(Number));
let result = [];
for(i of cases) result.push(i[0] + i[1]);
console.log(result.join('\n'));