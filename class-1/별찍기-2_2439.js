//solved
const fs = require('fs');
let n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let star = '*';
let result = [];
for(let i = 0; i < n; i++){
    let temp = star;
    for(let j = 0; j < n-i-1; j++){
        temp = ' ' + temp;
    }
    result.push(temp);
    star += '*';
}
console.log(result.join('\n'));