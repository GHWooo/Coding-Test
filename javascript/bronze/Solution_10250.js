// solved
const fs = require('fs');
[t, ...test] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];
for(i of test){
    [h, w, n] = i.split(' ').map(Number);
    let floor = (n % h === 0? h : n % h);
    let rooms = (floor === h?n / h:parseInt(n / h) + 1);
    rooms < 10?rooms = '0' + rooms:rooms = rooms.toString();
    result.push(floor + rooms);
}
console.log(result.join('\n'));