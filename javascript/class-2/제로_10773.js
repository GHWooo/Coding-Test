//solved
const fs = require('fs');
[k, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = [];
for(num of input){
    if(num !== 0) result.push(num);
    else result.pop();
}
if(result.length > 0){
    result = result.reduce((a, b) => a + b);
}
else result = 0;
console.log(result);