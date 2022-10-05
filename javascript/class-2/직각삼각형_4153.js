//solved
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>x.split(' ').map(Number).sort((a, b)=>a-b));
let result = [];
for(i of input){
    if(i[0] === 0) break;
    (i[0]**2) + (i[1]**2) === i[2]**2
    ?result.push('right')
    :result.push('wrong');
}
console.log(result.join('\n'));