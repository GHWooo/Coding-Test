//solved
const fs = require('fs');
[n, ...list] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
n = parseInt(n);
list = list.map(x=>x.split(' ').map(Number));
let result = Array.from({length: n}, ()=>1);
for(let i = 0; i < n; i++){
    for(let j = i + 1; j < n; j++){
        if(list[i][0] > list[j][0] && list[i][1] > list[j][1]) result[j]++;
        if(list[i][0] < list[j][0] && list[i][1] < list[j][1]) result[i]++;
    }
}
console.log(result.join(' '));