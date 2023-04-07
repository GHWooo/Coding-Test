// solved
const fs = require('fs');
[l, str] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
l = parseInt(l);
let result = 0;
let r = 1;
for(let i = 0; i < l; i++){
    result += (str.charCodeAt(i) - 96) * r;
    r *= 31;
    r %= 1234567891;
}
console.log(result % 1234567891);