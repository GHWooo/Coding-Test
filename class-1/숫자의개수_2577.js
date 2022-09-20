// solved
const fs = require('fs');
[a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
let temp = (a * b * c).toString();
let result = Array.from({length: 10}, ()=>0);
for(let i = 0; i < temp.length; i++){
    result[temp[i]] += 1;
}
console.log(result.join('\n'));