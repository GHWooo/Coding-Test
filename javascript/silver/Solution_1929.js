const fs = require('fs');
[m, n] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let result = [];

for(let i = m; i <= n; i++){
    let state = true;
    if(i > 1){
        for(let j = 2; j*j <= i; j++){
            if(i % j === 0) state = false;
        }
    }
    else state = false;
    if(state) result.push(i);
}

console.log(result.join('\n'));