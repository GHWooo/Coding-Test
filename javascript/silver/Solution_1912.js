// solved
const fs = require('fs');
[n, a] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = parseInt(n);
a = a.split(' ').map(x=>+x);
let result = [a[0]]; 
for(let i = 1; i < n; i++){
    if(a[i] < a[i] + result[i-1]) result[i] = a[i] + result[i-1];
    else result[i] = a[i];
}
console.log(Math.max(...result));