//solved
const fs = require('fs');
const n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let count = 0;
for(let i = 1; i <= n; i++){
    if(i % 5 === 0) count++;
    if(i % 25 === 0) count++;
    if(i % 125 === 0) count++;
}
console.log(count);