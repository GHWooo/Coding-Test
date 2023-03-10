// solved

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
  solution(input);
  process.exit();
});

function solution(input){
    const [n, k] = input.shift().split(' ').map(Number);
    
    input = input.map(line => line.split(' ').map(Number));

    const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            if (input[i - 1][0] > j) {
                dp[i][j] = dp[i - 1][j];
                continue;
            }

            dp[i][j] = Math.max(input[i - 1][1] + dp[i - 1][j - input[i - 1][0]], dp[i - 1][j]);
        }
    }

    console.log(dp[n][k]);
}