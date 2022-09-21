// solved
const fs = require('fs');
[t, ...n] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = n.map(Number);
let result = [];

const factorial = (a, b, c, d) => {
    let deno = 1;
    for(let i = a; i > 1; i--) deno *= i;
    let tempOne = 1;
    if(b !== 0){
        for(let i = b; i > 1; i--) tempOne *= i;
    }
    let tempTwo = 1;
    if(c !== 0){
        for(let i = c; i > 1; i--) tempTwo *= i;
    }
    let tempThree = 1;
    if(d !== 0){
        for(let i = d; i > 1; i--) tempThree *= i;
    }
    return deno / (tempOne * tempTwo * tempThree);
}

for(num of n){
    const maxTwo = parseInt(num / 2);
    const maxThree = parseInt(num / 3);
    let cases = [];
    for(let i = 0; i <= maxTwo; i++){
        let temp = num;
        temp -= (2 * i);
        for(let j = 0; j <= maxThree; j++){
            if(temp < (3 * j)) break;
            cases.push([temp - (3 * j), i, j]);
        }
    }
    let sum = 0;
    for(c of cases){
        sum += factorial(c.reduce((a,b)=>a+b,0), c[0], c[1], c[2]);
    }
    result.push(sum);
}
console.log(result.join('\n'));