// solved
const fs = require('fs');
[t, ...cases] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
let result = [];
let count = [[1, 0], [0, 1]];

for(c of cases){
    if(!count[c]){
        for(let i = count.length-1; i < c; i++){
            count[i+1] = [count[i-1][0] + count[i][0],
                        count[i-1][1] + count[i][1]];
        }
    }
    result.push(count[c].join(' '));
}
console.log(result.join('\n'));