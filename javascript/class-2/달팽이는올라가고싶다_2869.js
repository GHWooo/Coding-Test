// solved
const fs = require('fs');
[a, b, v] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const dayh = a - b;
const target = v - a;
let count = parseInt(target / dayh);
let h = count * dayh;

while(h < v){
    count++;
    h += a;
    if(h >= v) break;
    h -= b;
}
console.log(count);