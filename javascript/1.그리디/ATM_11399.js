const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, time_taken] = input;
n = Number(n);
time_taken = time_taken.split(' ');
time_taken.sort(function(a, b){
    return a - b;
})

let accumulate = 0;
let result = 0;

for(let i = 0; i < n; i++){
    accumulate += Number(time_taken[i]);
    result += accumulate;
}

console.log(result);