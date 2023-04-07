// solved
const fs = require('fs');
[n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let list = [];
let result = [];
for(let i = 1; i <= n; i++)  list.push(i);
let index = k - 1;
while(list.length > 0){
    const temp = list.splice(index, 1);
    result.push(temp);
    if(index + (k - 1) > list.length - 1){
        index = (index + (k - 1)) % list.length;
    }
    else index += (k - 1);
}
console.log('<' + result.join(', ') + '>');