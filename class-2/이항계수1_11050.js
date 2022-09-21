//solved
const fs = require('fs');
[n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const factorial = (num) => {
    let val = 1;
    for(let i = 2; i <= num; i++) val *= i;
    return val;
}
const denominator = factorial(n);
const numerator = factorial(k) * factorial(n - k);
console.log(denominator / numerator);