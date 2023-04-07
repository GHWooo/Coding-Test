//solved
const fs = require('fs'); 
[nm, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, m] = nm.split(' ').map(Number);
input = input.map(x => x.split(' '));
let web = new Map();
let result = [];
for(let i = 0; i < n; i++) web.set(input[i][0], input[i][1]);
for(let i = n; i < n + m; i++) result.push(web.get(input[i][0]));
console.log(result.join('\n'));