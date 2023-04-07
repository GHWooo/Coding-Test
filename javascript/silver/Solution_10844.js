// solved
const fs = require('fs');
n = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let result = Array.from({length: n+1}, ()=>[]);
result[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for(let i = 2; i <= n; i++){
    for(let j = 0; j <= 9; j++){
        if(j === 0) result[i][j] = result[i-1][1] % 1000000000;
        else if(j === 9) result[i][j] = result[i-1][8] % 1000000000;
        else result[i][j] = (result[i-1][j-1] + result[i-1][j+1]) % 1000000000;
    }           
}
console.log((result[n].reduce((a, b)=>(a + b) % 1000000000) % 1000000000));