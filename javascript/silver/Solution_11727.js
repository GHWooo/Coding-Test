// solved
const fs = require('fs'); 
const n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let cases = [1, 3, 5];
for(let i = 3; i < n; i++){
    cases[i] = (cases[i - 1] + (cases[i - 2] * 2)) % 10007;
}
console.log(cases[n - 1] % 10007);