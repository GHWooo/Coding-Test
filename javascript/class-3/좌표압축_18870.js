//solved
const fs = require('fs');
[n, coordinate] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
coordinate = coordinate.split(' ').map((a, b)=>[parseInt(a), b]).sort((a, b)=>{
    return a[0] - b[0];
});
let result = [];
result[coordinate[0][1]] = 0;
let num = 0;
for(let i = 1; i < parseInt(n); i++){
    let temp = coordinate[i - 1][0];
    if(temp === coordinate[i][0]) result[coordinate[i][1]] = num;
    else result[coordinate[i][1]] = ++num;
}
console.log(result.join(' '));