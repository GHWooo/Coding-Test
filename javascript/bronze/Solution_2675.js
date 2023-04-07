//solved
const fs = require('fs');
[t, ...cases] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
t = parseInt(t);
cases = cases.map(x=>{
    [a, b] = x.split(' ');
    return [parseInt(a), b];
});
let result = [];
for(let k = 0; k < t; k++){
    [count, str] = cases[k];
    let temp = '';
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < count; j++){
            temp += str[i];
        }
    }
    result.push(temp);
}
console.log(result.join('\n'));