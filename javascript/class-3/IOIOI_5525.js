// solved
const fs = require('fs');
[n, m, s] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = Number(n);
m = Number(m);
const standard = 'OI'.repeat(n);
let result = 0;

for(let i = 0; i < m - (n * 2); i++) {
    let count = 0;

    if(s[i] === 'I') {
        while(s[i + 1] === 'O' && s[i + 2] === 'I') {
            count += 1;

            if(count === n) {
                count -= 1;
                result += 1;
            }

            i += 2;
        }
    }
}

console.log(result);