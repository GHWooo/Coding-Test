//solved
const fs = require('fs');
[...n] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = 0;
for(i of n){
    result += (i**2);
}
console.log(result % 10);