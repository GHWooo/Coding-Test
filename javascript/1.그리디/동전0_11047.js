//solved

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

[n, ...coin] = input;
const N = Number(n.split(' ')[0]);
let K = Number(n.split(' ')[1]);

let result = 0;

for(let i = N - 1; i > -1; i--){
    if(Number(coin[i]) <= K){
        result += parseInt(K / Number(coin[i]));
        K = K % Number(coin[i]);

        if(K === 0){
            break;
        }
    }
}

console.log(result);