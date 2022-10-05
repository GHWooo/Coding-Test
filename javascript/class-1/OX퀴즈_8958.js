//solved
const fs = require('fs');
[t, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];
for(i of input){
    let score = 0;
    let count = 1;
    for(let j = 0; j < i.length; j++){
        if(i[j] === 'O'){
            score += count;
            count++;
        }
        else count = 1;
    }
    result.push(score);
}
console.log(result.join('\n'));