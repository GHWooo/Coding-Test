//solved
const fs = require('fs');
[n, ...house] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
house = house.map(x=>x.split(' ').map(Number));
for(let i = 1; i < n; i++){
    for(let j = 0; j < 3; j++){
        const tx = j + 1 >= 3? j - 2: j + 1;
        const ty = j + 2 >= 3? j - 1: j + 2;
        house[i][j] += Math.min(house[i-1][tx], house[i-1][ty]);
    }
}
console.log(Math.min(...house[n-1]));