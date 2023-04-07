// solved
const fs = require('fs');
const n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let result = 0;
let temp = 1;
while(1){
    if(temp > n) break;
    let list = temp.toString().split('');
    let listSum = 0;
    list.map(x=>listSum += parseInt(x));
    const sum = temp + listSum;
    if(sum === n){
        result = temp; break;
    }
    temp++;
}
console.log(result);