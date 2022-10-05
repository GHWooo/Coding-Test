// solved
const fs = require('fs');
[nm, cards] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
[n, m] = nm.split(' ').map(Number);
cards = cards.split(' ').map(Number);

let max = 0;
for(let i = 0; i < n - 2; i++){
    for(let j = i+1; j < n - 1; j++){
        for(let k = j+1; k < n; k++){
            const sum = cards[i] + cards[j] + cards[k];
            if(max < sum && m >= sum) max = sum;
        }
    }
}
console.log(max);