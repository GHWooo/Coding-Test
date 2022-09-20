//solved
const fs = require('fs');
let n = fs.readFileSync('/dev/stdin').toString().trim().split('');
let result = [];
for(let i = 97; i < 123; i++){
    const temp = String.fromCharCode(i);
    result.push(n.indexOf(temp));
}
console.log(result.join(' '));