//solved
const fs = require('fs');
[a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = [];
let temp = Math.min(a, b);
while(temp > 0){
    if(a % temp === 0 && b % temp === 0){
        result.push(temp); break;
    }
    temp--;
}
temp = Math.min(a, b);
let count = 1;
while(1){
    let temp2 = temp * count;
    if(temp2 % a === 0 && temp2 % b === 0){
        result.push(temp2); break;
    }
    count += 1;
}
console.log(result.join('\n'));