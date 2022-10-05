//solved
const fs = require('fs');
const n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let count = 1;
let level = 1;
let add = 0;

while(1){
    count += add;
    if(n <= count){
        console.log(level); break;
    }
    add += 6;
    level++;
}
