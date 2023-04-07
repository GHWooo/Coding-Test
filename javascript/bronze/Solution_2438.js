//solved
const fs = require('fs');
let n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let stars = '*';
let result = [];
while(n > 0){
    result.push(stars);
    stars += '*';
    n--;
}
console.log(result.join('\n'));