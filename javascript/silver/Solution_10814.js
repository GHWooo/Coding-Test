//solved
const fs = require('fs');
[n, ...list] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
list = list.map((x, i) => {
    [a, b] = x.split(' ');
    a = parseInt(a);
    return [a, b, i];
});
list.sort((a, b) => {
    if(a[0] !== b[0]) return a[0] - b[0];
    else return a[2] - b[2];
})
list = list.map(x => {
    return x[0] + ' ' + x[1];
})
console.log(list.join('\n'));