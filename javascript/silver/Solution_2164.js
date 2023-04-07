//solved
const fs = require('fs');
const n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let list = [];
for(let i = 1; i <= n; i++) list.push(i);
let index = 1;
while(index < list.length){
    list.push(list[index]);
    index += 2;
}
console.log(list[list.length - 1]);