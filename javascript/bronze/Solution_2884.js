//solved
const fs = require('fs');
[h, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
if(m >= 45) console.log(h, m-45);
else{
    h === 0?console.log(23, 60-45+m):console.log(h-1, 60-45+m);
}