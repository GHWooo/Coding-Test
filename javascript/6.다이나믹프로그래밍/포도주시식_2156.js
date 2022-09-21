// solved
const fs = require('fs');
[n, ...wines] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = parseInt(n);
wines = wines.map(Number);
let dp = [0, wines[0], wines[0] + wines[1]];
for(let i = 3; i <= n; i++){
    dp.push(Math.max(dp[i-1], dp[i-3] + wines[i-2] + wines[i-1], dp[i-2] + wines[i-1]));
}
console.log(dp[n]);