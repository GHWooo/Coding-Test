const fs = require('fs');
[n, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let arith, median, mode, range;
input.sort((a, b) => a - b);

arith = Math.round(input.reduce((a, b)=>a + b) / n);

const mid = parseInt(n / 2);
median = input[mid];

let temp = [[input[0], 1]];
for(let i = 1; i < n; i++){
    if(input[i] === input[i - 1]){
        temp[temp.length - 1][1]++;
    }
    else{
        temp.push([input[i], 1]);
    }
}
temp.sort((a, b) => {
    if(a[1] === b[1]) return a[0] - b[0];
    return b[1] - a[1];
})
if(temp.length > 1){
    temp[0][1] === temp[1][1]?mode = temp[1][0]:mode = temp[0][0];
}
else mode = temp[0][0]

range = input[n-1] - input[0];

let result = [arith, median, mode, range];
console.log(result.join('\n'));