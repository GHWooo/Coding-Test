// solved
const fs = require('fs');
[n, list] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
list = list.split(' ').map(Number);
let count = 0;
for(l of list){
    if(l === 1) continue;
    let result = true;
    for(let i = 2; i < l; i++){
        if(l % i === 0){
            result = false; break;
        }
    }
    if(result) count++;
}
console.log(count);