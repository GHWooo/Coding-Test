// solved
const fs = require('fs');
[t, ...kn] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
t = +t;
kn = kn.map(Number);
let result = [];
let apartment = Array.from({length: 15}, ()=>[0, 1]);
let temp = [];
for(let j = 0; j <= 14; j++) temp.push(j);
apartment[0] = temp;
for(let i = 0; i < t; i++){
    const k = kn[i * 2];
    const n = kn[(i * 2) + 1];
    for(let j = 1; j <= k; j++){
        for(let x = 1; x <= n; x++){
            apartment[j][x] = apartment[j][x-1] + apartment[j-1][x];
        }
    }
    result.push(apartment[k][n]);
}
console.log(result.join('\n'));