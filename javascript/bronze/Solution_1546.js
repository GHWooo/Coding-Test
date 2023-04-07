//solved
const fs = require('fs');
[n, l] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
l = l.split(' ').map(x=>+x);
const max = Math.max(...l);
for(let i = 0; i < l.length; i++){
    l[i] = (100 * l[i]) / max
}
console.log(l.reduce((a, b)=>a+b, 0) / l.length);