//solved
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = 'mixed'
for(let i = 0; i < input.length-1; i++){
    let temp = input[i]-input[i+1];
    if(temp !== 1 && temp !== -1) break;
    if(i === input.length-2){
        input[0] === 1?result = 'ascending':result = 'descending';
    }
}
console.log(result);