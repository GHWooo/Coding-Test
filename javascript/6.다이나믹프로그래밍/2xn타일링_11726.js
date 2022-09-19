// solved
const fs = require('fs');
n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

const list = [0, 1, 2]
for(let i = 3; i <= n; i++){
    list[i] = (list[i-1] + list[i-2]) % 10007;
}
console.log(list[n]);