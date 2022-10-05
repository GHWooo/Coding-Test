// solved
const fs = require('fs');
let n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let num = 665;

while(n > 0){
    num++;
    if(num.toString().includes('666')) n--;
}
console.log(num);