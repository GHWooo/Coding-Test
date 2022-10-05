//solved
const fs = require('fs');
[n, ...xy] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
xy = xy.map(x=>x.split(' ').map(Number));
xy.sort((a, b)=>{
    if(a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
})
console.log(xy.map(x=>{
    const char = x[0] + ' ' + x[1];
    return char
}).join('\n'));