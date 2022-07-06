const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, arr_A, arr_B] = input;

n = Number(n);
arr_A = arr_A.split(' ').map((i)=>Number(i));
arr_B = arr_B.split(' ').map((i)=>Number(i));

arr_A.sort(function(a, b){
    return a - b;
});
arr_B.sort(function(a, b){
    return b - a;
});

let result = 0;

for(let i = 0; i < n; i++){
    result += (arr_A[i] * arr_B[i]);
}

console.log(result);