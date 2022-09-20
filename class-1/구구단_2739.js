//solved
const fs = require('fs');
let n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let result = [];
for(let i = 1; i < 10; i++){
    const temp = n + ' * ' + i + ' = ' + (n * i);
    result.push(temp);
}
console.log(result.join('\n'));