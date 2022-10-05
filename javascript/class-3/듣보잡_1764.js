// solved
const fs = require('fs'); 
[nm, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, m] = nm.split(' ').map(Number);
let notHeard = new Map();
let result = [];
for(let i = 0; i < n; i++) notHeard.set(input[i]);
for(let i = n; i < n + m; i++){
    if(notHeard.has(input[i])) result.push(input[i]);
}
result.sort();
result = [result.length, ...result];
console.log(result.join('\n'));